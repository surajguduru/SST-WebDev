// // Promises - A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// // Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out observables.
// // Promises can only give you a single response. If you need multiple values over time, check out observables.
// // Promises can be chained.
// // Promises can be consumed by third-party libraries.
// // Promises can be returned from a function.
// // Promises are not cancellable.
// // Promises are resolved asynchronously: even if a promise is already resolved, code passed to then() will run later.
// // Promises can be resolved only once.

// // Promise States
// // A promise can be in one of three states:
// // Pending: The initial state— the operation has not completed yet.
// // Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
// // Rejected: The operation failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

// let myPromise = new Promise(function (resolve, reject) {
//     let a = 5;
//     let b = 5;
//     if (a == b) {
//         resolve("Both the numbers are equal !");
//     }
//     else {
//         reject("The numbers are not equal !");
//     }
// })

// console.log(myPromise);
// //then() - The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
// myPromise.then(function (data) {
//     console.log("Promise kept !");
// })
// //catch() - The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)).
// myPromise.catch(function (error) {
//     console.log("Promise broken !");
// })
// //finally() - The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.
// myPromise.finally(function () {
//     console.log("Promise settled !");
// });
// // Promise.all() - The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
// console.log("-----------------");
// let fs = require('fs');
// let htmlpromise = fs.promises.readFile("./promisesbh.html");
// // let csspromise = fs.promises.readFile("./promises.css", "utf-8");

// console.log(htmlpromise);

// htmlpromise.then(function (html) {
//     console.log(html + "");
// });
// htmlpromise.catch(function (error) {
//     console.log(error);
// });
// console.log("-----------------");

// // Do promises always execute at the end ?
// // No, promises don't always execute at the end. They are asynchronous in nature. They are non-blocking. They are resolved/rejected as soon as they are encountered.

function logA() {
    console.log("A");   
}
function logB() {
    console.log("B");
}
function logC() {
    console.log("C");
}
function logD() {
    console.log("D");
}
function logE() {
    console.log("E");
}

logA();

setInterval(logC, 0);
setTimeout(logB, 0);
Promise.resolve().then(logC);
Promise.resolve().then(logD);
logE();
