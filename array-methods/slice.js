const numbers = [2,3,4,5,6];
const copy = numbers.slice();
console.log(copy);

const products = ["phone", "laptop", "mouse", "keyboard", "tablet"];
const featured = products.slice(0, 3);
console.log(featured);

const posts = ["post1","post2","post3","post4","post5"];
const latest = posts.slice(-3);
console.log(latest);

const products1 = [1,2,3,4,5,6,7,8,9,10];
const page1 = products1.slice(0, 4);
const page2 = products1.slice(4, 6);
console.log(page1);
console.log(page2);

const numbers1 = [10,20,30,40,50];
const withoutFirst2 = numbers1.slice(2);
console.log(withoutFirst2);

const comments = ["c1","c2","c3","c4","c5","c6"];
const showComments = comments.slice(0,4);
console.log(showComments);