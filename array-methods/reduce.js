const numbers = [10, 23, 45, 56, 54, 32];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

const number = [2, 3, 4, 5];
const multiply = number.reduce((total, num) => total * num, 1)
console.log(multiply);

const numbers1 = [5, 12, 8, 20, 3];
const max = numbers1.reduce((big, num) => {
    return num > big ? num : big;
})
console.log(max);

const cart = [
  { name: "phone", price: 500 },
  { name: "laptop", price: 1000 },
  { name: "mouse", price: 50 }
];
const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)
console.log(cartTotal);

const users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" }
];
const userResult = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {})
console.log(userResult);


const fruits = ["apple", "banana", "apple", "orange", "banana", "banana", "apple", "orange", "banana", "banana", "apple", "orange", "banana"];
const fruitResult = fruits.reduce((acc , fruit) => {
    acc[fruit] = (acc [fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitResult);

const arr = [[1,2], [3,4], [5,6]];
const flat = arr.reduce((acc, item) => {
    return acc.concat(item);
}, [])
console.log(flat);

