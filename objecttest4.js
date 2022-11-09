function User(name) {
    this.name = name;
    this.isAdmin = false;

    this.info = function() {
        console.log(`name:${this.name},isAdmin:${this.isAdmin}`)
    }
}

let user1 = new User("Hong");
console.log(user1.name);
console.log(user1.isAdmin);
user1.info();

let user2 = new User("Song");
console.log(user2.name);
console.log(user2.isAdmin);
user2.info();

let s = '10';
console.log(typeof +s)

let value1 = '10';
let value2 = '20';
let res1 = Number(value1) + Number(value2);
let res2 = +value1 + +value2;
console.log(res1);
console.log(res2);