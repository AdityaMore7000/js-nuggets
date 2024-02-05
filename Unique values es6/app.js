/**
 * @typedef {Object} Item 
 * @property {String} name
 * @property {String} type
 */

/**
 * @param {Item[]} items
 */
const items = [
    {
        name:"Apple",
        type:"Breakfast"
    },
    {
        name:"Orange",
        type:"Breakfast"
    },
    {
        name:"Carrot",
        type:"Lunch"
    },
    {
        name:"Tomato",
        type:"Lunch"
    },
    {
        name:"Cucumber",
        type:"Lunch"
    },
    {
        name:"Banana",
        type:"Breakfast"
    },
    {
        name:"Pineapple",
        type:"Breakfast"
    },
    {
        name:"Strawberry",
        type:"Breakfast"
    },
    {
        name:"Lettuce",
        type:"Lunch"
    },
    {
        name:"Blueberry",
        type:"Breakfast"
    }
]

const categories = [...new Set(items.map(item => item.type))]

console.log(categories)