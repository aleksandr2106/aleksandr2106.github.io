
function showError(container, errorMessage) {
     container.className = 'error';
     var msgElem = document.createElement('span');
     msgElem.className = "error-message";
     msgElem.innerHTML = errorMessage;
     container.appendChild(msgElem);
   }

   function resetError(container) {
     container.className = '';
     if (container.lastChild.className == "error-message") {
       container.removeChild(container.lastChild);
     }
   }

   function validate(form) {
     var elems = form.elements;

     resetError(elems.firstName.parentNode);
     if (!elems.firstName.value) {
       showError(elems.firstName.parentNode, 'Enter your First Name!!!');
     }

    resetError(elems.lastName.parentNode);
     if (!elems.lastName.value) {
       showError(elems.lastName.parentNode, 'Enter your Last Name!!!');
     }
     /*console.log(elems.gender.value);
     //resetError(elems.gender.parentNode);
      if (!elems.gender.value) {
        showError(elems.gender.parentNode, 'Enter your Last Name!!!');
      }*/


     resetError(elems.password.parentNode);
     if (!elems.password.value) {
       showError(elems.password.parentNode, 'Enter password!!!');
     } else if (elems.password.value != elems.password2.value) {
       showError(elems.password.parentNode, 'Passwords do not match.');
     }

     resetError(elems.address.parentNode);
      if (!elems.address.value) {
        showError(elems.address.parentNode, 'Enter your address!!!');
      }

      resetError(elems.email.parentNode);
       if (!elems.email.value) {
         showError(elems.email.parentNode, 'Enter your email!!!');
       } else if (elems.email.value.match(/@/)===null ) {
         showError(elems.email.parentNode, 'Email address is not valid!!!');
       }

     resetError(elems.country.parentNode);
     if (!elems.country.value) {
       showError(elems.country.parentNode, ' Select country!!!');
     }

   }
