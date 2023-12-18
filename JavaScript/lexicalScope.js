// function fxn(){
//     let a = 10;
//     function gxn(){
//         console.log(a);
//     }
//     return gxn;
// }
// let innerFxn = fxn();
// innerFxn();

// let a = 10;
// console.log("line 2",a);
// function fn(){
//     console.log(a);
//     let a = 20;
// }
// fn();
// console.log(a);

var a = 10;
{
    var a = 20;
    console.log(a);
}
console.log(a);