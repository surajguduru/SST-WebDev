//Event Propogation : How the event is propogated from one element to another element
// 1. Event Capturing : Event Capturing is the process of event propogation from top to bottom
// 2. Event Bubbling : Event Bubbling is the process of event propogation from bottom to top

// Memory Allocation in JS
// 1. Stack Memory : All the primitive data types are stored in stack memory
// 2. Heap Memory : All the reference data types are stored in heap memory
// 3. Code Memory : All the functions are stored in code memory
// 4. Static Memory : All the static variables are stored in static memory

// let grandParent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// grandParent.addEventListener("click", function(event) {
//     console.log("Grand Parent clicked");
// });

// parent.addEventListener("click", function(event) {
//     console.log("Parent clicked");
// });

// child.addEventListener("click", function(event) {
//     console.log("Child clicked");
//     event.stopPropagation();
// });

var obj1 = {
    Name : "Rahul",
    Age : 25,
    Address : {
        City : "Bangalore",
        State : "Karnataka"
    }
}
var obj2 = {...obj1};//{...obj1} is called as spread operator
obj2.Name = "Raj";
obj2.Address.City = "Mysore";
console.log(obj1);
console.log(obj2);

var obj3 = JSON.parse(JSON.stringify(obj1));
obj3.Name = "Raj";
obj3.Address.City = "Penukonda";
console.log(obj1);
console.log(obj3);



