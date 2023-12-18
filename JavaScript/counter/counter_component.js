const countElement = document.getElementById('count');
const incrementBtn = document.querySelector('.increment-btn')
const decrementBtn = document.querySelector('.decrement-btn')
const resetBtn = document.querySelector('.reset-btn')
const step = document.getElementById('step')

let count = 0;

incrementBtn.addEventListener('click',function(){
    const stepValue = parseInt(step.value); 
    count += stepValue;
    if(count < 0)count = 0;
    countElement.innerText = count;
});

decrementBtn.addEventListener('click',function(){
    const stepValue = parseInt(step.value); 
    count -= stepValue;
    if(count < 0)count = 0;
    countElement.textContent = count;
});

resetBtn.addEventListener('click',function(){
    count = 0;
    countElement.textContent = 0;
});