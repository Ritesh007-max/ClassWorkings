function Q6(marks) {

    // Using If-else    
    if (marks >= 90 && marks < 100) {
        console.log("A");
    }
    else if (marks >= 80 && marks < 90) {
        console.log("B");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("C");
    }
    else if (marks >= 60 && marks < 70) {
        console.log("D");
    }
    else if (marks >= 0 && marks < 60) {
        console.log("F");
    }

    // Using Switch-Case

    switch (true) {
        case (marks >= 90 && marks < 100): console.log("A");
            break;
        case (marks >= 80 && marks < 90): console.log("B");
            break;
        case (marks >= 70 && marks < 80): console.log("C");
            break;
        case (marks >= 60 && marks < 70): console.log("D");
            break;
        case (marks >= 0 && marks < 60): console.log("F");
            break;
    }
}

function Q7(num) {

    // Using If-else  
    if (num % 5 === 0) {
        console.log("divisible by 5");
    }
    else {
        console.log("Not divisible by 5");
    }

    // Using Ternary Operator

    (num % 5 === 0) ? console.log("divisible by 5") : console.log("Not divisible by 5");

}

function Q8(num) {

    // Using If-Else    
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("divisible by 5 and 3");
    }
    else {
        console.log("Not divisible by both");
    }

    // Using Ternary Operator 

    (num % 3 === 0 && num % 5 === 0) ? console.log("divisible by 5 and 3") : console.log("Not divisible by both");
}

function Q9(num) {
    if (num % 4 === 0 && num % 400 === 0) {
        console.log("leap year");
    }
    else {
        console.log("Not a leap year");
    }

    (num % 4 === 0) ? console.log("leap year") : console.log("Not a leap year");
}

function Q10(num) {

    if (num >= 10 && num <= 50) {
        console.log("In Range");
    }
    else {
        console.log("Out of Range");
    }

    (num >= 10 && num <= 50) ? console.log("In Range") : console.log("Out of Range");

}

function Q11_12(limit) {

    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }

}

function Q13(limit) {

    for (let i = 1; i <= limit; i++) {

        if (i % 2 === 0) {
            console.log(i);
        }
    }

}

function Q14(limit) {

    for (let i = 1; i <= limit; i++) {

        if (i % 2 !== 0) {
            console.log(i);
        }
    }

}

function Q15(limit) {
    sum = 0;
    for (let i = 1; i <= limit; i++) {
        var sum = sum + i;
    }
    console.log(sum);
}

function Q16(limit) {
    product = 1;
    for (let i = 1; i <= limit; i++) {
        var product = product * i;
    }
    console.log(product);
}

function Q17(num) {
    var table = 0;
    for (let i = 1; i <= 10; i++) {
        table = num * i;
        console.log(table);
    }

}

function Q18(limit) {
    var count = 0;

    for (let i = 1; i <= limit; i++) {

        if (i % 3 === 0) {
            count++;
        }
    }
    console.log(count);

}

function Q19(num) {
    var fact = 1;

    for (let i = num; i > 0; i--) {
        fact = fact * i;
    }

    console.log(fact);

}

function Q20(limit) {

    for (let i = 1; i <= limit; i++) {
        var answer = 7 * i;
        console.log(answer);
    }

}

function Q21(num) {

    // Using Loop 
    var count = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        count++;
    }
    console.log(count);
    // Using Inbuilt Methods
    console.log(String(num).length);
}

function Q22(num) {

    var sum = 0;

    while (num > 0) {
        var digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

function Q23(num) {

    var product = 1;

    while (num > 0) {
        var digit = num % 10;
        product = product * digit;
        num = Math.floor(num / 10);
    }
    console.log(product);
}

function Q24(num) {

    // Using Inbuilt
    console.log(String(num).split("").reverse());

    // Using Loop

    var revNum = 0;

    while (num > 0) {
        var digit = num % 10;
        revNum = revNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    console.log(revNum);

}

function Q25(num) {
    var revNum = 0;
    var temp = num;

    while (temp > 0) {
        var digit = temp % 10;
        revNum = revNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    if (revNum == num) {
        console.log("True");
    }
    else {
        console.log("False");
    }

}

function Q26(num) {

    var count = 2;

    while (count < num) {
        if (num % count == 0) {
            console.log("Not a Prime");
            break;
        }
        else {
            console.log("is prime");
            break;
        }
        count++;
    }

}

function Q27(num) {

    var count = 2;

    while (count < num) {

        count++;
    }

}

function Q28(num) {
    var term1 = 0;
    var term2 = 1;

    console.log(term1);
    console.log(term2);

    for (let i = 3; i <= num; i++) {
        var term3 = term1 + term2;
        term1 = term2;
        term2 = term3;
        console.log(term3);
    }
}

function Q29(num1, num2) {

    var gcd = 1;

    for (let i = 1; i < Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}

function Q30(num1, num2) {

    var gcd = 1;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    var lcm = (num1 * num2) / gcd;
    console.log(lcm);
}

function Q31(str) {
    // Using Inbuilt

    console.log(str.length);

    //  Using For Loop

    var count = 1;
    var strArr = str.split("");

    for (let i = 1; i < strArr.length; i++) {
        count++;
    }
    console.log(count);

}

function Q32(str) {
    var arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function Q33(str) {
    var arr = str.split("");
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' && arr[i] == 'e' && arr[i] == 'i' && arr[i] == 'o' && arr[i] == 'u') {
            console.log(arr[i]);
            count++;
        }
    }
    console.log(count);
}

function Q34(str) {
    var arr = str.split("");
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u') {
            console.log(arr[i]);
            count++;
        }
    }
    console.log(count);
}

function Q35(str) {
    console.log(str.toUpperCase());
}

function Q36(str) {

    let res = "";

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
    }
    if (ascii >= 65 && ascii <= 90) {
        ascii = ascii + 32;
    }

    let char = String.fromCharCode(ascii);
    res = res + char;

    console.log(res);

    // console.log(str.toLowerCase());
}

function Q37(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);

    // console.log(str.split("").reverse().join(""));
}

function Q38(str) {

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (reversed == str) {
        console.log("True");
    }
    else {
        console.log("False");
    }

    // for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i--, j++) {
    //     if(str[i] == str[j]) {
    //         console.log("True");
    //     }
    //     else {
    //         console.log("False");
    //         break;
    //     }
    // } Some Error

}

function Q39(str) {
    var count = 1;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == 'a' && str[i] == 'A') {
            count++;
        }
    }
    console.log(count);
}

function Q40(str) {
    // InBuiltMethod   
    console.log(str.replaceAll(" ", ""));

    // UserDefinedMethod
    var result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    console.log(result);
}

function Q41(str) {

    // Using InBuilt 
    let strArr = str.trim().split(" ").filter((word) => { return word !== "" });
    let count = strArr.length;

    // Using User defined
    // var count = 1;

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== " " && str[i - 1] == " ") {
    //         count++;
    //     }
    // }
    console.log(count);
}

function Q42(str) {
    // Using In Built method 

    // console.log(str.replaceAll("a", "e"));

    // Using User defined function
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result += 'e';
        } else {
            result += str[i];
        }
    }

    console.log(result);
}

function Q43(str) {

    // Inbuilt

    // if (str.includes("a")) {
    //     console.log("True");
    // }
    // else {
    //     console.log("False");

    // }

    // UserBuilt

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            return true;
        }
    }
    return false;
}

function Q44(str1, str2) {

    // Using UserDefined Method
    // if (str1 === str2) {
    //     console.log("true");
    // }
    // else {
    //     console.log("False");
    // }

    // Using inBuilt Methods

    let str1Arr = str1.trim().split("");
    let str2Arr = str2.trim().split("");
    let isEqual = true;

    if (str1Arr.length == str2Arr.length) {
        for (let i = 0; i < str1Arr.length; i++) {

            if (str1Arr[i].charCodeAt() !== str2Arr[i].charCodeAt()) {
                isEqual = false;
                break;
            }
        }
    }
    else {
        isEqual = false;
    }

    console.log(isEqual);
}

function Q45(str) {

    // User Defined

    let count = 0;
    let strArr = str.split("");
    strArr.forEach(index => {
        if (index >= 0 && index <= 9) {
            count++;
        }
    });

    console.log(count);
}

function Q46(str) {
    let count = 0;
    let strArrChar = str.split("");
    strArrChar.forEach(index => {
        if (index.charCodeAt() >= 65 && index.charCodeAt() <= 90) {
            count++;
        }
    });

    console.log(count);
}

function Q47(str) {
    let count = 0;
    let strArrChar = str.split("");
    strArrChar.forEach(index => {
        if (index.charCodeAt() >= 97 && index.charCodeAt() <= 122) {
            count++;
        }
    });

    console.log(count);
}

function Q48(str) {

    // User Definde

    let strArrChar = str.split("");
    let strArrCharNew = "";
    strArrChar.forEach(index => {
        if (index != "a" && index != "e" && index != "i" && index != "o" && index != "u") {
            strArrCharNew += index;
        }
    });

    console.log(String(strArrCharNew));



    // let vowels = {
    //     a: 1, e: 1, i: 1, o: 1, u: 1,
    //     A: 1, E: 1, I: 1, O: 1, U: 1,
    // };

    // let result = "";

    // for (let i = 0; i < strArrChar.length; i++) {
    //     let ch = strArrChar[i];
    //     if (vowels[ch] === undefined) {
    //         result += ch;
    //     }
    // }

    // console.log(result); 




    // InBuilt

    // str = str.replaceAll("a", "").replaceAll("e", "").replaceAll("i", "").replaceAll("o", "").replaceAll("u", "");

    // console.log(str);
}

function Q49(str) {

    // User Definde

    let strArrChar = str.split("");
    let strArrCharNew = "";
    strArrChar.forEach(index => {
        if (!(index >= 0 && index <= 9)) {
            strArrCharNew += index;
        }

    });

    console.log(String(strArrCharNew));

    // InBuilt

    str = str.replaceAll(1, "").replaceAll(2, "").replaceAll(3, "").replaceAll(4, "").replaceAll(5, "").replaceAll(6, "").replaceAll(7, "")
        .replaceAll(8, "").replaceAll(9, "");

    console.log(str);
}

function Q50(str) {

    let strArrChar = str.split("");

    for (let i = 0; i < strArrChar.length; i++) {
        let code = strArrChar[i].charCodeAt();

        if (code >= 97 && code <= 122) {
            strArrChar[i] = String.fromCharCode(code - 32);
        }
        else if (code >= 65 && code <= 90) {
            strArrChar[i] = String.fromCharCode(code + 32);
        }
    }

    console.log(strArrChar.join(""));

}


// Q6();
// Q7();
// Q8();
// Q9();
// Q10();
// Q11_12();
// Q13();
// Q14();
// Q15();
// Q16();
// Q17();
// Q18();
// Q19();
// Q20();
// Q21();
// Q22();
// Q23();
// Q24(100);
// Q26(121);
// Q28(5);
// Q29(12, 18);
// Q30(12, 45);
// Q31("dfdef");
// Q32("dfdef");
// Q33("dfdef");
// Q34("dfdef");
// Q35("dfdef");
// Q36("dfdef");
// Q37("dfdef");
// Q38("WooW");
// Q39("onrriooqwaaaaa");
// Q40("   aaaa   fe rh");
// Q41("Ritesh Rupesh   Gabale");
// Q42("gfy7a  aaaa");
// console.log(Q43("onrriooqwaaaaa"));
// Q44("asdfghj", "asdfghj");
// Q45("gfy781aaa");
// Q46("GFFy781aGa");
// Q48("GFFy781aGa");
// Q49("GFFy781aGa");
// Q50("GFFy781aGa");