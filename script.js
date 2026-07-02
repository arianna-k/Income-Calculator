// Hide preloader when page loads and correctly display the content
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    toggleYears();
});

// Function to open a specific tab
function openTab(event, tabId) {

    // Hide all content
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => {
        content.classList.remove("active-content");
    });

    // Remove active button
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Show selected content
    document.getElementById(tabId)
        .classList.add("active-content");

    // Highlight selected button
    event.currentTarget.classList.add("active");
}

function toggleYears() {

    const years = document.getElementById("years").value;

    const message = document.getElementById("selectMessage");
    const columns = document.getElementById("calculatorColumns");
    const year2 = document.getElementById("year2Column");

    if (years === "0") {

        // Show message
        message.style.display = "block";

        // Hide calculator
        columns.style.display = "none";

    }
    else if (years === "1") {

        // Hide message
        message.style.display = "none";

        // Show calculator
        columns.style.display = "grid";

        // Hide 2-year column
        year2.style.display = "none";

        // One column layout
        columns.style.gridTemplateColumns = "1fr";

    }
    else if (years === "2") {

        // Hide message
        message.style.display = "none";

        // Show calculator
        columns.style.display = "grid";

        // Show both columns
        year2.style.display = "block";

        // Two column layout
        columns.style.gridTemplateColumns = "1fr 1fr";

    }

}