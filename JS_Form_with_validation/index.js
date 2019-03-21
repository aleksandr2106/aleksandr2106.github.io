function showError(container, errorMessage) {
  container.className = "error";
  var msgElem = document.createElement("span");
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  container.className = "";
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
  }
}

function validate(form) {
  var elems = form.elements;
  var counter = form.elements.length;
  const radioButton = document.querySelectorAll(".gender input");

  resetError(elems.firstName.parentNode);
  if (!elems.firstName.value) {
    showError(elems.firstName.parentNode, "Enter your First Name!!!");
    counter--;
  }

  resetError(elems.lastName.parentNode);
  if (!elems.lastName.value) {
    showError(elems.lastName.parentNode, "Enter your Last Name!!!");
    counter--;
  }

  radioButton[1].parentNode.style.color = "";
  if (radioButton[0].checked !== true && radioButton[1].checked !== true) {
    radioButton[1].parentNode.style.color = "red";
    counter--;
  }

  resetError(elems.birthday.parentNode);
  if (!elems.birthday.value) {
    showError(elems.birthday.parentNode, "Enter your birthday!!!");
    counter--;
  }

  resetError(elems.password.parentNode);
  if (!elems.password.value) {
    showError(elems.password.parentNode, "Enter password!!!");
    counter -= 2;
  } else if (elems.password.value != elems.password2.value) {
    showError(elems.password.parentNode, "Passwords do not match.");
    counter -= 2;
  }

  resetError(elems.address.parentNode);
  if (!elems.address.value) {
    showError(elems.address.parentNode, "Enter your address!!!");
    counter--;
  }

  resetError(elems.email.parentNode);
  if (!elems.email.value) {
    showError(elems.email.parentNode, "Enter your email!!!");
    counter -= 2;
  } else if (elems.email.value.match(/@/) === null) {
    showError(elems.email.parentNode, "Email address is not valid!!!");
    counter -= 2;
  }

  resetError(elems.country.parentNode);
  if (!elems.country.value) {
    showError(elems.country.parentNode, " Select country!!!");
    counter--;
  }
  console.log(counter);
  if (counter === form.elements.length) {
    alert("Validation Passed");
  }
}
