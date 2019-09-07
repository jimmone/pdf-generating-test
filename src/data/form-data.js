const faker = require('faker')

generateRowData = () => {

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email(firstName, lastName)
    const phone = faker.phone.phoneNumberFormat(0)
    const city = faker.address.city()
    const address = faker.address.streetAddress()
    const zipCode = faker.address.zipCode()

    const rows = [
        {
            key: "First name",
            value: firstName
        },
        {
            key: "Last name",
            value: lastName
        },
        {
            key: "Email",
            value: email
        },
        {
            key: "Phone",
            value: phone
        },
        {
            key: "City",
            value: city
        },
        {
            key: "Address",
            value: address
        },
        {
            key: "Zip code",
            value: zipCode
        },
    ]

    return rows

}

module.exports = generateRowData