const generateRowData = require('../data/form-data')
const dims = require('../constants/dimensions')

module.exports = (doc) => {

    const rows = generateRowData()
    const spacing = 40
    const top = dims.top + 100
    const left = dims.left

    for (let i = 0; i < rows.length; i++) {

        doc
            .fontSize(14)

        doc
            .text(rows[i].key + ':', left + 10, top + spacing * i - 20)

        doc
            .text(rows[i].value, left + 100, top + spacing * i - 20)

        doc
            .moveTo(left, top + spacing * i)
            .lineTo(dims.right, top + spacing * i)
            .stroke();
    }

}