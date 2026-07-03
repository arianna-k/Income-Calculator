// Hide preloader when page loads
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

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
    const year1 = document.getElementById("year1Column");
    const year2 = document.getElementById("year2Column");

    if (years === "0") {

        message.style.display = "block";

        year1.style.display = "none";
        year2.style.display = "none";

    }
    else if (years === "1") {

        message.style.display = "none";

        year1.style.display = "block";
        year2.style.display = "none";

    }
    else {

        message.style.display = "none";

        year1.style.display = "block";
        year2.style.display = "block";

    }

}

document.addEventListener("DOMContentLoaded", function () {
    toggleYears();
});