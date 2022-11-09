let user = {
    name:'hong',
    age:30
    // sayHi(){
    //     console.log("Hi~");
    // }
}

// user.sayHi = function() {
//     console.log("Hi~");
// }

function sayHi(){
    console.log("Hi~");
}

user.sayHi = sayHi
console.log(user)
