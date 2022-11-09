let b1 = true || true;
let b2 = true || false;
let b3 = false || true;
let b4 = false || false;

let a = 10;
let b = 20;

let v5 = (a<10 || ++b<20);

console.log(b);

console.log(Boolean(0));

//  ||, && 에서 false : 0, "", null, undefined
let val1 = undefined;
let val2 = null;
let val3 = "";
let val4 = "abc";


let res = val1 || val2 || val3 || val4;
console.log(res);

console.log(1 && 0 && 3);
console.log(1 && 5);