// Mortgage calculator
//
// start
//    input homePrice, downPayment, interestRate, loanTerm
//    principal = homePrice - downPayment
//    monthlyRate = interestRate / 100 / 12
//    numberOfPayments = loanTerm * 12
//    monthlyPayment = principal * monthlyRate * (1 + monthlyRate)^n / ((1 + monthlyRate)^n - 1)
//    totalPaid = monthlyPayment * numberOfPayments
//    totalInterest = totalPaid - principal
//    output monthlyPayment, totalPaid, totalInterest
// stop

function formatMoney(amount) {
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showError(message) {
  let result = document.getElementById("result");
  result.className = "result error";
  result.textContent = message;
}

function calculateMortgage(event) {
  event.preventDefault();

  let homePrice = parseFloat(document.getElementById("homePrice").value);
  let downPayment = parseFloat(document.getElementById("downPayment").value);
  let interestRate = parseFloat(document.getElementById("interestRate").value);
  let loanTerm = parseInt(document.getElementById("loanTerm").value);

  if (isNaN(homePrice) || homePrice <= 0) {
    showError("Please enter a home price greater than 0.");
    return;
  }

  // Blank down payment is treated as $0
  if (isNaN(downPayment)) {
    downPayment = 0;
  }

  if (downPayment < 0 || downPayment >= homePrice) {
    showError("Down payment must be at least 0 and less than the home price.");
    return;
  }

  if (isNaN(interestRate) || interestRate < 0) {
    showError("Please enter an interest rate of 0 or more.");
    return;
  }

  let principal = homePrice - downPayment;
  let monthlyRate = interestRate / 100 / 12;
  let numberOfPayments = loanTerm * 12;
  let monthlyPayment;

  // The formula divides by zero when the rate is 0, so split the payments evenly instead
  if (monthlyRate === 0) {
    monthlyPayment = principal / numberOfPayments;
  } else {
    let growth = Math.pow(1 + monthlyRate, numberOfPayments);
    monthlyPayment = principal * monthlyRate * growth / (growth - 1);
  }

  let totalPaid = monthlyPayment * numberOfPayments;
  let totalInterest = totalPaid - principal;

  let result = document.getElementById("result");
  result.className = "result";
  result.innerHTML =
    "Loan amount: " + formatMoney(principal) + "<br>" +
    "Monthly payment: <strong>" + formatMoney(monthlyPayment) + "</strong><br>" +
    "Total of " + numberOfPayments + " payments: " + formatMoney(totalPaid) + "<br>" +
    "Total interest: " + formatMoney(totalInterest);
}

document.getElementById("mortgageForm").addEventListener("submit", calculateMortgage);

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("result").textContent = "";
});
