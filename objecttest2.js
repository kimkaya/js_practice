let obj = {
    age:10,
    name:'hong',
    married:false,
    score:[90,80,70],
    parent:{mother:'park',father:'song'},
    info :function() {
        console.log('...');
    }
}

let u1 = {name:"John"};
let u2 = u1; //shallow copy 얕은 복사


let u3 = {}
for (let key in u1) { // deep copy(깊은 복사)
    u3[key] = u1 [key];
}

let u4 = {};
Object.assign(u4,u1); //deep copy

u1.name = 'hong';
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);

let mobj = {};
Object.assign(mobj)