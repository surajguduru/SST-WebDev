var parent = document.querySelector(".big-box");
var children = document.querySelectorAll(".small-box");
children.forEach(function(child) {
    child.addEventListener('mouseenter',function() {
        this.style.backgroundColor = 'grey'; 
    });
    child.addEventListener('mouseleave',function() {
        this.style.backgroundColor = ''; 
    });
});

parent.addEventListener('mouseenter',function() {
    this.style.backgroundColor = 'skyblue'; 
});
parent.addEventListener('mouseleave',function() {
    this.style.backgroundColor = ''; 
});