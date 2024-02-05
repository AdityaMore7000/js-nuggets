/**
 * @typedef {Object} Person
 * @property {String} name
 * @property {Number} age
 * @property {String} position
 */

/**
 * @type {Person[]}
 */
const people = [
    {
        name: 'John',
        age: 32,
        position: 'Developer'
    },
    {
        name: 'Jane',
        age: 28,
        position: 'Designer'
    },
    {
        name: 'Tom',
        age: 21,
        position: 'Intern'
    },
    {
        name: 'Harry',
        age: 40,
        position: 'Manager'
    },
    {
        name: 'Sarah',
        age: 35,
        position: 'CEO'
    },
    {
        name: 'Bill',
        age: 50,
        position: 'CTO'
    }
]

const ages = people.map(person => {
    const newPeople = {
        ...person,
        age: person.age * 2
    }
    return newPeople
})
console.log(ages) 
