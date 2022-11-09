let user = {
    name:"hong",
    age: 20,
    "like fruits":true
};

console.log(typeof user);
console.log(user.name);
console.log(user.age);
console.log(user["like fruits"]);
let key = "like fruits";
user[key] = false;

user.name="john";

let prop = "gender";  //동적으로 프로퍼티 이름 정의
let member =  {
    [prop] :"male"

};
console.log(member);

let account = {}
account.id = '10001';
account.name = 'hong';

console.log(account);

for(let key in user) {
    console.log(`key:${key}, value:${user[key]}`);
}
console.log(sum);

for (let n of arr) {
    console.log(n);
    sum += n;    
}
console.log(sum);

let student = {
    no:1001,
    name:'hang',
    grade:2,
    score:89
};

console.log(typeof student);
console.log(student);
let student_str = JSON.stringify(student)
console.log(typeof student_str);
console.log(student_str);


let student_obj = JSON.parse(student_str)
console.log(typeof student_obj);
console.log(student_obj);
console.log(student_obj.no);


