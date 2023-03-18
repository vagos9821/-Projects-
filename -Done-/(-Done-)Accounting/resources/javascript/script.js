// -----INCOME--------------------------------

// ---DAILY INCOME
function dIncome() {
    const dIncome = document.getElementById("d-income").value;
    console.log(dIncome);

    const wIncome = document.getElementById("d-income").value * 7;
    console.log(wIncome);
    document.getElementById("w-income").value = wIncome.toFixed(2);

    const mIncome = document.getElementById("d-income").value * 30;
    console.log(mIncome);
    document.getElementById("m-income").value = mIncome.toFixed(2);

    const dOutcome = document.getElementById("d-income").value / 4;
    console.log(dOutcome);
    document.getElementById("d-outcome").value = dOutcome.toFixed(2);

    const wOutcome = document.getElementById("w-income").value / 4;
    console.log(wOutcome);
    document.getElementById("w-outcome").value = wOutcome.toFixed(2);

    const mOutcome = document.getElementById("m-income").value / 4;
    console.log(mOutcome);
    document.getElementById("m-outcome").value = mOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// ---WEEKLY INCOME
function wIncome() {
    const wIncome = document.getElementById("w-income").value;
    console.log(wIncome);

    const dIncome = document.getElementById("w-income").value / 7;
    console.log(dIncome);
    document.getElementById("d-income").value = dIncome.toFixed(2);

    const mIncome = dIncome * 30;
    console.log(mIncome);
    document.getElementById("m-income").value = mIncome.toFixed(2);

    const dOutcome = document.getElementById("d-income").value / 4;
    console.log(dOutcome);
    document.getElementById("d-outcome").value = dOutcome.toFixed(2);

    const wOutcome = document.getElementById("w-income").value / 4;
    console.log(wOutcome);
    document.getElementById("w-outcome").value = wOutcome.toFixed(2);

    const mOutcome = document.getElementById("m-income").value / 4;
    console.log(mOutcome);
    document.getElementById("m-outcome").value = mOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// ---MONTHLY INCOME
function mIncome() {
    const mIncome = document.getElementById("m-income").value;
    console.log(mIncome);

    const dIncome = document.getElementById("m-income").value / 30;
    console.log(dIncome);
    document.getElementById("d-income").value = dIncome.toFixed(2);

    const wIncome = dIncome * 7;
    console.log(wIncome);
    document.getElementById("w-income").value = wIncome.toFixed(2);

    const dOutcome = document.getElementById("d-income").value / 4;
    console.log(dOutcome);
    document.getElementById("d-outcome").value = dOutcome.toFixed(2);

    const wOutcome = document.getElementById("w-income").value / 4;
    console.log(wOutcome);
    document.getElementById("w-outcome").value = wOutcome.toFixed(2);

    const mOutcome = document.getElementById("m-income").value / 4;
    console.log(mOutcome);
    document.getElementById("m-outcome").value = mOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// -----OUTCOME--------------------------------

// ---DAILY OUTCOME
function dOutcome() {
    const dOutcome = document.getElementById("d-outcome").value;
    console.log(dOutcome);

    const wOutcome = document.getElementById("d-outcome").value * 7;
    console.log(wOutcome);
    document.getElementById("w-outcome").value = wOutcome.toFixed(2);

    const mOutcome = document.getElementById("d-outcome").value * 30;
    console.log(mOutcome);
    document.getElementById("m-outcome").value = mOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// ---WEEKLY OUTCOME
function wOutcome() {
    const wOutcome = document.getElementById("w-outcome").value;
    console.log(wOutcome);

    const dOutcome = document.getElementById("w-outcome").value / 7;
    console.log(dOutcome);
    document.getElementById("d-outcome").value = dOutcome.toFixed(2);

    const mOutcome = document.getElementById("d-outcome").value * 30;
    console.log(mOutcome);
    document.getElementById("m-outcome").value = mOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// ---MONTHLY OUTCOME
function mOutcome() {
    const mOutcome = document.getElementById("m-outcome").value;
    console.log(mOutcome);

    const dOutcome = document.getElementById("m-outcome").value / 30;
    console.log(dOutcome);
    document.getElementById("d-outcome").value = dOutcome.toFixed(2);

    const wOutcome = document.getElementById("d-outcome").value * 7;
    console.log(wOutcome);
    document.getElementById("w-outcome").value = wOutcome.toFixed(2);

    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// -----TOTAL--------------------------------

// ---DAILY TOTAL
function dTotal() {
    const dTotal = document.getElementById("d-income").value - document.getElementById("d-outcome").value;
    console.log(dTotal);
    document.getElementById("d-total").value = dTotal;
    document.getElementById("w-total").value = dTotal * 7;
    document.getElementById("m-total").value = dTotal * 30;
}

// ---WEEKLY TOTAL
function wTotal() {
    const wTotal = document.getElementById("w-income").value - document.getElementById("w-outcome").value;
    console.log(wTotal);
    document.getElementById("w-total").value = wTotal;
    document.getElementById("d-total").value = wTotal / 7;
    document.getElementById("m-total").value = document.getElementById("d-total").value * 30;
}

// ---MONTHLY TOTAL
function mTotal() {
    const mTotal = document.getElementById("m-income").value - document.getElementById("m-outcome").value;
    console.log(mTotal);
    document.getElementById("m-total").value = mTotal;
    document.getElementById("d-total").value = mTotal / 30;
    document.getElementById("w-total").value = document.getElementById("d-total").value * 7;
}

// -----RESET--------------------------------
function reset() {
    document.getElementById("d-income").value = "";
    document.getElementById("w-income").value = "";
    document.getElementById("m-income").value = "";
    document.getElementById("d-outcome").value = "";
    document.getElementById("w-outcome").value = "";
    document.getElementById("m-outcome").value = "";
    document.getElementById("d-total").value = "";
    document.getElementById("w-total").value = "";
    document.getElementById("m-total").value = "";

}