class AddressBook {
    constructor() {
        this.entries = []
        this.firstNameSearch = []
    }

    add(person) {
        this.entries.push(person)
    }

    findByFirstName(name) {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i].firstName == name) {
                this.firstNameSearch.push(this.entries[i])
            }
        }
    }
}

module.exports = AddressBook