const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const heartDisplay = document.querySelectorAll('.heart');

var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = 0;
var num = 6;
var color = [];
var attempt = 0;

var colorBoxes = document.querySelectorAll('.color-box');

var resetBtn = document.getElementById('resetStreakBtn');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var newRoundBtn = document.getElementById('newRoundBtn');

function webLoad() {        //webload is created to call all functions for game setup at ones
    onLoad();
    genrateRandom();
    setGame();
    displayContent();

}
// this is the first thing the system does on loding webpage 
function onLoad() {
    var temp = localStorage.getItem('bestHighStreak');

    if (temp != null) {
        bestStreak = parseInt('bestHighStreak');    //parseInt converts datatypes into int's
    }
    else {
        bestStreak = 0;
    }
}

// displays the contents of the given variables 
function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

function genrateRandom() { // Used to genrate random numbers for rgb color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorGenrate(num) {
    for (var i = 0; i < num; i++) { // runs genrateRandom function num times and stores rgb in arr
        color.push(genrateRandom());
    }
}

// randomly creates a number btw 1 & num to match with one of the 6 gives its rgb

function pickbox() {
    const index = Math.floor(Math.random() * num);
    return color[index];
}

function setGame() {
    colorGenrate(num);
    pickCorrectColor = pickbox();
    colorDisplay.textContent = pickCorrectColor;
    for (var i = 0; i < num; i++) {  // assigns specific color to specific box
        colorBoxes[i].style.backgroundColor = color[i];
    }
}

webLoad();

function winGuess(event) {
    var tempBox = event.target;

    if (pickCorrectColor === tempBox.style.backgroundColor) {
        messageDisplay.textContent = "You Won";

        for (let i = 0; i < colorBoxes.length; i++) {
            colorBoxes[i].style.pointerEvents = "none";
        }

        for (let i = 0; i < heartDisplay.length; i++) {
            heartDisplay[i].style.display = "block";
        }

        if (attempt == 0) {
            currentStreak++;
            displayContent();

            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                displayContent();
            }

        }
    }
    else {
        messageDisplay.textContent = "Try again";

        for (let i = heartDisplay.length - 1; i >= 0; i--) {
            if (heartDisplay[i].style.display !== "none") {
                heartDisplay[i].style.display = "none";
                break;
            }
        }

        attempt++;

        currentStreak = 0;
        displayContent();
    }
}

colorBoxes.forEach((box) => {
    box.addEventListener('click', winGuess);
})

function resetGame() {
    localStorage.clear();
    currentStreak.textContent = 0;
    bestStreak.textContent = 0;
    messageDisplay.textContent = "Pick a color!";
    setGame();
}

function easyLevel() {
    num = 3;
    for (var i = 0; i < num; i++) {
        colorBoxes[i].style.display = "none";
    }
    colorGenrate(num);
    easyBtn.style.backgroundColor = "white";
    easyBtn.style.color = "black";
    hardBtn.style.backgroundColor = "grey";
    hardBtn.style.color = "white";
}

function newRound() {
    color.length = 0; // resets array
    messageDisplay.textContent = "Pick a color!"; // resets color

    for (var i = 0; i < num; i++) {
        colorBoxes[i].style.pointerEvents = "auto"; // makes all boxes active
    }

    for (let i = 0; i < heartDisplay.length; i++) {
        heartDisplay[i].style.display = "block";
    }

    if(attempt == 3) {

        for (var i = 0; i < num; i++) {
            colorBoxes[i].style.pointerEvents = "none"; // makes all boxes deactive
        }
    }

    setGame();

    heartDisplay.style.display = "block";
}

resetBtn.addEventListener('click', resetGame);
easyBtn.addEventListener('click', easyLevel);
newRoundBtn.addEventListener('click', newRound);