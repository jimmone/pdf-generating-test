const form = require('./parts/form')
const table = require('./parts/table')
const text = require('./parts/text')
const header = require('./parts/header')

module.exports = (doc) => {

  header(doc)
  form(doc)
  table(doc)

  doc.addPage()

  text(doc)

}
