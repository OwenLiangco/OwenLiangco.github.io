var password = document.getElementById("pwd")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.submitToPage('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;