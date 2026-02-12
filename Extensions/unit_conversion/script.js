import { kmToFeet } from "./km_feet.js";
import { kmToMiles } from "./km_miles.js";
import { kmToCm } from "./km_cm.js";

const input = document.querySelector(".text");
const btn = document.querySelector("#btn");
const type = document.querySelector("#type");
let  answer = document.querySelector(".ans")

btn.addEventListener('click', ()=> {

    let num = Number(input.value);
    let ans;
    if (type.value == 'cm') {
        ans = kmToCm(num);
    }
    else if (type.value == 'feet') {
        ans = kmToFeet(num);
    }
    else if (type.value == 'miles') {
        ans = kmToMiles(num);
    }
    
    answer.innerHTML = `<p>${type.value} :- ${ans}`;
});