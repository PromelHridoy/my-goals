const { use } = require("react");

const nums = [1, 2, 4, 5];
nums.forEach(n => console.log(n))

const fruits = ["apple","banana","orange"];
fruits.forEach((fruits, index) => {
    console.log(fruits, index);
})

const nums2 = [11, 33, 44, 55];
let sum = 0;
nums2.forEach(n => {
    sum += n;
})
console.log(sum);

const nums3 = [1,2,3];
nums3.forEach((n,i,arr) =>  {
    arr[i] = n *2;
})
console.log(nums3);

const users = [
 {name:"Rahim"},
 {name:"Karim"}
];
users.forEach(user => console.log(user.name));

const items = ["html","css","js"];
items.forEach(item => {
  console.log(`<li>${item}</li>`);
});

const nums5 = [1,2,3,4];

nums5.forEach(n => {
 if(n % 2 === 0){
  console.log(n);
 }
});

const names =["rahim", "karim"];
names.forEach(name => {
    console.log(name.toUpperCase());
})

const products = [
 {name:"Laptop",price:1000},
 {name:"Phone",price:500}
];
products.forEach(p => {
    console.log(p.name, p.price);
})

const cart = [
 {price:100,qty:2},
 {price:50,qty:1}
];
let total = 0;
cart.forEach(item => {
    total += item.price * item.qty;
})
console.log(total);

const users22 = [
 {name:"A"},
 {name:"B"}
];
users22.forEach(u => {
 u.active = true;
});
console.log(users22);

const words = [" hello "," world "];
words.forEach((w,i,arr) => {
    arr[i] = w.trim();
})
console.log(words);

const nums00 = [3,7,10,15];
nums00.forEach(n => {
    console.log((n > 10) ? `Big, ${n}` : "no"  );
})

const emails = ["a@gmail.com","b@yahoo.com"];

emails.forEach(email => {
 if(email.includes("@gmail.com")){
  console.log(email,"valid");
 }
});

const user = [
 {name:"A",age:20},
 {name:"B",age:25}
];
user.forEach(u => {
 u.age += 1;
});
console.log(user);
