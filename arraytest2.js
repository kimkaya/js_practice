let arr1 = [3,5,7,1,2];
arr1.reverse();
console.log(arr1)

let hobby = "movie, book, health, wrok";
let hobbys = hobby.split(',');
console.log(hobbys);

let animal = ["monkey","snake","dog","cat"];
let animalstr = animal.join(";");
console.log(animalstr)

let tot = arr1.reduce((sum,current) => sum+current, 0);
console.log(tot);

let stud = [
    {no:3, score:80},
    {no:2, score:75},
    {no:1, score:90},
];

let avgscore = stud.reduce((sum,current)=>sum+current.score, 0)/stud.length
console.log(avgscore);

console.log(arr1.includes(3));

let arr = [];
let obj = {};
console.log(typeof arr);
console.log(typeof obj);
console.log(Array.isArray(arr))
console.log(Array.isArray(obj))