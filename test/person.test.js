const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', ()=> {
    it('Should inititalize properly', ()=> {
        var person = new Person('Jonathan', 'Rafaeli', '1 Jan 1990')
        expect(person.firstName).to.equal('Jonathan')
        expect(person.surname).to.equal('Rafaeli')
        expect(person.dob).to.equal('1 Jan 1990')
        expect(person.emails).to.deep.equal([])
    })

    it('Should capitaliaze first name and surname properly', ()=> {
        var person = new Person('jonathan', 'rafaeli', '1 Jan 1990')
        expect(person.firstName).to.equal('Jonathan')
        expect(person.surname).to.equal('Rafaeli')
    })

    it('Should return a full name', ()=> {
        var person = new Person('jonathan', 'rafaeli', '1 Jan 1990')
        expect(person.fullName()).to.equal('Jonathan Rafaeli')
    })

    it('Should accept new emails and add them to the array', ()=> {
        var person = new Person('jonathan', 'rafaeli', '1 Jan 1990')
        person.addEmail('joe@gmail.com')
        person.addEmail('mo@gmail.com')
        expect(person.emails).to.deep.equal(['joe@gmail.com', 'mo@gmail.com'])
    })

    it('Should accept new phone numbers and adds them to the array', ()=> {
        var person = new Person('jonathan', 'rafaeli', '1 Jan 1990')
        person.addPhoneNumber('07909997888')
        person.addPhoneNumber('07465776555')
        expect(person.phoneNumbers).to.deep.equal(['07909997888', '07465776555'])
    })

    it("Should return a formatted summary of the Person's information", ()=> {
        var person = new Person('jonathan', 'rafaeli', '1 Jan 1990')
        person.addEmail('joe@gmail.com')
        person.addEmail('mo@gmail.com')
        person.addPhoneNumber('07909997888')
        person.addPhoneNumber('07465776555')
        var formattedDetails = 
        "Jonathan Rafaeli" + '\n' + "--------"
        + '\n' + "DOB: 1 Jan 1990" + '\n' + '\n'
        + "Email Addresses:" + '\n'
        + "- joe@gmail.com" + '\n'
        + "- mo@gmail.com" + '\n' + '\n'
        + "Phone Numbers:" + '\n'
        + "- 07909997888" + '\n'
        + "- 07465776555"

        expect(person.returnFormattedDetails()).to.equal(formattedDetails)

    })
})