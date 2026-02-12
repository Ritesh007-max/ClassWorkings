var textDisplay = document.querySelector('#textDisplay');
var typingArea = document.querySelector('#typingArea');
var timerDisplay = document.querySelector('#timer');
var wpmDisplay = document.querySelector('#wpm');
var accuracyDisplay = document.querySelector('#accuracy');
var bestWPMDisplay = document.querySelector('#bestWPM');
var startBtn = document.querySelector('#startBtn');
var resetBtn = document.querySelector('#resetBtn');
var lvlBtn = document.querySelector('#lvls');
var title = document.querySelector('h1');

var timeLeft = 60;
var bestWPM = 0;
var currentText = '';
var timeId = null;
var pause = null;
var startTime = null;
var isTestActive = false;
var wpm = 0;
var clickCount = 0;

var testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to text faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

function webLoad() {
    onload();
    displayContent();
}

function onload() {
    var temp = sessionStorage.getItem('getHighWpm');
    bestWPM = temp == null ? 0 : parseInt(temp);
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
    // don’t reset title here anymore
}

function startGame() {
    startBtn.disabled = true;
    typingArea.disabled = false;
    timeId = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);

    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    typingArea.value = '';
    typingArea.setAttribute('placeholder', 'You can text now');
}

function endGame() {
    clearInterval(timeId);
    timeLeft = 60;
    startBtn.disabled = false;
    typingArea.disabled = true;

    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('getHighWpm', bestWPM);
        alert('your score is higher than the previous');
    } else {
        alert(`wpm is ${wpm}`);
    }

    wpm = 0;
    wpmDisplay.textContent = wpm;
    typingArea.value = "";
    displayContent();
}

function Highlights() {
    var text = typingArea.value;
    var highlightText = ``;

    for (let i = 0; i < currentText.length; i++) {
        if (i <= text.length) {
            if (currentText[i] === text[i]) {
                highlightText += `<span class="correct">${currentText[i]}</span>`;
            } else {
                highlightText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else {
            highlightText += currentText[i];
        }
    }
    textDisplay.innerHTML = highlightText;
}

function textControl() {
    if (startTime == null) {
        startTime = Date.now();
    }
    statusUpdate();
    Highlights();

    clearTimeout(pause);

    // reset title immediately when typing resumes
    title.textContent = "Typing Speed Test";
    title.classList.remove("hidden"); // make sure it’s visible

    pause = setTimeout(function () {
        title.textContent = "Keep Trying!";
        title.style.color = "blue";
        title.classList.remove("hidden");
    }, 3000);

    displayContent();
}

function statusUpdate() {
    var runTimeSec = (Date.now() - startTime) / 1000 / 60;
    var text = typingArea.value;

    var word = text.trim().split(/\s+/).filter(w => w.length > 0);
    wpm = (runTimeSec > 0) ? Math.round(word.length / runTimeSec) : 0;
    wpmDisplay.textContent = wpm;

    var currentScore = 0;
    for (let i = 0; i < currentText.length; i++) {
        if (currentText[i] == text[i]) {
            currentScore++;
        }
    }

    if (currentText.length == text.length) {
        currentText += testTexts[Math.floor(Math.random() * testTexts.length)];
        textDisplay.textContent = currentText;
    }

    if (wpm > 100) {
        wpmDisplay.style.fontWeight = "bold";
    }

    var accuracy = (text.length > 0) ? Math.floor((currentScore / text.length) * 100) : 0;
    accuracyDisplay.textContent = accuracy;

    if (accuracy == 100) {
        accuracyDisplay.style.color = "green";
    }
}

function lvlSet() {
    if (clickCount > 1) {
        lvlBtn.disabled = true;
    } else {
        timeLeft = Math.floor(timeLeft / 2);
        displayContent();
        clickCount++;
    }
}

webLoad();

startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', textControl);
lvlBtn.addEventListener('click', lvlSet);
