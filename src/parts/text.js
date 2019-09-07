const faker = require('faker')
const dims = require('../constants/dimensions')

let heading = faker.lorem.words(2)
const text = faker.lorem.paragraphs(8)
heading = heading.charAt(0).toUpperCase() + heading.slice(1)

module.exports = (doc) => {

    doc.save()
        .fontSize(16)
        .text(heading, dims.topY, dims.leftX)
        .moveDown()
        .fontSize(12)
        .text(text)

}