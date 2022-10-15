import { set, merge } from 'lodash';
import { writeFileSync } from 'fs'
import rawSchema from './ecs/generated/beats/fields.ecs.yml.json';
import rawAll from './ecs/all.json';

const schema = rawSchema[0]['fields']

interface JsDocRequirements {
    name: string,
    level: string,
    type: string,
    description: string,
    example?: number | string,
}
interface FieldSet {
    name?: string,
}
function toJsDoc(fieldSet: FieldSet, row: JsDocRequirements, majorMinorVersion: string): string {
    return '' +
        `/**
* ${!fieldSet.name ? '' : `${fieldSet.name}.`}${row.name}
* Docs: https://www.elastic.co/guide/en/ecs/${majorMinorVersion}/ecs-${fieldSet.name || 'base'}.html
* Field Set: ${fieldSet.name || 'base'}
* Level: ${row.level}
* Elasticsearch type: ${row.type}
* Description: ${row.description.replace(/\n/, ' ')}
* Example: ${row.example || '<None>'}
*/`
}

interface ParseTypeRequirements {
    name: string,
    type: string,
}
function parseType(row: ParseTypeRequirements, parent: { name?: string }): string {
    let t: string = ''
    const fsName = parent.name || 'base'
    const allMatchFs: any = rawAll.find((fs: any) => fs.name === fsName);
    const allMatch = allMatchFs.fields.find((f: any) => `${fsName}.${f.name}`.endsWith(row.name))
    const suffix = allMatch && allMatch.normalize && allMatch.normalize[0] === 'array' ? '[]' : ''
    if (allMatch && allMatch.allowed_values) {
        t = '(' + allMatch.allowed_values.map((av: any) => `'${av.name}'`).join(' | ') + ')'
    }
    else if (row.type === 'date') {
        t = 'Date'
    }
    else if (row.type in { keyword: 1, text: 1, ip: 1 }) {
        t = 'string'
    }
    else if (row.type === 'long' || row.type === 'float' || row.type === 'integer') {
        t = 'number'
    }
    else if (row.type === 'object') {
        t = 'object'
    }
    else if (row.type === 'boolean') {
        t = 'boolean'
    }
    else if (row.type === 'geo_point') {
        t = 'GeoPoint'
    }
    else if (row.type === 'match_only_text') {
        t = 'string'
    }
    else if (row.type === 'scaled_float') {
        t = 'number'
    }
    else if (row.type === 'constant_keyword') {
        t = 'string'
    }
    else if (row.type === 'flattened') {
        t = 'object'
    }
    else if (row.type === 'nested') {
        t = 'object'
    }
    else if (row.type === 'wildcard') {
        t = 'string'
    }
    else {
        throw new Error(`Unknown type ${row.type}, how to convert to JS primitive?`);
    }
    return `${t}${suffix}`;
}

async function generateEcsTypes(majorMinorVersion: string): Promise<void> {
    const coreFields: string[] = [];
    const extendedFields: string[] = [];
    const coreHierarchy = {};
    const extendedHierarchy = {};

    const processField = (fieldSet: any, parent: any) => {
        if (fieldSet.hasOwnProperty('group')) {
            fieldSet.fields.forEach((field: any) => {
                processField(field, fieldSet)
            })
        }
        else {
            const comment = toJsDoc(parent, fieldSet, majorMinorVersion);
            const jsType = parseType(fieldSet, parent);
            const fieldLine = `${tabComment(comment, '\t')}\n\t"${parent.name ? `${parent.name}.` : ''}${fieldSet.name}"?: ${jsType},\n\n`

            if (fieldSet.level === 'core') {
                set(coreHierarchy, `${parent.name}.${fieldSet.name}`, { __data__: { comment, jsType, name: fieldSet.name } })
                coreFields.push(fieldLine)
            }
            else {
                set(extendedHierarchy, `${parent.name}.${fieldSet.name}`, { __data__: { comment, jsType, name: fieldSet.name } })
                extendedFields.push(fieldLine)
            }
        }
    }

    schema.forEach((fieldSet) => {
        processField(fieldSet, {})
    });

    coreFields.sort();
    const coreFieldsStr = '' +
        `export interface EcsCoreFields {
${coreFields.join('')}
}`

    extendedFields.sort();
    const extendedFieldsStr = '' +
        `export interface EcsExtendedFields {
${extendedFields.join('')}
}`

    const allFields = coreFields.concat(extendedFields)
    allFields.sort()
    const allFieldsStr = '' +
        `export interface EcsFields {
${allFields.join('')}
}`

    const coreTreeStr = expandTreeRootToStr(coreHierarchy, 'EcsCoreTree')
    const extendedTreeStr = expandTreeRootToStr(extendedHierarchy, 'EcsExtendedTree')
    const wholeHierarchy = merge(coreHierarchy, extendedHierarchy)
    const wholeTreeHierarchy = expandTreeRootToStr(wholeHierarchy, 'EcsTree')

    // And finally...
    const ecsTs = 'export type GeoPoint = { lon: number, lat: number }\n\n' +
        `${coreFieldsStr}\n\n${extendedFieldsStr}\n\n${allFieldsStr}\n\n${coreTreeStr}\n\n${extendedTreeStr}\n\n${wholeTreeHierarchy}`

    writeFileSync('src/ecs.d.ts', ecsTs)
}

function expandTreeRootToStr(node: { [key: string]: any }, typeName: string): string {
    return '' +
        `export interface ${typeName} {
${expandNode(node, 1)}
}`
}

function expandNode(node: { [key: string]: any }, depth: number): string {
    const keys = Object.keys(node)
    keys.sort()
    const strLines: string[] = []

    let tabs = ''
    for (let i = 0; i < depth; i++) {
        tabs += '\t';
    }

    keys.forEach((key) => {
        if (node[key].hasOwnProperty('__data__')) {
            const info = node[key].__data__ as { comment: string, jsType: string, name: string }
            if (!info.name.split) {
                console.log(info)
                console.log(info.name)
            }
            const namePieces = info.name.split('.')
            const shortName = namePieces[namePieces.length - 1]
            strLines.push(tabComment(info.comment, tabs) + '\n');
            strLines.push(`${tabs}"${shortName}": ${info.jsType},\n\n`)
        }
        else {
            strLines.push(`${tabs}${key}: {\n`)
            strLines.push(expandNode(node[key], depth + 1))
            strLines.push(`${tabs}}\n`)
        }
    })

    return strLines.join('')
}

function tabComment(comment: string, tabs: string): string {
    return comment.replace(/^/g, tabs).replace(/\n/g, `\n${tabs}`)
}

const ECS_VERSION = process.argv[2];
generateEcsTypes(ECS_VERSION);