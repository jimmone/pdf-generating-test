const fs = require('fs');
const app = require('./app')
const uuid = require('uuid')
const PDFDocument = require('pdfkit')
const CliProgress = require('cli-progress');

const progressBar = new CliProgress.SingleBar({}, CliProgress.Presets.shades_classic);

let docCount = process.argv[2] || 1
const maxDocCount = 1000

if (docCount > maxDocCount) {
    docCount = maxDocCount
    console.log('Limiting documents to', maxDocCount)
}

console.log('Creating PDF documents...')
progressBar.start(docCount, 0)

for (let i = 0; i < docCount; i++) {

    doc = new PDFDocument()

    doc.pipe(fs.createWriteStream(__dirname + '/../documents/ ' + uuid() + '.pdf'));

    app(doc)

    doc.end()

    progressBar.update(i + 1)

}

progressBar.stop()
console.log('Documents created')
