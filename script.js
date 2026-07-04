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

function toggleYears(select) {

    // Find the calculator card this dropdown belongs to
    const calculator = select.closest(".calculator-card");

    const message = calculator.querySelector(".select-message");
    const year1 = calculator.querySelector(".year1Column");
    const year2 = calculator.querySelector(".year2Column");

    if (select.value === "0") {

        message.style.display = "block";
        year1.style.display = "none";
        year2.style.display = "none";

    }
    else if (select.value === "1") {

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

    document.querySelectorAll(".years-select").forEach(select => {
        toggleYears(select);
    });

});