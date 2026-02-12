var infoPara = document.querySelector("#infoPara");
var BtnHide = document.querySelector("#toggleBtn");

var toggle = false; // False === Para shown

BtnHide.addEventListener('click', ()=> {

    if (!toggle) {
        infoPara.style.display =  "none";
        toggle = true;
        BtnHide.textContent = "Show";
    }
    else if(toggle) {
        infoPara.style.display =  "block";
        toggle = false;
        BtnHide.textContent = "Hide";
    }

});