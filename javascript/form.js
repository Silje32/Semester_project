//Use RegEx to validate form

//Select the form:
const form = document.querySelector("contact");

// Submit event
function validateForm(event) {
  alert ("The form was submitted");
}

form.addEventListener("submit", validateForm);



//Validating that the full name input are not empty.
function checkFullName(fullname) {
  var myName = /(\w+)/;
  if (fullname.match(myName)) {
     return true;
  }  else {
     alert( "Please enter your name and last name here" );
     return false;
  }
}


//Validating that the e-mail address is correct.
function checkEmail(email) {
  var myEmail = /\S+@\S+.\S+/;
  if (email.match(myEmail)) {
     return true;
  }  else {
     alert( "The e-mail number entered is invalid!" );
     return false;
  }
}


//Validating that the phone number is correct.
function checkPhone(phone) {
  var myPhone =   /^\d{8}$/;
  if (phone.match(myPhone)) {
     return true;
  }  else {
     alert( "The phone number entered is invalid!" );
     return false;
  }
}



//Function to check that the submit button is working.

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    alert("the form was successfully submitted");
}
