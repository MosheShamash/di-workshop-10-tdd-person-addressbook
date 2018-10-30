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
})