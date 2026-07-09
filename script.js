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

function calculateScheduleC() {
    let year1netprofit = Number(document.getElementById("netProfit1").value);
    let year2netprofit = Number(document.getElementById("netProfit2").value);
    let year1nonRecurring = Number(document.getElementById("nonRecurring1").value);
    let year2nonRecurring = Number(document.getElementById("nonRecurring2").value);
    let year1depletion = Number(document.getElementById("depletion1").value);
    let year2depletion = Number(document.getElementById("depletion2").value);
    let year1meals = Number(document.getElementById("meals1").value);
    let year2meals = Number(document.getElementById("meals2").value);
    let year1businessHome = Number(document.getElementById("businessHome1").value);
    let year2businessHome = Number(document.getElementById("businessHome2").value);
    let year1vehicleMiles = Number(document.getElementById("vehicleMiles1").value);
    let year2vehicleMiles = Number(document.getElementById("vehicleMiles2").value);

    year1Miles = year1vehicleMiles * 0.26;
    year2Miles = year2vehicleMiles * 0.26;

    let year1total = (year1netprofit - year1nonRecurring + year1depletion - year1meals + year1businessHome + year1Miles)/12;
    let year2total = (year2netprofit - year2nonRecurring + year2depletion - year2meals + year2businessHome + year2Miles)/12;
    let annualAverage = (year1total + year2total) / 2;

    document.getElementById("ScheduleCmonthlyIncome1").value = year1total.toFixed(2);
    document.getElementById("ScheduleCmonthlyIncome2").value = year2total.toFixed(2);
    document.getElementById("ScheduleCannualAverage").value = annualAverage.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".years-select").forEach(select => {
        toggleYears(select);
    });

});