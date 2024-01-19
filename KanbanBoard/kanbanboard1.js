let addBtn = document.querySelector('.add-btn');
let modal = document.querySelector('.modal-cont')
let addModal = true;
let textArea = document.querySelector('.modal-cont textarea');
let mainCont = document.querySelector('.main-cont');
let allPriorityColor = document.querySelector('.priority-color');
let lock = document.querySelector('.lock');
let colorArr = ['red', 'blue', 'green', 'pink'];
let filterColor = document.querySelectorAll('.color');

for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener('click', function () {
        let color = filterColor[i].classList[1];
        filterTickets(color);
    });
};
for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener('dblclick', function () {
        let tickets = document.querySelectorAll('.ticket-cont');
        for (let i = 0; i < tickets.length; i++) {
            tickets[i].style.display = 'block';
        }
    });
}
function filterTickets(color) {
    let tickets = document.querySelectorAll('.ticket-cont');
    for (let i = 0; i < tickets.length; i++) {
        let ticketColor = tickets[i].querySelector('.ticket-color');
        if (ticketColor.classList.contains(color)) {
            tickets[i].style.display = 'block';
        }
        else {
            tickets[i].style.display = 'none';
        }
    }
}

addBtn.addEventListener('click', function () {
    console.log("Add-Btn has been clicked")
    if (addModal) {
        modal.style.display = 'flex'; //show modal
    }
    else {
        modal.style.display = 'none'; //hide modal
    }
    addModal = !addModal;
});

let toolboxColors = document.querySelectorAll('.toolbox-priority-cont .color');
let modalColors = document.querySelectorAll('.priority-color-cont .priority-color');

modalColors.forEach(color => {
    color.addEventListener('click', function () {
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

let selectedColor = "red";

toolboxColors.forEach(color => {
    color.addEventListener('click', function () {
        removeActiveClass(toolboxColors);
        selectedColor = color.classList[1];
        color.classList.add('active');
    });
});
var uid = new ShortUniqueId();
textArea.addEventListener('keydown', function (e) {
    let key = e.key;
    if (key === "Enter") {
        console.log("Enter has been pressed");
        if (textArea.value == "") {
            alert("Please enter some task");
            return;
        }
        generateTicket(textArea.value, selectedColor,uid.rnd());
        textArea.value = "";
        modal.style.display = 'none';
        addModal = true;
    }
});


function generateTicket(text, selectedColor,ticketId) {
    let ticketCont = document.createElement('div');
    
    ticketCont.classList.add('ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${ticketId}</div>
    <div class="ticket-area">${text}</div>
    <div class="lock"><i class="fa-solid fa-lock"></i></div>`;
    mainCont.appendChild(ticketCont);
    console.log("Ticket has been generated");

    //Handle Priority Color
    let ticketColor = ticketCont.querySelector('.ticket-color');
    ticketColor.addEventListener('click', function () {
        let currColor = ticketColor.classList[1];
        let index = colorArr.indexOf(currColor);
        let nextIndex = (index + 1) % 4;
        let nextColor = colorArr[nextIndex];
        ticketColor.classList.remove(currColor);
        ticketColor.classList.add(nextColor);
    });

    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push({
        ticketId: uid.rnd(),
        ticketColor: selectedColor,
        ticketText: text
    });
    localStorage.setItem('tickets', JSON.stringify(tickets));

    //Handle Lock Button
    let lock = ticketCont.querySelector('.lock');
    let taskArea = ticketCont.querySelector('.ticket-area');
    lock.addEventListener('click', function () {
        let lockIcon = lock.querySelector('i.fa-solid');
        if (lockIcon.classList.contains('fa-lock-open')) {
            lockIcon.classList.remove('fa-lock-open');
            lockIcon.classList.add('fa-lock');
            taskArea.setAttribute('contenteditable', 'false');
        }
        else {
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open');
            taskArea.setAttribute('contenteditable', 'true');
        }
        console.log("Lock-Button has been toggled");
    });
    
}
window.onload = function() {
    // Get the existing tickets from local storage
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

    // Loop through the tickets
    for (let ticket of tickets) {
        // Check if a ticket with the same ID already exists in the DOM
        if (!document.getElementById('ticket-' + ticket.id)) {
            // If not, generate the ticket
            generateTicket(ticket.text, ticket.color, ticket.id);
        }
    }
};

