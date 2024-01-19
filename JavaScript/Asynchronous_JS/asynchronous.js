// function fxn(){
//     let d = 50;
//     console.log(d);
// }

// fxn();
// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);

// //What is SetTimeout?
// //SetTimeout is a method which is used to delay the execution of the function
// //SetTimeout takes two arguments
// //1. Function
// //2. Time in milliseconds
// //SetTimeout is an asynchronous method
// //SetTimeout is a method of window object
// //SetTimeout is a callback function
// //SetTimeout is a higher order function
// //SetTimeout is a non-blocking method

// console.log("Before setTimeout");

// setTimeout(function cb1() {
//     console.log("Inside setTimeout");
// }, 2);
// setTimeout(function cb2() {
//     console.log("Inside setTimeout2");
// }, 0);
// console.log("After setTimeout");

// //Print Hello World which is delayed by infinite time without blocking the main thread
// function printHelloWorld(){
//     console.log("Hello World");
//     printHelloWorld();
// }
console.log("First");
let fs = require("fs");
fs.readFile("asynchronous.js", function (error, data) {
    if(error){
        console.log(error);
    }
    else{
        console.log(data + "");
        console.log("");
    }
});

fs.readFile("asynchronous.css", function (error, data) {
    if(error){
        console.log(error);
    }
    else{
        console.log(data + "");
        console.log("");
    }
});

fs.readFile("asynchronous.html", function (error, data) {
    if(error){
        console.log(error);
    }
    else{
        console.log(data + "");
        console.log("");
    }
});

// Explain how the above code works?
// 1. The above code is asynchronous
// 2. The above code is non-blocking
// 3. The above code is a callback function

// Explain the order of execution of the above code?
// 1. First, the readFile method of fs module is called
// 2. Then, the readFile method of fs module is called
// 3. Then, the readFile method of fs module is called
// 4. Then, the console.log("First") is executed
// 5. Then, the callback function of first readFile method is executed
// 6. Then, the callback function of second readFile method is executed
// 7. Then, the callback function of third readFile method is executed
// 8. Then, the console.log(data + "") is executed
// 9. Then, the console.log(data + "") is executed
// 10. Then, the console.log(data + "") is executed