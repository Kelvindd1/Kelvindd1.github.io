// There is no server yet, so the form only checks the fields and shows a message

function checkForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("msg").value.trim();
  let output = document.getElementById("formMessage");

  if (name === "" || email === "" || msg === "") {
    output.className = "message error";
    output.textContent = "Please fill in your name, email and message.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    output.className = "message error";
    output.textContent = "Please enter a valid email address.";
    return;
  }

  output.className = "message success";
  output.textContent = "Thanks, " + name + "! We will get back to you soon.";
  document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", checkForm);
