let addBtn = document.querySelector('.add-btn');
let modal = document.querySelector('.modal-cont')
let addModal = true;
let textArea = document.querySelector('.modal-cont textarea');
let mainCont = document.querySelector('.main-cont');
let allPriorityColor = document.querySelector('.priority-color');

addBtn.addEventListener('click', function() {
    console.log("Btn has been clicked")
    if (addModal) {
        modal.style.display = 'flex'; //show modal
    } 
    else{
        modal.style.display = 'none'; //hide modal
    }
    addModal = !addModal;
});

let toolboxColors = document.querySelectorAll('.toolbox-priority-cont .color');
let modalColors = document.querySelectorAll('.priority-color-cont .priority-color');
let selectedColor = "red"; 

toolboxColors.forEach(color => {
    color.addEventListener('click', function() {
        removeActiveClass(toolboxColors); 
        selectedColor = color.classList[1]; 
        color.classList.add('active');
    });
});

modalColors.forEach(color => {
    color.addEventListener('click', function() {
        removeActiveClass(modalColors); 
        selectedColor = color.classList[1]; 
        color.classList.add('active'); 
    })
});

function removeActiveClass(colors) {
    colors.forEach(color => {
        color.classList.remove('active');
    });
}

textArea.addEventListener('keydown', function(e) {
    let key = e.key;
    if (key === "Enter") {
        console.log("Enter has been pressed");
        if(textArea.value == "") {
            alert("Please enter some task");
            return;
        } 
        generateTicket();
        textArea.value = "";
        modal.style.display = 'none';
        addModal = true;
    }
});

function generateTicket() {
    let ticketCont = document.createElement('div');
    text = textArea.value;
    var uid = new ShortUniqueId();
    ticketCont.classList.add('ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${uid.rnd()}</div>
    <div class="ticket-desc">${text}</div>`;
    mainCont.appendChild(ticketCont);
    console.log("Ticket has been generated");
}