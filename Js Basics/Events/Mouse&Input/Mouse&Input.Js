var clickMessage = document.querySelector("#clickMessage");
var clickBtn = document.querySelector("#clickBtn");
var dblClickBox = document.querySelector("#dblClickBox");
var hoverCard = document.querySelector("#hoverCard");
var liveInput = document.querySelector("#liveInput");
var livePreview = document.querySelector("#livePreview");
var selectedCity = document.querySelector("#selectedCity");
var citySelect = document.querySelector("#citySelect");
var h1Tag = document.querySelector("h1");

// Task 01. Click Event - Change Text
var textArr = ["1", "2", "3"];
var index = 0;


function textChange() {

    clickMessage.textContent = textArr[index];
    index++;

    if (index > textArr.length - 1) {
        index = 0;
    }

}

clickBtn.addEventListener('click', textChange);

// Task 02. Double Click Event

var colorArr = ["red", "green", "blue"]

function changeColor() {

    dblClickBox.style.backgroundColor = colorArr[index];
    index++;

    if (index > textArr.length - 1) {
        index = 0;
    }
}

dblClickBox.addEventListener('dblclick', changeColor);

// Task 03. Mouse Enter / Leave

hoverCard.addEventListener('mouseenter', () => {
    hoverCard.style.border = "5px solid red";
});
hoverCard.addEventListener('mouseleave', () => {
    hoverCard.style.border = "1px solid black";
});

// Task 04. Input Event (Live Typing)

liveInput.addEventListener("input", (event) => {
    livePreview.textContent = event.target.value;
});

// Task 04. Track Mouse Location (Extra)

document.addEventListener("mousemove", (event) => {
    // console.log(event.clientX + event.clientY);
});

// Task 05. Change Event (Dropdown)

citySelect.addEventListener('click', () => {
    selectedCity.textContent = citySelect.value;
})

// Task 06. Scroll Wheel (Extra)

document.addEventListener('wheel', (event) => {

    if (event.deltaY > 0) {
        console.log("Moving in -Y");
    }
    else if (event.deltaY < 0) {
        console.log("Moving in +Y");
    }
    else {
        console.log("Static");
    }

});

// Task 07. Copy & Paste (Extra)

h1Tag.addEventListener('copy', (event)=>{
    console.log(event.target);
});

h1Tag.addEventListener('paste', (event)=> {
    console.log(event.target);
})