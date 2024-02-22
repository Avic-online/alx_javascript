function generateInputFields(selectedValue) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '' //this is to clear initial input field

    if (selectedValue > 0) {
        for (var i = 1; i <= selectedValue; i++) {
            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + i;
            inputField.placeholder = 'field' + i;

            inputContainer.appendChild(inputField);

        }
    }
}


function validateForm() {
    var selectedValue = document.getElementById('numFields').value;
    var inputContainer = document.getElementById('inputContainer');
    var inputFields = inputContainer.getElementsByTagName('input');

    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value ==='') {
            alert("Please fill in all fields");
            return false;
        }
        alert('input successfully submitted!')
    }

    return true;
}

function displayError(message) {
    var errorElement = document.getElementById('error');
    errorElement.innerHTML = message;
}
