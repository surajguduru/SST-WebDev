// Get all the star elements
console.log()
const stars = document.querySelectorAll('.star');

// Get the rating display element
const ratingDisplay = document.querySelector('h4');

let currentRating = 0;

// Function to handle star hover
function handleStarHover(event) {
    const hoveredStarIndex = parseInt(event.target.classList[1]);
    
    for (let i = 0; i < stars.length; i++) {
        if (i < hoveredStarIndex) {
            stars[i].style.color = 'yellow';
        } else {
            stars[i].style.color = 'black';
        }
    }

    // Set cursor to pointer on hover
    event.target.style.cursor = 'pointer';
}

// Function to handle when a star is clicked
function handleStarClick(event) {
    currentRating = parseInt(event.target.classList[1]);
    ratingDisplay.textContent = `Rating: ${currentRating}`;
}

// Function to handle when the mouse leaves the star container
function handleStarLeave() {
    for (let i = 0; i < stars.length; i++) {
        if (i < currentRating) {
            stars[i].style.color = 'yellow';
        } else {
            stars[i].style.color = 'black';
        }
    }
}

// Event listeners for mouse hover, click, and leave on stars
stars.forEach(star => {
    star.addEventListener('mouseenter', handleStarHover);
    star.addEventListener('click', handleStarClick);
});

// Add event listener to the star container for mouse leave
document.querySelector('body').addEventListener('mouseleave', handleStarLeave);
