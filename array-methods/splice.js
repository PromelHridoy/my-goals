const numbers =[1, 2, 3, 4, 5, 6];
numbers.splice(2,3)
console.log(numbers);

const fruits = ["apple","banana","orange"];
fruits.splice(1,0,"mango");
console.log(fruits);

const fruit = ["apple","banana","orange"];
fruit.splice(1,1,"mango");
console.log(fruit);

const numbers1 = [1,2,3,4];
numbers1.splice(-1,1);
console.log(numbers1);

const numbers3 = [1,2,5];
numbers3.splice(2,1,3,4,5,6,7,8);
console.log(numbers3);