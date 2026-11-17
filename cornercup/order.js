// Same idea as my MPG calculator: read the inputs, check them, do the math, show the result
//
// start
//    input itemPrice
//    input quantity
//    subtotal = itemPrice * quantity
//    tax = subtotal * TAX_RATE
//    total = subtotal + tax
//    output subtotal, tax, total
// stop

const TAX_RATE = 0.08875; // NYC sales tax

function calculateOrder(event) {
  event.preventDefault();

  let itemPrice = parseFloat(document.getElementById("item").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  let result = document.getElementById("orderResult");

  if (isNaN(itemPrice)) {
    result.className = "message error";
    result.innerHTML = "Please choose an item.";
    return;
  }

  if (isNaN(quantity) || quantity < 1) {
    result.className = "message error";
    result.innerHTML = "Quantity must be at least 1.";
    return;
  }

  let subtotal = itemPrice * quantity;
  let tax = subtotal * TAX_RATE;
  let total = subtotal + tax;

  result.className = "message";
  result.innerHTML = "Subtotal: $" + subtotal.toFixed(2) +
                     "<br>Tax: $" + tax.toFixed(2) +
                     "<br><strong>Total: $" + total.toFixed(2) + "</strong>";
}

document.getElementById("orderForm").addEventListener("submit", calculateOrder);

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("orderResult").innerHTML = "";
});
