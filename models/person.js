class Person {
    constructor(firstName, surname, dob) {
        this.firstName = firstName[0].toUpperCase() + firstName.slice([1])
        this.surname = surname[0].toUpperCase() + surname.slice([1])
        this.dob = dob
        this.emails = []
    }

    fullName() {
        return this.firstName + " " + this.surname
    }

    addEmail(email) {
        this.emails.push(email)
    }
}

module.exports = Person