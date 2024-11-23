// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('alertButton');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        alert('Hello! You clicked the button.');
    });
});
