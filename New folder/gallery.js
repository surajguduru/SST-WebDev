let sidebar = document.getElementById('sidebar');
let mainbar = document.getElementById('main-content');
let collapseBtn = document.getElementById('toggle-button');

collapseBtn.addEventListener('click', function() {
    if(sidebar.style.width == '250px') {
        sidebar.style.width = '80px';
    }
    else {
        sidebar.style.width = '250px';
    }
    // sidebar.style.width = '100px';
});