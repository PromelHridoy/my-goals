const nums = [4, 5, 6, 3];
const result = nums.map(n => n * 2);
console.log(result);

const names = ["rahim","karim"];
console.log(names.map(n => n.toUpperCase()));

const words = ["html","css","javascript"];
console.log(words.map(w => w.length));

const users = [
 {id:1,name:"Rahim"},
 {id:2,name:"Karim"},
 {id:3,name:"sarim"},
 {id:4,name:"tarim"},
 {id:5,name:"barim"}
];
console.log(users.map(u => u.name.toUpperCase()));
console.log(users.map(u => ({
    id:u.id,
    name:u.name.toUpperCase()
})));

const users6 = [
 {first:"Rahim",last:"Khan"},
 {first:"Karim",last:"Ali"}
];
console.log(users6.map(u => u.first + " " + u.last));

const nums22 = [0,1,2];
console.log(nums22.map(n => Boolean(n)));

const items = ["html","css","js"];
const result99 = items.map(item => `<li>${item}</li>`);
console.log(result99);

const nums09 = [1,2,3];
const result09 = nums09.map(n => n.toString());
console.log(result09);

const prices = [100,200,300];
console.log(prices.map(p => p * 0.8));

const usersA = [
 {name:"A",active:true},
 {name:"B",active:false}
];
console.log(usersA.map(u => u.active));

const numsI = [10,20,30];
console.log(numsI.map((n, i) => n + i));

const words7 = ["hello","world"];
console.log(words7.map(w => w[0].toUpperCase() + w.slice(1)));

const usersM = [
 {name:"A",age:20},
 {name:"B",age:25}
];
const resultM = usersM.map(u => ({
   ...u,
   age: u.age + 1
}));
console.log(resultM);

const namesID = ["a","b","c"];
const resultID = namesID.map((n,i) => ({
 id:i+1,
 name:n
}));
console.log(resultID);

const numsA = [10,20];
const resultA = numsA.map(n => ({
 value:n
}));
console.log(resultA);
