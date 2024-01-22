const a = 20;
// a =  a + 30; // This will throw an error

const arr = [1, 2, 3];
arr.push(4); // This will work fine
arr.pop(); // This will work fine

//Reason : const is a constant reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in case the content is an object, this means the object itself can still be altered.

function fxn(num,obj){
    num = 20;
    console.log("Inside fxn ->",num);
    obj = {name : "Ramesh", age : "20"};
    console.log("Inside fxn ->",obj);
}

let b = 10;
let c = {name : "Rahul"};

fxn(b,c);
console.log("Outside fxn ->",b);
console.log("Outside fxn ->",c);
