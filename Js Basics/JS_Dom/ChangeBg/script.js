var redBtn = document.querySelector("#redBtn");
var greenBtn = document.querySelector("#greenBtn");
var blueBtn = document.querySelector("#blueBtn");

redBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "red";
});

greenBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "green";
});

blueBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "blue";
});