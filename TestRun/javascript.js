var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords don't match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    validatePassword();
    var form = document.getElementById("form");
    if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else if (confirm_password.validity.valid) {
        window.location.href = "http://www.google.com"; // Redirect to Google if passwords match
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

document.getElementById("form").addEventListener("submit", handleSubmit);
