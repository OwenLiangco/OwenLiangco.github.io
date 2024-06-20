var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var form = document.getElementById("passwordForm");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Remove previous error styles
    var fields = form.querySelectorAll('input');
    fields.forEach(function(field) {
        field.classList.remove('error');
    });

    // Check for empty fields and add error class if needed
    var valid = true;
    fields.forEach(function(field) {
        if (!field.value) {
            field.classList.add('error');
            valid = false;
        }
    });

    // Validate passwords
    validatePassword();
    if (!valid) {
        // If any field is empty, stop the submission
        return;
    }

    // If all fields are filled and passwords match, redirect
    if (confirm_password.validity.valid) {
        window.location.href = "http://www.google.com"; // Redirect to Google if passwords match
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

form.addEventListener("submit", handleSubmit);
