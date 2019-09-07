const faker = require('faker')

const generateTableData = () => {

    const columns = [
        {
            header: "Product",
            value: () => faker.commerce.productName(),
            width: .55,
        },
        {
            header: "Qty",
            value: () => faker.random.number({ min: 1, max: 5 }),
            width: .12,
        },
        {
            header: "Price",
            value: () => faker.random.number({ min: 1, max: 1000 }),
            width: .14,
        },
        {
            header: "Total",
        }
    ]

    let usedWidth = 0

    columns
        .filter(column => {
            column.rows = [column.header]
            usedWidth += column.width || 0
            return !column.width
        })
        .forEach((column, index, array) => column.width = (1 - usedWidth) / array.length)

    const rowCount = 6

    for (var i = 1; i < rowCount; i++) {
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].header === "Total") {
                columns[j].rows.push(columns[j - 1].rows[i] * columns[j - 2].rows[i])
            } else {
                columns[j].rows.push(columns[j].value())
            }
        }
    }

    return columns

}

module.exports = generateTableData