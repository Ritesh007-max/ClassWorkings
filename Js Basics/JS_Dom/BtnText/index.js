var messageDisplay = document.querySelector("#message");
var changeTextBtn = document.querySelector("#changeTextBtn");

var arr = ["1", "2", "3"];

var index = 0;

function onClick() {
  
    messageDisplay.textContent = arr[index];
    index++;
    // for(let index = 0; index < arr.length; index++) {
    //     messageDisplay.textContent = arr[index];
    // }
    
    if (arr.length  === index) {
        index = 0;
    }
}

changeTextBtn.addEventListener('click', onClick);