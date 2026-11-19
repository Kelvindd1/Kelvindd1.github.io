// MPG calculator, built from the assignment pseudocode after fixing three bugs:
//   1. "+" changed to "/" (MPG is miles divided by gallons)
//   2. Variable names made consistent (gallonsOfGas -> gallonsOfGasUsed, milsperGallon -> milesPerGallon)
//   3. The second "start" changed to "stop"
//
// start
//    input milesTraveled
//    input gallonsOfGasUsed
//    milesPerGallon = milesTraveled / gallonsOfGasUsed
//    output milesPerGallon
// stop

function calculateMpg(event) {
  event.preventDefault();

  let milesTraveled = parseFloat(document.getElementById("miles").value);
  let gallonsOfGasUsed = parseFloat(document.getElementById("gallons").value);
  let result = document.getElementById("mpgResult");

  if (isNaN(milesTraveled) || milesTraveled <= 0) {
    result.className = "message error";
    result.textContent = "Please enter the miles traveled (more than 0).";
    return;
  }

  // Checked separately so we never divide by zero
  if (isNaN(gallonsOfGasUsed) || gallonsOfGasUsed <= 0) {
    result.className = "message error";
    result.textContent = "Please enter the gallons used (more than 0).";
    return;
  }

  let milesPerGallon = milesTraveled / gallonsOfGasUsed;

  result.className = "message success";
  result.textContent = "Your car gets " + milesPerGallon.toFixed(1) + " miles per gallon.";
}

document.getElementById("mpgForm").addEventListener("submit", calculateMpg);

document.getElementById("mpgClearBtn").addEventListener("click", function () {
  document.getElementById("mpgResult").textContent = "";
});
