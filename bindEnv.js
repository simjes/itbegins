const fs = require('fs')

const allFileContents = fs.readFileSync('.env', 'utf-8')
const args = allFileContents.split(/\r?\n/).map((line) => `--binding ${line}`)
console.log(...args)
