let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let addModal = true;

addBtn.addEventListener("click", function()  {
    console.log("clicked add-btn");
    if(addModal) {
        modal.style.display = "flex";
    }   
    else {
        modal.style.display = "none";
    }
    addModal = !addModal;
});
addBtn.addEventListener("mouseover", function() {
    addBtn.style.cursor = "pointer";
});
