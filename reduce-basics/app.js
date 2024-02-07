/**
 * @typedef {object} Item
 * @property {string} title
 * @property {number} price
 * @property {number} amount
 */

/**
 * @type {Item[]} 
 */

const cart = [
    { title: "laptop", price: 1000, amount: 1 },
    { title: "phone", price: 500, amount: 2 },
    { title: "tablet", price: 300, amount: 3 },
    { title: "keyboard", price: 100, amount: 4 },
    { title: "mouse", price: 50, amount: 5 },
    { title: "monitor", price: 200, amount: 6 },
    { title: "headphone", price: 150, amount: 7 },
    { title: "printer", price: 400, amount: 8 },
    { title: "scanner", price: 250, amount: 9 },
    { title: "webcam", price: 350, amount: 10 },
];

let total = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem;
    total.totalItems += amount;
    total.totalPrice += amount * price;
    return total;
},{
    totalItems:0,
    totalPrice:0
})

console.log(total)