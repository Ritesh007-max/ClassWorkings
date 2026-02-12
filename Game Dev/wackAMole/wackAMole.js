var scoreDisplay = document.querySelector('#score');
var timeDisplay = document.querySelector('#timeLeft'); // sir wrote timeleft display
var bestDisplay = document.querySelector('#maxScore'); // sir wrote maxScoreDisplay
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var pauseBtn = document.querySelector('#pauseBtn');
var holes = document.querySelectorAll('.hole');
var moles = document.querySelectorAll('.mole');
var Msg = document.querySelector('.Msg');

var score = 0;
var time = 30;
var bestScore = 0;
var playFlag = false; // Sir used playGame
var timeId = null;   // sir used gameId

function webLode() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp = localStorage.getItem('highScoreGame');
    if (temp == null) {
        bestScore = 0;
    }
    else {
        bestScore = temp;
    }
}

function displayContent() {
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    bestDisplay.textContent = bestScore;
}

function randomIndex() {
    var index = Math.floor(Math.random()*holes.length);
    return holes[index];
}

function randomTimeGenerator(min, max) {
    return Math.floor(Math.random()*(max-min)+max);
}

function popImageGame() {
    var randomTime = randomTimeGenerator(500, 1000);
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');

    if (playFlag) {
        mole.classList.add('up');
        setTimeout(function() {
            mole.classList.remove('up');
            popImageGame();
        },randomTime);  
    }
}

function startGame() {

    score = 0;
    time = 30;
    playFlag = true;
    pauseBtn.disabled = false;

    startBtn.disabled = true;
    popImageGame();
    
    timeId = setInterval(function(){
        time--;
        if(time == 0){
            endGame();
        }
        displayContent();
    },1000);
}

function endGame() {

    clearInterval(timeId);
    startBtn.disabled = false;
    startBtn.innerHTML = "Play Again"; // Start Button Says "Play Again"
    playFlag = false;    

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore);
        alert(`your score is higher then preious ${score}`);
    }
    else {
        alert(`your score is ${score}`);
    }

    score = 0;
    time = 30;
    displayContent();    
    startBtn.disabled = false;
}

function resetGame() {
    localStorage.clear();
    endGame();
    bestScore = 0;        
    displayContent();
    startBtn.innerHTML = "Start Game"; // Start Button Says "Play Again"
}

function settingGame() {

    if (playFlag) {
        clearInterval(timeId);
        playFlag = false;
        popImageGame();
        pauseBtn.textContent = "Resume Game";
    }
    else {
        playFlag = true;
        popImageGame();          
        timeId = setInterval(function(){
        time--;
        if(time == 0){
            endGame();
        }      
        displayContent();
        },1000);
        pauseBtn.textContent = "Pause Game";
    }

}

function bonk(event) {

    if (playFlag == false) return;

    if (event.target.classList.contains('up')) {                   
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }    
        Msg.innerHTML = "Whack!"; //  "Whack!" Message on Hit
    setTimeout(function() {
        event.target.classList.remove('bonked');   
        Msg.innerHTML = "";
    }, 300);

//  Score Turns Gold When > 50
    if (score > 5) {
        scoreDisplay.style.color = "gold";
    }

    displayContent();    
}

webLode();

startBtn.addEventListener('click', startGame);
moles.forEach((box) => {
    box.addEventListener('click', bonk);
});

resetBtn.addEventListener('click', resetGame);
pauseBtn.addEventListener('click', settingGame);