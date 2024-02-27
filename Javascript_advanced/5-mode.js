// the javascript of the file 5-htmlDOM

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white',);
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // setting up the spooky, darkmode and scream mode buttons

    var spookyButton = document.querySelector('button:nth-child(1)');
    var darkModeButton = document.querySelector('button:nth-child(2)');
    var screamModeButton = document.querySelector('button:nth-child(3)');

    // setting up the spooky, darkmode and screamMode event listener

    spookyButton.addEventListener('click', spooky());
    darkModeButton.addEventListener('click', darkMode());
    screamModeButton.addEventListener('click', screamMode());

}

// execute the main function here

main();
