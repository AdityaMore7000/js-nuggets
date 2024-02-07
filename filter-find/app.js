/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {string} position
 */

/**
 * @type {Person[]} 
 */

const people = [
    { name: 'John', age: 20, position: 'developer' },
    { name: 'Jane', age: 30, position: 'designer' },
    { name: 'Jack', age: 40, position: 'manager' },
    { name: 'Jill', age: 50, position: 'developer' },
    { name: 'James', age: 60, position: 'designer' },
]

const youngPeople = people.filter((person)=>person.age<=30)

const developers = people.filter((person)=>person.position==='developer')
// console.log(developers)

const jane = people.filter((person)=>person.name==='Jane')
console.log(jane)