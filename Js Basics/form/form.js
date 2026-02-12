var nameInput = document.querySelector('#nameInput');
var emailInput = document.querySelector('#emailInput');
var ageInput = document.querySelector('#ageInput');
var submitBtn = document.querySelector('#submitBtn');

var emailString = "@gmail.com";
var nameChars = ["!", "@", "#", "$", "%", "^", "&", "*", "`", "~"];

function elLooks() {

    if (nameInput.value === "") {
        nameInput.style.backgroundColor = 'rgba(253, 255, 144, 1)';
        nameInput.style.border = '2px solid red';
    } else {
        nameInput.style.backgroundColor = "";
        nameInput.style.border = '1px solid black';
    }

    if (emailInput.value === "") {
        emailInput.style.backgroundColor = 'rgba(253, 255, 144, 1)';
        emailInput.style.border = '2px solid red';
    } else {
        emailInput.style.backgroundColor = "";
        emailInput.style.border = '1px solid black';
    }

    if (ageInput.value === "") {
        ageInput.style.backgroundColor = 'rgba(253, 255, 144, 1)';
        ageInput.style.border = '2px solid red';
    } else {
        ageInput.style.backgroundColor = "";
        ageInput.style.border = '1px solid black';
    }
}

function emailCheck() {

    var emailArr = emailInput.value.split("");
    var emailStringArr = emailString.split("");
    var j = 9;

    for (let i = emailArr.length - 1; i >= (emailArr.length - emailStringArr.length); --i) {

        if (emailArr[i] == emailStringArr[j]) {
            --j;
        }
        else {
            j = 9;
            alert("Invalid Email");
            return;
        }

    }

}

function nameCheck() {
    var nameArr = nameInput.value.split("");

    nameArr.forEach(element => {

        for (let i = 0; i < nameChars.length; i++) {
            if (nameChars[i] == element) {
                alert("Invalid Name");
            }
            else {
                console.log("No Special char" + element);
            }
        }

    });
    return;
}

function finalSubmit() {

    if (nameInput.value === "") {
        alert("Enter Your Name");
    }
    else {
        nameCheck();
        return;
    }

    if (emailInput.value === "") {
        alert("Enter Your Dammm Email");
    }
    else {
        emailCheck();
        return;
    }

    if (ageInput.value === "") {
        alert("Enter Your Age");
    }

    if (ageInput.value > 100) {
        alert("You are too Old to be alive");
    }

    sessionStorage.setItem('nameStored', nameInput.value);
    sessionStorage.setItem('emailStored', emailInput.value);
    sessionStorage.setItem('ageStored', ageInput.value);

    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";

    alert("Form Submitted Successfully");

}

document.addEventListener('input', elLooks);
submitBtn.addEventListener('click', finalSubmit);