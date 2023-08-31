document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code here


const urlParams = new URLSearchParams(window.location.search);
const down = urlParams.get('down');
console.log(down)

// Get references to the input field and the "Next" button
const distanceInput = document.getElementById('distanceInput');
const nextButton = document.getElementById('nextButton');

// Add an event listener to the input field
distanceInput.addEventListener('input', function() {
    // Check if the input value is a valid number
    if (isValidNumber(distanceInput.value)) {
        // Enable the "Next" button
        nextButton.removeAttribute('disabled');
    } else {
        // Disable the "Next" button if the input is not a valid number
        nextButton.setAttribute('disabled', 'true');
    }
});

// Function to check if a given value is a valid number
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}
});