const generateTableData = require('../data/table-data')
const dims = require('../constants/dimensions')

module.exports = (doc) => {

    const columns = generateTableData()
    const top = dims.top + 400
    const left = dims.left
    const height = 40
    let totalWidth = 0

    for (var i = 0; i < columns.length; i++) {

        const column = columns[i]
        const rows = column.rows
        const width = dims.width * column.width
        const currentLeft = left + totalWidth

        doc
            .fontSize(14)

        for (let j = 0; j < rows.length; j++) {
            const currentHeight = top + height * j
            doc.save()
                .rect(currentLeft, currentHeight, width, height)
                .stroke()

            doc.save()
                .text(rows[j], currentLeft + 10, currentHeight + 15)
        }

        totalWidth += width

    }

}
