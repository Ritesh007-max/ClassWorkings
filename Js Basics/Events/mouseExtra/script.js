const mouseDownBtn = document.querySelector("#mouseDownBtn");
const mouseDownResult = document.querySelector("#mouseDownResult");

const mouseUpBtn = document.querySelector("#mouseUpBtn");
const mouseUpResult = document.querySelector("#mouseUpResult");

const moveBox = document.querySelector("#moveBox");
const mousePosition = document.querySelector("#mousePosition");

const wheelBox = document.querySelector("#wheelBox");
const wheelResult = document.querySelector("#wheelResult");

mouseDownBtn.addEventListener('mousedown', () => {
    mouseDownResult.textContent = "MouseDown";
});

mouseUpBtn.addEventListener('mouseup', () => {
    mouseUpResult.textContent = "Status: Button released!";
});

moveBox.addEventListener('mousemove', (event) => {
    mousePosition.textContent = `Mouse position: (x: ${event.clientX}, y: ${event.clientY})`;
});

wheelBox.addEventListener('wheel', (event) => {
    wheelResult.textContent = event.deltaY;
});