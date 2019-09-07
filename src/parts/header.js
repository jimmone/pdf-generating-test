const dims = require('../constants/dimensions')

module.exports = (doc) => {

    doc.save()
        .fontSize(20)
        .text('Example PDF', dims.top, dims.left)

}
