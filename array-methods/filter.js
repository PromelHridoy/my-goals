const nums = [1,2,3,4,5,6];
const result = nums.filter(n => n % 2 === 0);
console.log(result);

const number = [12, 21, 32, 11, 14];
const result1 = number.filter(num => num > 15);
console.log(result1);

const words = ["hi","hello","javascript"];
const result2 = words.filter(w => w.length > 4);
console.log(result2);

const words3 = ["html","css","js"];
const result3 = words3.filter(w => w !== "css");
console.log(result3);

const values = [0,"hello","",null,42];
// const result11 = values.filter(Boolean);
const result11 = values.filter(v => v);
console.log(result11);

const users = [
 {name:"A",age:15},
 {name:"B",age:20},
 {name:"C",age:25},
 {name:"D",age:21},
 {name:"E",age:16},
 {name:"F",age:14},
 {name:"G",age:18},
 {name:"H",age:15},
];
const result22 = users.filter(u => u.age >= 18);
console.log(result22);

const users1 = [
 {name:"A",active:true},
 {name:"B",active:true},
 {name:"Aa",active:true},
 {name:"Ba",active:false},
 {name:"Aw",active:false},
 {name:"Bw",active:false},
 {name:"Aq",active:false},
 {name:"Bq",active:false}
];
const resultActive = users1.filter(u => u.active);
console.log(resultActive);

const tasks = [
 {title:"task1",done:true},
 {title:"task2",done:false},
 {title:"task3",done:false},
 {title:"task4",done:true},
 {title:"task5",done:false}
];
const result0 = tasks.filter(t => !t.done);
console.log(result0);

const names = ["akib","rahim","anik"];
const resultStart = names.filter(n => n.startsWith("a"));
console.log(resultStart);

const products = [
 {name:"pen",stock:0},
 {name:"book",stock:10}
];
const result99 = products.filter(p => p.stock > 0);
console.log(result99);



