import { assertType } from 'typescript-is';
import { set, merge } from 'lodash';
import {  writeFileSync } from 'fs'

type EcsCsvRow = {
    ECS_Version: string,
    Indexed: 'true' | 'false',
    Field_Set: string,
    Field: string,
    Type: 'date' | 'object' | 'keyword' | 'text' | 'boolean' | 'long' | 'float' | 'integer' | 'geo_point' | 'ip',
    Level: 'core' | 'extended',
    Normalization: '' | 'array',
    Example: string | number,
}
type EcsCsv = EcsCsvRow[]
const csvdata = require('csvdata') as { load: (file: string) => Promise<EcsCsv> };

async function loadEcsCsv(file: string): Promise<EcsCsv> {
    const csv = await csvdata.load(file);
    assertType<EcsCsv>(csv);
    return csv;
}

function toJsDoc(row: EcsCsvRow): string {
    const minorVersion = `${row.ECS_Version.split('.')[0]}.${row.ECS_Version.split('.')[1]}`
    return '' +
        `/**
* ${row.Field}
* Docs: https://www.elastic.co/guide/en/ecs/${minorVersion}/ecs-${row.Field_Set}.html
* Field Set: ${row.Field_Set}
* Is Indexed: ${row.Indexed}
* Level: ${row.Level}
* Elasticsearch type: ${row.Type}
* Example: ${row.Example}
*/`
}

function parseType(row: EcsCsvRow): string {
    const suffix = row.Normalization === 'array' ? '[]' : ''
    let t: string = ''
    if (row.Type === 'date') {
        t = 'Date'
    }
    else if (row.Type in { keyword: 1, text: 1, ip: 1 }) {
        t = 'string'
    }
    else if (row.Type === 'long' || row.Type === 'float' || row.Type === 'integer') {
        t = 'number'
    }
    else if (row.Type === 'object') {
        t = 'object'
    }
    else if (row.Type === 'boolean') {
        t = 'boolean'
    }
    else if (row.Type === 'geo_point') {
        t = 'GeoPoint'
    }
    else {
        throw new Error(`Unknown type ${row.Type}, how to convert to JS primitive?`);
    }
    return `${t}${suffix}`;
}

async function generateEcsTypes(): Promise<void> {
    const csv = await loadEcsCsv('ecs/generated/csv/fields.csv')

    const coreFields: string[] = [];
    const extendedFields: string[] = [];
    const coreHierarchy = {};
    const extendedHierarchy = {};

    csv.forEach((row) => {
        const comment = toJsDoc(row)
        const jsType = parseType(row)
        const fieldLine = `${tabComment(comment, '\t')}\n\t"${row.Field}": ${jsType},\n\n`

        if (row.Level === 'core') {
            set(coreHierarchy, row.Field, {__data__: { comment, jsType, name: row.Field }})
            coreFields.push(fieldLine)
        }
        else {
            set(extendedHierarchy, row.Field, {__data__: { comment, jsType, name: row.Field }})
            extendedFields.push(fieldLine)
        }
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
    const indexTs = 'export type GeoPoint = { lon: number, lat: number }\n\n' +
        `${coreFieldsStr}\n\n${extendedFieldsStr}\n\n${allFieldsStr}\n\n${coreTreeStr}\n\n${extendedTreeStr}\n\n${wholeTreeHierarchy}`

    writeFileSync('src/index.d.ts', indexTs)
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

generateEcsTypes();