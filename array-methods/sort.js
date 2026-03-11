const fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits);

const numbers = [10, 2, 30, 4];
numbers.sort();
console.log(numbers);

//Correct Number Sorting (Ascending)
const number = [12, 11, 17, 13, 15];
number.sort((a, b) => a - b);
console.log(number);
//Descending Number Sorting
number.sort((a,b)=> b- a)
console.log(number);

//Array of Objects Sorting
const products = [
  {name:"Phone", price:500},
  {name:"Laptop", price:1000},
  {name:"Mouse", price:50}
];
products.sort((a,b) => a.price - b.price)
console.log(products);

//String Case Insensitive Sorting
const names = ["rahim","Karim","alam"];
names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);

//Dates Sorting
const dates = ["2026-03-10", "2025-12-25", "2026-01-01", "2026-01-11", "2025-01-01"];
dates.sort((a,b) => new Date(a) - new Date(b));
console.log(dates);
dates.sort((a,b) => new Date(b) - new Date(a))
console.log(dates);
