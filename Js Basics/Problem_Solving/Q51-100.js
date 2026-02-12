function Q51(arr) {

    arr.forEach(element => {
        console.log(arr[element - 1]);
    });

    // User Defined
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i]);
    }
}

function Q52(arr) {

    // User Defined

    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    console.log(sum);

}

function Q53(arr) {
    // User Defined

    let max = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max);

    // InBuilt

    console.log(Math.max(...arr));
    // do similar to above but change argument in sort    
}

function Q54(arr) {
    // User Defined

    let min = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(min);

    // Inbuilt

    console.log(Math.min(...arr));

    // Can do sort((a,b)=> b-a);
    // arr[0]
}

function Q55(arr) {

    let count = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }

    console.log(count);

}

function Q56(arr) {

    let count = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 != 0) {
            count++;
        }
    }

    console.log(count);

}

function Q57(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}

function Q58(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        if (!(arr[i] > 0)) {
            console.log(arr[i]);
        }
    }
}

function Q59(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

function Q60(arr) {

    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }

    console.log(sum / arr.length);

}

function Q61(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i] = 2 * arr[i];
    }

    console.log(arr);
}

function Q62(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        // arr[i] = (arr[i])**2;
        arr[i] = arr[i] * arr[i];
    }

    console.log(arr);
}

function Q63(arr) {
    console.log(arr.reverse());

    // can do by pushing arr from back side into a new arr

}

function Q64(arr) {
    let arrCpy = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        arrCpy.push(arr[i]);
    }

    console.log(arrCpy);

}

function Q65(arr) {

    let value = 5;

    // if(arr.includes('value')) {
    //     console.log("true");
    // }
    // else {
    //     console.log("False");
    // }

    for (let i = 0; i <= arr.length - 1; i++) {
        // if (arr[i] == value) {
        //     console.log("true");
        // }
        // else {
        //     console.log("False");
        // }
    }
}

function Q66(arr) {

    let value = 5;

    console.log(arr.indexOf(value));

    // if(arr.contains('value')) {
    //     console.log("true");
    // }
    // else {
    //     console.log("False");
    // }

    for (let i = 0; i <= arr.length - 1; i++) {
        // if (arr[i] == value) {
        //     console.log("true");
        // }
        // else {
        //     console.log("False");
        // }
    }

}

function Q67(arr) {
    let count = 0;
    let value = 7;

    // for (let i = 0; i <= arr.length - 1; i++) {
    //     if (arr[i] == value) {
    //         count++;
    //     }
    // }

    // console.log(count);
}


function Q68(arr) {

    let isTrue = true;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i + 1] <= arr[i]) {
            isTrue = false;
        }
    }

    console.log(isTrue);
}

function Q69(arr) {

    let max = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }

    let arrNew = arr.filter(x => x !== max);
    max = arrNew[0]

    for (let i = 0; i <= arrNew.length - 1; i++) {
        if (arrNew[i] > max) {
            max = arrNew[i];
        }

    }

    // let smax = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > smax && arr[i] < max) {
    //         smax = arr[i];

    //     }
    //     console.log(smax);
    // }
}

function Q70(arr) {

    let min = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }

    let arrNew = arr.filter(x => x !== min);
    min = arrNew[0]

    for (let i = 0; i <= arrNew.length - 1; i++) {
        if (arrNew[i] < min) {
            min = arrNew[i];
        }

    }
    console.log(min);
}

function Q71(arr) {

    let arrNew = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 != 0) {
            arrNew.push(arr[i]);
        }
    }

    console.log(arrNew);
}

function Q72(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let notpresent = true;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] == res[j]) {
                notpresent = false;
                break;
            }
        }

        if (notpresent == true) {
            res.push(arr[i]);
        }
    }
    console.log(res);

}

function Q73(arr1, arr2) {

    for (let i = 0; i <= arr2.length - 1; i++) {
        arr1.push(arr2[i]);
    }

    console.log(arr1);
    // console.log([...arr1, ...arr2]);
}

function Q74(arr1, arr2) {
    let arrNew = [];

    // To do this you first need to remove duplicates from the arrays

    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] == arr2[j]) {
                arrNew.push(arr1[i]);
            }
        }
    }
    console.log(arrNew);
}

function Q75(arr) {
    // let last = arr.pop();
    // arr.unshift(last);

    // console.log(arr);

    if (arr.length <= 1) {
        console.log(arr);
        return;
    }

    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = last;
    console.log(arr);
}

function Q76(arr) {
    // let first = arr.shift();
    // arr.push(first);

    // console.log(arr);

    let res = [];
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res.push(arr[i]);

        res.push(temp);
        console.log(res);
    }
}

function Q77(arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > avg) {
            console.log(arr[i]);
        }
    }

}

function Q78(arr) {
    // console.log(Math.max(arr));
    // console.log(Math.min(arr));

    let max = 0;
    let min = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(max);
    console.log(min);
}

function Q79(arr) {

    let zeros = 0;
    let ones = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == 0) {
            zeros++;
        }
        else {
            ones++;
        }
    }

    console.log(zeros + " " + ones);
}

function Q80(arr) {

    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
        else {
            oddArr.push(arr[i]);
        }
    }

    console.log(evenArr, oddArr);

}

function Q81(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

function Q82(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {

            if (i >= j) {
                row += "* ";
            }
        }
        console.log(row);
    }
}

function Q83(n) {

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {

            if (i >= j) {
                row += j;
            }
        }
        console.log(row);
    }
}

function Q84(n) {

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {

            if (i >= j) {
                row += i;
            }
        }
        console.log(row);
    }
}

function Q85(table, n) {

    let row = "";

    for (let i = 1; i <= n; i++) {
        row += table * i;
    }

    console.log(row);
}

function Q86(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        console.log(sum);
    }
}

function Q87(num) {

    let isSquare = true;

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (i ** 2 == num) {
            isSquare = true;
        }
        else {
            isSquare = false;
        }
    }
    console.log(isSquare);

}

function Q88(num) {

    // User Defined Way

    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digi = temp % 10;
        sum += digi ** 3;
        temp = Math.floor(temp / 10);
    }

    if (sum == num) {
        console.log("true");
    }
    else {
        console.log("False");
    }

    // PreDefined function Way

    let number = 153;

    let arr = String(number).split("");

    let res = arr.reduce((current, value) => {
        return Number(current) + Number(value) ** arr.length;
    })

    if (res == number) {
        console.log("Armstrong");
    }
    else {
        console.log("Not Armstrong")
    }
}

function Q89(arr) {

    let lenArr = [];

    for (let i = 0; i < arr.length; i++) {
        lenArr.push(arr[i].length);
    }

    console.log(lenArr);
}

function Q90(arr) {

    let max = 0;
    let result;

    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i].length) {
            max = arr[i].length;
            result = arr[i];
        }
    }

    console.log(result);
}

function Q91(arr) {
    let obj = {};

    for (let index of arr) {
        if (obj[index] == undefined) {
            obj[index] = 1;
        }
        else {
            obj[index]++;
        }
    }
    console.log(obj);
}

function Q92(arr) {

    let obj = {};

    for (let char of arr) {
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }
    }

    let max;
    let maxFrequency = 0
    for (let char in obj) {
        if (obj[char] > maxFrequency) {
            max = char;
            maxFrequency = obj[char];
        }
    }
    console.log(max);
}

function Q93(arr) {
    let obj = {};

    for (let index of arr) {
        if (obj[index] == undefined) {
            obj[index] = 1;
        }
        else {
            obj[index]++;
        }
    }
    console.log(obj);
}

function Q94(arr) {
    let name = '';
    let maxMarks = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].marks > maxMarks) {
            maxMarks = arr[i].marks;
            name = arr[i].name;
        }
    }
    console.log(name);
}

function Q95(obj) {

    let total = 0;

    for (let index in obj) {

        total += obj[index];
    }
    console.log(total);
}

function Q96(obj) {
    let sum = 0;
    let count = 0;

    for (let index in obj) {
        sum += obj[index];
        count++;
    }

    console.log(sum / count);
}

function Q97(obj) {
    let res = []

    for (let mark in obj) {
        res.push(mark);
    }
    console.log(res);
}

function Q98(obj) {
    let res = []

    for (let mark in obj) {
        res.push(obj[mark]);
    }
    console.log(res);
}

function Q99(obj) {
    let count = 0;
    
    for(let index in obj) {
        count++
    }
    console.log(count);

}

function Q100(arr) {
    let result = arr.filter((value)=> {
        if (value['age'] > 18) {
            return value;
        }
    })
    console.log(result);
    
}
// Q51([1,2,4,5,6,7]);
// Q52([1,2,4,5,6,7]);
// Q53([1,2,4,5,6,7]);
// Q54([1,2,4,5,6,7]);
// Q55([1,2,4,5,6,7]);
// Q56([1,2,4,5,6,7]);
// Q57([1,2,4,5,6,7]);
// Q58([1,2,4,5,6,7]);
// Q59([1,2,4,5,6,7]);
// Q61([1, 2, 4, 5, 6, 7]);
// Q62([1, 2, 4, 5, 6, 7]);
// Q63([1, 2, 4, 5, 6, 7]);
// Q64([1, 2, 4, 5, 6, 7]);
// Q65([1, 2, 4, 5, 6, 7]);
// Q66([1, 2, 4, 5, 3, 7]);
// Q67([1, 2, 4, 5, 6, 7, 7]);
// Q68([1, 2, 4, 5, 6, 7]);
// Q69([1, 2, 4, 5, 6, 7]);
// Q70([1, 2, 4, 5, 6, 7]);
// Q71([1, 2, 4, 5, 6, 7]);
// Q72([1, 2, 4, 5, 6, 7, 7]);
// Q73([1, 2, 4, 5], [6, 7, 7]);
// Q74([1, 2, 6, 7], [6, 7, 8]);
// Q75([1, 2, 4, 5, 6, 7]);
// Q76([1, 2, 4, 5, 6, 7, 7]);
// Q78([1, 2, 4, 5, 6, -7, 7]);
// Q79([1, 1, 0, 0, 0, 1, 0]);
// Q80([1, 2, 4, 5, 6, 7, 7]);
// Q81(3);
// Q82(4);
// Q83(4);
// Q84(4);
// Q85(4, 10);
// Q86([[1, 2, 3], [4, 5, 6]]);
// Q87(36);
// Q88(407);
// Q89(["hi", "hello", "a"]);
// Q90(["hi", "hello", "a"]);
// Q91([1, 1, 2, 5, 3, 4, 1, 1]);
// Q92([1, 1, 2, 5, 3, 4, 1, 1]); // Not done
// Q93(['a', 'b', 'd', 'f', 's', 'a']); // CAN CHANGE STRIMG INTO ARRAY
// Q94([{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}]);
// Q95({ apple: 50, banana: 20, mango: 30 });
// Q96({ math: 80, science: 90, english: 70 });
// Q97({ math: 80, science: 90, english: 70 });
// Q98({ math: 80, science: 90, english: 70 });
// Q99({ math: 80, science: 90, english: 70 });
Q100([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]);