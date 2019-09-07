const blobStream = require('blob-stream');
const app = require('./src/app')
const PDFDocument = require('pdfkit')

const doc = new PDFDocument()

const stream = doc.pipe(blobStream());

app(doc)

doc.end()

stream.on('finish', function () {
  const url = stream.toBlobURL('application/pdf');
  const iframe = document.getElementById('pdf')
  iframe.src = url;
});
