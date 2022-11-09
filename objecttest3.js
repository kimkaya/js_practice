let user = {
    name:'hong',
    age:30,
    sayHi(){
        console.log("Hi~");
    },
    info(){
        console.log(`name:${this.name},age:${this.age}`)
    }
}

let userc = user;
user = null;

userc.info();

// user.sayHi = function() {
//     console.log("Hi~");
// }

function sayHi(){
    console.log("Hi~");
}

user.sayHi = sayHi
console.log(user)

user.info