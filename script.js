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

    console.log("Year 1 Total: " + year1total);
    console.log("Year 2 Total: " + year2total);
    console.log("Annual Average: " + annualAverage);

    document.getElementById("ScheduleCmonthlyIncome1").textContent = "$" + year1total.toFixed(2);
    document.getElementById("ScheduleCmonthlyIncome2").textContent = "$" + year2total.toFixed(2);
    document.getElementById("ScheduleCaverage24Months").textContent = "$" + annualAverage.toFixed(2);
}

function calculatePartnership() {
    let liquidityValue = document.getElementById("partnershipLiquiditySelect").value;
    let year1W2Income = Number(document.getElementById("W2Income1").value); 
    let year2W2Income = Number(document.getElementById("W2Income2").value);
    let year1Ownership = Number(document.getElementById("Ownership1").value); 
    let year1OwnershipPercentage = year1Ownership / 100;
    let year2Ownership = Number(document.getElementById("Ownership2").value);
    let year2OwnershipPercentage = year2Ownership / 100;
    let year1K1Income = Number(document.getElementById("K1Income1").value);
    let year2K1Income = Number(document.getElementById("K1Income2").value);
    let year1Distributions = Number(document.getElementById("Distributions1").value);
    let year2Distributions = Number(document.getElementById("Distributions2").value);
    let year1GuaranteedPayments = Number(document.getElementById("Guarantee1").value);
    let year2GuaranteedPayments = Number(document.getElementById("Guarantee2").value);
    let year1OtherIncome = Number(document.getElementById("OtherIncome1").value);
    let year2OtherIncome = Number(document.getElementById("OtherIncome2").value);
    let year1Nonrecurring = Number(document.getElementById("Nonrecurring1").value);
    let year2Nonrecurring = Number(document.getElementById("Nonrecurring2").value);
    let year1Depreciation = Number(document.getElementById("Depreciation1").value);
    let year2Depreciation = Number(document.getElementById("Depreciation2").value);
    let year1Depletion = Number(document.getElementById("Depletion1").value); 
    let year2Depletion = Number(document.getElementById("Depletion2").value);
    let year1Mortgages = Number(document.getElementById("Mortgages1").value);
    let year2Mortgages = Number(document.getElementById("Mortgages2").value);
    let year1Travel = Number(document.getElementById("Travel1").value);
    let year2Travel = Number(document.getElementById("Travel2").value);
    let year1Amortization = Number(document.getElementById("Amortization1").value);
    let year2Amortization = Number(document.getElementById("Amortization2").value);

    let monthlyIncome1 = (year1Amortization - year1Nonrecurring + year1Depreciation + year1Depletion - year1Mortgages - year1Travel - year1OtherIncome) * year1OwnershipPercentage;
    if (liquidityValue === "No" && year1K1Income >= year1Distributions) {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1Distributions + year1GuaranteedPayments)) / 12;
    } else if (liquidityValue === "No" && year1K1Income < year1Distributions) {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1K1Income + year1GuaranteedPayments)) / 12;
    } else if (liquidityValue === "Yes") {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1K1Income + year1GuaranteedPayments)) / 12;
    }
    let monthlyIncome2 = (year2Amortization - year2Nonrecurring + year2Depreciation + year2Depletion - year2Mortgages - year2Travel - year2OtherIncome) * year2OwnershipPercentage;
    if (liquidityValue === "No" && year2K1Income >= year2Distributions) {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2Distributions + year2GuaranteedPayments)) / 12;
    } else if (liquidityValue === "No" && year2K1Income < year2Distributions) {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2K1Income + year2GuaranteedPayments)) / 12;
    } else if (liquidityValue === "Yes") {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2K1Income + year2GuaranteedPayments)) / 12;
    }

    let averageMonthlyIncome = (monthlyIncome1 + monthlyIncome2) / 2;

    document.getElementById("PartnershipmonthlyIncome1").textContent = "$" + monthlyIncome1.toFixed(2);
    document.getElementById("PartnershipmonthlyIncome2").textContent = "$" + monthlyIncome2.toFixed(2);
    document.getElementById("Partnershipaverage24Months").textContent = "$" + averageMonthlyIncome.toFixed(2);
}

function calculateSCorp() {
    let liquidityValue = document.getElementById("scorpLiquiditySelect").value;
    let year1W2Income = Number(document.getElementById("SCorpW2Income1").value); 
    let year2W2Income = Number(document.getElementById("SCorpW2Income2").value);
    let year1Ownership = Number(document.getElementById("SCorpOwnership1").value); 
    let year1OwnershipPercentage = year1Ownership / 100;
    let year2Ownership = Number(document.getElementById("SCorpOwnership2").value);
    let year2OwnershipPercentage = year2Ownership / 100;
    let year1K1Income = Number(document.getElementById("SCorpK1Income1").value); 
    let year2K1Income = Number(document.getElementById("SCorpK1Income2").value);
    let year1Distributions = Number(document.getElementById("SCorpDistributions1").value); 
    let year2Distributions = Number(document.getElementById("SCorpDistributions2").value);
    let year1Nonrecurring = Number(document.getElementById("SCorpNonrecurring1").value); 
    let year2Nonrecurring = Number(document.getElementById("SCorpNonrecurring2").value);
    let year1Depreciation = Number(document.getElementById("SCorpDepreciation1").value); 
    let year2Depreciation = Number(document.getElementById("SCorpDepreciation2").value);
    let year1Depletion = Number(document.getElementById("SCorpDepletion1").value); 
    let year2Depletion = Number(document.getElementById("SCorpDepletion2").value);
    let year1Mortgages = Number(document.getElementById("SCorpMortgages1").value); 
    let year2Mortgages = Number(document.getElementById("SCorpMortgages2").value);
    let year1Travel = Number(document.getElementById("SCorpTravel1").value); 
    let year2Travel = Number(document.getElementById("SCorpTravel2").value);
    let year1Amortization = Number(document.getElementById("SCorpAmortization1").value); 
    let year2Amortization = Number(document.getElementById("SCorpAmortization2").value);

    let monthlyIncome1 = (year1Amortization - year1Nonrecurring + year1Depreciation + year1Depletion - year1Mortgages - year1Travel) * year1OwnershipPercentage;
    if (liquidityValue === "No" && year1K1Income >= year1Distributions) {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1Distributions)) / 12;
    } else if (liquidityValue === "No" && year1K1Income < year1Distributions) {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1K1Income)) / 12;
    } else if (liquidityValue === "Yes") {
        monthlyIncome1 = (monthlyIncome1 + (year1W2Income + year1K1Income)) / 12;
    }
    let monthlyIncome2 = (year2Amortization - year2Nonrecurring + year2Depreciation + year2Depletion - year2Mortgages - year2Travel) * year2OwnershipPercentage;
    if (liquidityValue === "No" && year2K1Income >= year2Distributions) {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2Distributions)) / 12;
    } else if (liquidityValue === "No" && year2K1Income < year2Distributions) {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2K1Income)) / 12;
    } else if (liquidityValue === "Yes") {
        monthlyIncome2 = (monthlyIncome2 + (year2W2Income + year2K1Income)) / 12;
    }

    let averageMonthlyIncome = (monthlyIncome1 + monthlyIncome2) / 2;

    document.getElementById("SCorpmonthlyIncome1").textContent = "$" + monthlyIncome1.toFixed(2);
    document.getElementById("SCorpmonthlyIncome2").textContent = "$" + monthlyIncome2.toFixed(2);
    document.getElementById("SCorpaverage24Months").textContent = "$" + averageMonthlyIncome.toFixed(2);
}

function calculateCorp() {
    let year1W2Income = Number(document.getElementById("CorpW2Income1").value); //1
    let year2W2Income = Number(document.getElementById("CorpW2Income2").value);
    let year1Ownership = Number(document.getElementById("CorpOwnership1").value); //2
    let year1OwnershipPercentage = year1Ownership / 100;
    let year2Ownership = Number(document.getElementById("CorpOwnership2").value);
    let year2OwnershipPercentage = year2Ownership / 100;
    let year1Nonrecurring = Number(document.getElementById("CorpNonrecurring1").value); //3
    let year2Nonrecurring = Number(document.getElementById("CorpNonrecurring2").value);
    let year1NonrecurringOther = Number(document.getElementById("CorpNonrecurringOther1").value); //4
    let year2NonrecurringOther = Number(document.getElementById("CorpNonrecurringOther2").value);
    let year1Depreciation = Number(document.getElementById("CorpDepreciation1").value); //5
    let year2Depreciation = Number(document.getElementById("CorpDepreciation2").value);
    let year1Depletion = Number(document.getElementById("CorpDepletion1").value); //6
    let year2Depletion = Number(document.getElementById("CorpDepletion2").value);
    let year1NetOperatingLoss = Number(document.getElementById("CorpNOL1").value); //7
    let year2NetOperatingLoss = Number(document.getElementById("CorpNOL2").value);
    let year1Taxable = Number(document.getElementById("CorpTaxable1").value); //8
    let year2Taxable = Number(document.getElementById("CorpTaxable2").value);
    let year1Taxes = Number(document.getElementById("CorpTax1").value); //9
    let year2Taxes = Number(document.getElementById("CorpTax2").value);
    let year1Mortgages = Number(document.getElementById("CorpMortgages1").value); //10
    let year2Mortgages = Number(document.getElementById("CorpMortgages2").value);
    let year1Travel = Number(document.getElementById("CorpTravel1").value); //11
    let year2Travel = Number(document.getElementById("CorpTravel2").value);
    let year1Amortization = Number(document.getElementById("CorpAmortization1").value); //12
    let year2Amortization = Number(document.getElementById("CorpAmortization2").value);

    let monthlyIncome1 = ((((year1Depreciation - year1Nonrecurring - year1NonrecurringOther + year1Depletion + year1NetOperatingLoss + year1Taxable - year1Taxes - year1Mortgages - year1Travel - year1Amortization) * year1OwnershipPercentage) + year1W2Income) / 12);
    let monthlyIncome2 = ((((year2Depreciation - year2Nonrecurring - year2NonrecurringOther + year2Depletion + year2NetOperatingLoss + year2Taxable - year2Taxes - year2Mortgages - year2Travel - year2Amortization) * year2OwnershipPercentage) + year2W2Income) / 12);

    let averageMonthlyIncome = (monthlyIncome1 + monthlyIncome2) / 2;

    document.getElementById("CorpmonthlyIncome1").textContent = "$" + monthlyIncome1.toFixed(2);
    document.getElementById("CorpmonthlyIncome2").textContent = "$" + monthlyIncome2.toFixed(2);
    document.getElementById("Corpaverage24Months").textContent = "$" + averageMonthlyIncome.toFixed(2);
}

function calculateRental() {
    let escrowedValue = document.getElementById("rentalEscrowedSelect").value;
    let mortgage = Number(document.getElementById("TotalMortgage").value);
    let rents = Number(document.getElementById("TotalRents").value);
    let insurance = Number(document.getElementById("Insurance").value);
    let interest = Number(document.getElementById("Interest").value);
    let taxes = Number(document.getElementById("Taxes").value);
    let depreciation = Number(document.getElementById("Depreciation").value);
    let HOA = Number(document.getElementById("HOA").value);
    let onetimeexpense = Number(document.getElementById("Extraordinary").value);
    let expenses = Number(document.getElementById("Expenses").value);
    
    let monthlyIncome = ((rents + insurance + interest + taxes + depreciation + HOA + onetimeexpense - expenses) / 12);
    if (escrowedValue === "Yes") {
        monthlyIncome = monthlyIncome - mortgage;
    } else {
        monthlyIncome = monthlyIncome - (mortgage + (insurance/12) + (taxes/12));
    }
    document.getElementById("RentalmonthlyIncome").textContent = "$" + monthlyIncome.toFixed(2);
}

function calculateSSI() {
    let ssiType = document.getElementById("ssiTypeSelect").value;
    let grossPay = Number(document.getElementById("GrossPay").value);
    let ssi6b = Number(document.getElementById("6B").value);

    let FHA = 0;
    let VA = 0;
    if (ssiType === "Form1099") {
        FHA = (((grossPay - ssi6b) * 0.15) / 12 )+ (grossPay / 12);
        VA = ((grossPay - ssi6b) * 0.25) / 12 + (grossPay / 12);
    } else {
        FHA = ((grossPay * 12) - ssi6b) * (0.15 / 12) + grossPay;
        VA = (((grossPay * 12) - ssi6b) * 0.25) / 12 + grossPay;
    }

    document.getElementById("FHAmonthlyIncome").textContent = "$" + FHA.toFixed(2);
    document.getElementById("VAmonthlyIncome").textContent = "$" + VA.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".years-select").forEach(select => {
        toggleYears(select);
    });

});