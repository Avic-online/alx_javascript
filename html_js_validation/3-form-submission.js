document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('submitForm');
    form.addEventListener('submit', handleFormSubmit);
})

function handleFormSubmit(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var errorElement = document.getElementById('error');
    var successElement = document.getElementById('success');

    // setting error message back to default

    errorElement.innerHTML = '';
    successElement.innerHTML = '';

    // confirm if all input field have a value

    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        displayError('please fill in all required fields');
        return;
    }
    // if all validations passwordInput, display success message
    displaySuccess('Form submitted successfully!');
}


function displayError(message) {
    var errorElement = document.getElementById('error');
    errorElement.innerHTML = message;

}

function displaySuccess(message) {
    var successElement = document.getElementById('success');
    successElement.innerHTML = message;
}


