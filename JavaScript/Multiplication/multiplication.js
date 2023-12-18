const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const generate = document.querySelector(".generate");
const product = document.getElementById("answer");
generate.addEventListener('click',function(){
    var n1 = parseInt(num1.value);
    var n2 = parseInt(num2.value);
    var result = n1 * n2;
    product.innerText = 'Product :' + result; 
});



