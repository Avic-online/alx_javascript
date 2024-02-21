var submitError = document.getElementById('error');

function validateEmail() {
    var email = document.getElementById('email').value;
    // var essentialToPass = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4$/;
    var essentialToPass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.length == 0) {
        submitError.innerHTML = "Email is invalid";
        return false;
    }
    if(!essentialToPass.test(email)) {
        submitError.innerHTML = "Please enter a valid email address";
        return false;
    }
    submitError.innerHTML = "Valid!";
    return true;
}

function validateForm() {
    if (!validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please enter a valid password";
        setTimeout(function(){submitError.style.display = 'none';}, 5000);
        return false;
    }
}