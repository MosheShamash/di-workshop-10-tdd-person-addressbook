class Person {
    constructor(firstName, surname, dob) {
        this.firstName = firstName[0].toUpperCase() + firstName.slice([1])
        this.surname = surname[0].toUpperCase() + surname.slice([1])
        this.dob = dob
        this.emails = []
        this.phoneNumbers = []
    }

    fullName() {
        return this.firstName + " " + this.surname
    }

    addEmail(email) {
        this.emails.push(email)
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber)
    }

    returnFormattedDetails() {
        return this.fullName() + '\n'
        + "--------"
        + '\n' + "DOB: " + this.dob + '\n' + '\n'
        + "Email Addresses:" + '\n' + '- '
        + this.emails.join('\n'+ '- ' )
        + '\n' + '\n'
        + "Phone Numbers:" + '\n' + '- '
        + this.phoneNumbers.join('\n' + '- ')
    }
}

module.exports = Person