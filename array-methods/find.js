const numbers = [5, 6, 8, 7, 12, 65, 2, 54];
const result = numbers.find(num => num > 10);
console.log(result);

const num2 = [3, 5, 6, 7, 8, 9, 12];
const result2 = num2.find(num => num % 2 === 0);
console.log(result2);

const words = ["cat", "elephant", "dog"];
const resultWorld = words.find(word => word.length > 3 );
console.log(resultWorld);

const numbers11 = [12, 24, 44, 54];
const result11 = numbers11.find(num => num === 29);
console.log(result11);

const users = [
    {id:1, name:"hridoy"},
    {id:2, name:"PH"},
    {id:"3", name:"Promel"},
    {id:4, name:"Hossain"},
];
const resultId = users.find(user => user.id == 3);
console.log(resultId);

const products = [
 {name:"pen", price:20},
 {name:"bag", price:200},
 {name:"Bool", price:200},
 {name:"book", price:200},
 {name:"ball", price:200},
 {name:"bc", price:200},
];
const resultPrice = products.find(p => p.price >= 200);
console.log(resultPrice);

const names = ["karim","rahim","Akib"];
const resultName = names.find(name => name.toLowerCase().startsWith("a"));
console.log(resultName);

const products1 = [
 {name:"phone"},
 {name:"laptop"}
];
const resultProductName = products1.find(p => p.name === "laptop");
console.log(resultProductName);

const users8 = [
 {name:"A", active:false},
 {name:"B", active:true}
];
const resultActive = users8.find(u => u.active);
console.log(resultActive);

const words111 = ["html","css","javascript"];
const resultIncludes = words111.find(w => w.includes("sc"));
console.log(resultIncludes);

const nums22 = [0,1,5,2];
const result22 = nums22.find((num,index)=> num > index);
console.log(result22);

const values = [0,null,"",NaN,false,undefined,"hello"];
// const result211 = values.find(v => v);
const result211 = values.find(Boolean);
console.log(result211);

const texts = ["hi","hello world","ok"];
const result122 = texts.find(t => t.length > 10);
console.log(result122);