var passError = document.getElementById('pass-error');
var submitError = document.getElementById('error');

function validatePassword() {
    var password = document.getElementById('password').value;
    var essentialToPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!essentialToPass.test(password)) {
        passError.innerHTML = "Password must be at least 8 characters long, contain at least one upper and lower case letter, a number, and a special character.";
        return false;
    }
    passError.innerHTML = "Valid Password, kindly submit";
    return true;
}

function validateForm() {
    if (!validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please enter a valid password";
        setTimeout(function(){submitError.style.display = 'none';}, 5000);
        return false;
    }
}
