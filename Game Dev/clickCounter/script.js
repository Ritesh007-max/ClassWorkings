var currentScore = document.querySelector('#currentscore');
var highScore = document.querySelector('#highscore');
var timer = document.querySelector('#timer');
var clickBtn = document.querySelector('#clickButton');
var startBtn = document.querySelector('#startButton');
var resetBtn = document.querySelector('#resetButton');
var statusMsg = document.querySelector('#statusMessage');
var pauseBtn = document.querySelector('#pauseButton');
var resumeBtn = document.querySelector('#resumeButton');
var container = document.querySelector('.container');
var userName = prompt("Enter Your name");

var current = 0;
var high = 0;
var time = 10;
var flag = false;
var timeId = null;
var isPaused = false;
var cps = 0;

function onWebsite() {
    loadData();
    displayContent();
}

function loadData() {
    var temp = localStorage.getItem('highScore');

    if (temp != null) {
        high = temp;
    }
    else {
        high = 0;
    }
}

function displayContent() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time;

    //  Click Counter Turns Red When > 20

    if (current > 20) {
        currentScore.style.color = "red";
    }
}

function endGame() {

    clearInterval(timeId);
    flag = false;
    clickBtn.disabled = true;
    startBtn.disabled = false;
    clickBtn.style.backgroundColor = 'rgb(157, 161, 164)';
    cps = current / 10;

    if (current > high) {
        localStorage.setItem('highScore', current);
        high = current;
        current = 0;

        //        Confetti on New High Score

        setTimeout(function () {
            document.body.style.backgroundColor = 'gold';
        }, 1000);

        setTimeout(function () {
            document.body.style.backgroundColor = 'blueviolet';
        }, 3000);


        statusMsg.innerHTML = 'current is grater then high';
    }
    else {
        statusMsg.innerHTML = `${userName} your current score is ${current}`;
        current = 0;
    }

    startBtn.textContent = "Play Again";
    time = 10;
    displayContent();
    alert(`Your CPS is ${cps}`);
}

function startGame() {
    clickBtn.disabled = false;
    startBtn.disabled = true;
    flag = true;
    time = 10;
    clickBtn.style.backgroundColor = 'rgb(235, 11, 89)';
    statusMsg.innerHTML = `${userName} You can start now`;
    timeId = setInterval(function () {
        time--;


        if (time < 0) {
            endGame();
            console.log("du");

        }
        displayContent();

    }, 1000);

    //  "Click Me!" Message Flashes on Start

    setTimeout(function () { clickBtn.textContent = "Click Me!"; }, 1000);
}

function registerClick() {

    if (flag) {
        current++;
        //  Button Grows When You Click         
        clickBtn.style.transform = "scale(1.1)";
        setTimeout(function () { clickBtn.style.transform = "scale(1)"; }, 500);
        displayContent();
    }

}

function resetGame() {
    clearInterval(timeId);
    current = 0;
    high = 0;
    time = 10;
    localStorage.clear();
    clickBtn.disabled = true;
    clickBtn.style.backgroundColor = 'rgb(157, 161, 164)';
    startBtn.disabled = false;
    statusMsg.innerHTML = `${userName} This is a fresh start`;
    startBtn.textContent = "Start Game";
    displayContent();
}

function pauseGame() {
    resumeBtn.disabled = false;
    resumeBtn.style.backgroundColor = '#0cc2f0';
    clickBtn.disabled = true;
    isPaused = true;
}

function resumeGame() {
    clickBtn.disabled = false;
    isPaused = false;
}

onWebsite();

startBtn.addEventListener('click', startGame);
clickBtn.addEventListener('click', registerClick);
resetBtn.addEventListener('click', resetGame);
pauseBtn.addEventListener('click', pauseGame);
resumeBtn.addEventListener('click', resumeGame);