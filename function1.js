function func1 (x,y) {
    return x+y;
}

let func2 = function(x,y) {
    return x+y;
}

let func3 = (x,y) => x+y;

let func4 = (x,y) => {return x+y;}

let func5 = (x,y) => {
    let sum = x+y;
    return sum;
}

let sum = func3(10,20);
console.log(sum);

function func6(f){
    f();
}

func6(function(){
    console.log("Hi!")
});

func6(()=>{
    console.log("Hellow")
})

let func7 = name => {console.log(name);}
func7("James");