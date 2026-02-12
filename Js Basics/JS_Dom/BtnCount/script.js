var countText = document.querySelector("#countText");
var increaseBtn = document.querySelector("#increaseBtn");

var counter = 0;

increaseBtn.addEventListener('click', ()=> {

    counter++;

    countText.textContent = `Count: ${counter}`;

});