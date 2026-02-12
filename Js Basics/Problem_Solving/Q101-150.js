function Q101(num) {
    console.log(num * num);
}

function Q102(num1, num2) {
    console.log(num1 + num2);
}

function Q103(name) {
    console.log(`Hello, ${name}`);
}

function Q104(num) {
    if (num % 2 == 0) {
        console.log('Even');
    }
    else {
        console.log("odd");
    }
}

function Q105(num) {
    if (num % 2 != 0) {
        console.log('odd');
    }
    else {
        console.log("Even");
    }
}

function Q106(num) {
    if (num > 0 && num < 100) {
        console.log('True');
    }
    else {
        console.log("False");
    }
}

function Q107(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is grater then num2");
    }
    else {
        console.log("num1 is smaller then num2");
    }
}

function Q108(str) {
    if (str.length > 5) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

function Q109(str) {
    let result = str.split('');

    console.log(result[0]);
}

function Q110(str) {
    let result = str.split('');

    console.log(result[length - 1]);
}

function Q111(str1, str2) {
    if (str1.length > str2.length) {
        console.log(str1);
    }
    else {
        console.log(str2);
    }
}

function Q112(num1, num2, num3) {
    console.log((num1 + num2 + num3) / 3);
}

function Q113(num) {
    if (num > 0) {
        console.log("positive");
    }
    else if (num < 0) {
        console.log("negative");
    }
    else {
        console.log("zero");
    }
}

function Q114(age) {

    isAdult = true;

    if (age > 18) {
        console.log(isAdult);
    }
    else {
        isAdult = false;
        console.log(isAdult);
    }
}

function Q115(hrs) {
    console.log(hrs * 60);
}

function Q116(mins) {
    console.log(mins * 60);
}

function Q117(temp) {
    console.log((temp * 9 / 5) + 32);
}

function Q118(temp) {
    console.log((temp - 32) * 5 / 9);
}

function Q119(base, height) {
    console.log(base * height * 0.5);
}

function Q120(r) {
    console.log(3.14 * r * r);
}

function Q121(num) {
    if (num % 10 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function Q122(num1, num2) {
    if (num1 > num2) {
        console.log(num2);
    }
    else {
        console.log(num1);
    }
}

function Q123(num1, num2, num3) {
    console.log(Math.min(num1, num2, num3));
}

function Q124(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}

function Q125(num) {

    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function Q126(num) {

    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

function Q127(num) {

    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0 || i % 3 == 0) {
            count++;
        }
    }

    console.log(count);
}

function Q128(num) {

    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            count++;
        }
    }

    console.log(count);
}

function Q129(num) {

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    console.log((sum == num) ? true : false);
}

function Q130(num1, num2) {

    let minNum = Math.min(num1, num2);
    let iMax = 0;

    for (let i = 1; i <= minNum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            if (i > iMax) {
                iMax = i;
            }
        }
    }

    console.log((iMax == 1) ? true : false);
}

function Q131(num) {

    let max = 0;

    while (num > 0) {
        let digit = num % 10;
        if (digit > max) {
            max = digit;
        }
        num = Math.floor(num / 10);
    }

    console.log(max);
}

function Q132(num) {

    let min = 0;

    while (num > 0) {
        let digit = num % 10;
        if (digit < min) {
            min = digit;
        }
        num = Math.floor(num / 10);
    }

    console.log(min);
}

function Q133(num) {

    let count = 0;

    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 == 0) {
            count++;
        }
        num = Math.floor(num / 10);
    }

    console.log(count);
}

function Q134(num) {

    let count = 0;

    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 != 0) {
            count++;
        }
        num = Math.floor(num / 10);
    }

    console.log(count);
}

function Q135(num1, num2) {
    console.log(Math.abs(num1 - num2));
}

function Q136(num) {
    let count = 0;
    let temp = num;

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        count++;
    }

    console.log(count == 3);
}

function Q137(num) {

    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i ** 2;
    }

    console.log(sum);
}

function Q138(num) {

    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i ** 3;
    }

    console.log(sum);
}

function Q139(num) {

    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        sum += digit;
    }

    if (num % sum == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function Q140(num) {

    let digi = num ** 2 % 10;

    if (digi == num) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function Q141(str) {
    let strArr = str.split("");

    if (strArr.length % 2 != 0) {
        console.log(strArr[Math.floor(strArr.length / 2)]);
    }
    else {
        console.log(strArr[Math.floor(strArr.length / 2 - 1)] + "" + strArr[Math.floor(strArr.length / 2)]);
    }
}

function Q142(str) {

    if (str[0] == 'a' || str[0] == 'A') {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function Q143(str) {

    if (str[str.length - 1] == '!') {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function Q144(str) {

    let strArr = str.split(" ");
    let count = 0;

    for (let i = 0; i < strArr.length; i++) {
        count++;
    }

    console.log(count);
}

function Q145(str) {
    console.log(str.trim(" "));
}

function Q146(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "?") {
            res += "!";
        }
        else {
            res += str[i]
        }
    }
    console.log(res)
}

function Q147(str1, str2) {
    console.log((str1 + " " + str2));
}

function Q148(str) {
    let strArr = str.split(" ");

    console.log(strArr[0]);
}

function Q149(str) {
    let strArr = str.split(" ");

    console.log(strArr[strArr.length - 1]);
}

function Q150(str) {
    let strArr = str.split(" ");

    let max = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > max) {
            max = strArr[i].length;
        }
    }
    console.log(max);
}


// Q101(2);
// Q102(5,6);
// Q103('Ritesh');
// Q104(25);
// Q105(54);
// Q106(54);
// Q107(5,6);
// Q110('cbn');
// Q111('Ritesh', 'dfd');
// Q112(5,6, 4);
// Q113(36);
// Q114(25);
// Q115(25);
// Q116(25);
// Q117(6);
// Q118(6);
// Q119(5,6);
// Q125(5);
// Q126(5);
// Q127(1);
// Q128(6);
// Q129(10);
// Q130(12, 18);
// Q131(10254);
// Q132(10254);
// Q133(10254);
// Q134(10254);
// Q135(12, 18);
// Q136(10254);
// Q137(3);
// Q138(3);
// Q139(18);
// Q140(7);
// Q141('stdtra');
// Q142("apple");
// Q143("apple!");
// Q144("dgjjfro sdifum     foeeioe pwo-[wewd]");
// Q145("                  dgjjfro sdifum     foeeioe pwo-[wewd]");
// Q146("gfhhth?");
// Q147("jii", "fjewfip");
// Q148("JavaScript is fun");
// Q149("JavaScript is fun");
// Q150("JavaScript is fun");
