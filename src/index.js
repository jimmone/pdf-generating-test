const fs = require('fs');
const app = require('./app')
const uuid = require('uuid')
const PDFDocument = require('pdfkit')

let docCount = process.argv[2] || 1
const maxDocCount = 10000

if (docCount > maxDocCount) {
    docCount = maxDocCount
    console.log('Limiting documents to', maxDocCount)
}

console.log('Creating PDF documents...')

for (let i = 0; i < docCount; i++) {

    doc = new PDFDocument()

    doc.pipe(fs.createWriteStream(__dirname + '/../documents/ ' + uuid() + '.pdf'));

    app(doc)

    doc.end()

}

console.log('Documents created')
