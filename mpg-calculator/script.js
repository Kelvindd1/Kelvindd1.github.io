// Debugged version of the pseudocode:
//
// start
//    input milesTraveled
//    input gallonsOfGasUsed
//    milesPerGallon = milesTraveled / gallonsOfGasUsed
//    output milesPerGallon
// stop

function calculateMPG(event) {
  event.preventDefault();

  let milesTraveled = parseFloat(document.getElementById("milesTraveled").value);
  let gallonsOfGasUsed = parseFloat(document.getElementById("gallonsUsed").value);
  let result = document.getElementById("result");

  if (isNaN(milesTraveled) || isNaN(gallonsOfGasUsed)) {
    result.className = "result error";
    result.innerHTML = "Please enter both values.";
    return;
  }

  // Dividing by zero would return Infinity
  if (gallonsOfGasUsed <= 0) {
    result.className = "result error";
    result.innerHTML = "Gallons used must be greater than 0.";
    return;
  }

  let milesPerGallon = milesTraveled / gallonsOfGasUsed;

  result.className = "result";
  result.innerHTML = "Your car gets <strong>" + milesPerGallon.toFixed(2) + "</strong> miles per gallon.";
}

document.getElementById("mpgForm").addEventListener("submit", calculateMPG);

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
});
