const chai = require('chai')
const expect = chai.expect

const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person.js')

describe('AddressBook', ()=> {
    it('initializes properly', ()=> {
        book = new AddressBook()
        expect(book.entries).to.deep.equal([])
    })

    it('Can add people to the address book', ()=> {
        book = new AddressBook()
        person1 = new Person('Jonathan', 'Rafaeli', '1 Jan 1990')
        book.add(person1)
        expect(book.entries.length).to.equal(1)
        expect(book.entries).to.deep.equal([person1])
    })

    it('Can search for a Person with a certain first name', ()=> {
        book = new AddressBook()
        person1 = new Person('Jonathan', 'Rafaeli', '1 Jan 1990')
        person2 = new Person('Moshe', 'Shamash', '1 Feb 1998')
        book.add(person1)
        book.add(person2)
        book.findByFirstName("Moshe")
        expect(book.firstNameSearch).to.deep.equal([person2])

    })
})