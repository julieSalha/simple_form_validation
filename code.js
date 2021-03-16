// Elements
const signUpForm = document.getElementById('signUpForm');

const emailField = document.getElementById('emailField');
const emailInfo = document.getElementById('email-informations');

const nameUser      = document.querySelector('#name');
const nameInfo = document.querySelector('#name-info');

const ageUser      = document.querySelector('#age');
const ageInfo = document.querySelector('#age-info');

const okButton = document.getElementById('okButton');

// Function checking
function check(input, inputInfo) {
    input.addEventListener('keyup', function (e) {
        e.preventDefault;
        isValidInput = input.checkValidity();
        
        if ( isValidInput ) {
          okButton.disabled = false;
          inputInfo.hidden = true;
    
        } else {
          okButton.disabled = true;
          inputInfo.hidden = false;
        }
      });
}

// Check every input
check(emailField, emailInfo);
check(nameUser, nameInfo);
check(ageUser, ageInfo);
    
okButton.addEventListener('click', function (event) {
    event.preventDefault;
signUpForm.submit();
});