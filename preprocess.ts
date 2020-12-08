import * as fs from 'fs'
import YAML from 'yaml'

const file = './ecs/generated/beats/fields.ecs.yml'
const txt = YAML.parse(fs.readFileSync(file).toString())
console.log(txt)
fs.writeFileSync(file + '.json', JSON.stringify(txt, null, 2))

let schemaFiles = fs.readdirSync('ecs/schemas')
schemaFiles.forEach((schemaFile) => {
    if (schemaFile.endsWith('.yml')) {
        const json = YAML.parse(fs.readFileSync(`ecs/schemas/${schemaFile}`).toString())
        fs.writeFileSync(`ecs/schemas/${schemaFile}.json`, JSON.stringify(json, null, 2))
    }
})

// Write the raw schema JSON master file
schemaFiles = fs.readdirSync('ecs/schemas')
const schemas = [] as any[]
schemaFiles.forEach((schemaFile) => {
    if (schemaFile.endsWith('.json')) {
        console.log("Processing " + schemaFile)
        const json = JSON.parse(fs.readFileSync(`ecs/schemas/${schemaFile}`).toString())
        schemas.push(json[0]);
    }
})

fs.writeFileSync('ecs/all.json', JSON.stringify(schemas, null, 2));