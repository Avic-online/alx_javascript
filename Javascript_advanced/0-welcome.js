#!/usr/bin/node
// javascript code to take the full name of user

function welcome(firstName, lastName) {
    // Concatenate firstName and lastName with a space in between
    const fullName = `${firstName} ${lastName}`;

    // Function to display a welcome message with the full name
    function displayFullName() {
        // Display an alert with the welcome message
        alert(`Welcome ${fullName}!`);
    }

    // Call the displayFullName function
    displayFullName();
}