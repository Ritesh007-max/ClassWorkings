function Q151(str) {
    let strArr = str.split(" ");

    let min = strArr[0];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length < min.length) {
            min = strArr[i];
        }
    }
    console.log(min);
}

function Q152(str) {

    let strArr = str.split(" ");
    let count = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "the") {
            count++;
        }
    }

    console.log(count);
}

function Q153(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

function Q154(str) {

    isdigit = true;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
        }
        else {
            isdigit = false;
            break;
        }
    }

    console.log(isdigit);

}

function Q155(str) {
    isletter = true;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 || str.charCodeAt(i) == 32) {
            isletter = false;
            break;
        }
    }

    console.log(isletter);
}

function Q156(str) {

    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    console.log(result);
}

function Q157(str) {

    let result = '';

    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9')) {
            result += str[i];
        }
    }

    console.log(result);

}

function Q158(str) {
    strArr = str.split(" ");

    let letterCount = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            letterCount++;
        }
    }

    console.log(letterCount);
}

function Q159(str1, str2) {
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");

    let istrue = true;

    for (let i = 0; i < str1Arr.length; i++) {
        if (!(str2Arr.includes(str1Arr[i]))) {
            istrue = false;
            break
        }
    }
    console.log(istrue);
}

function Q160(str) {

    // M1

    // let arr = str.toLowerCase().split("").sort();
    // let ascii = 97;
    // for (let i = 0; i < arr.length; i++) {
    //     let check = arr[i].charCodeAt();
    //     if (ascii == check) {
    //         ascii++;
    //     }
    // }
    // console.log(ascii >= 123);

    // M2

    let checkStr = "qwertyuiopasdfghjklzxcvbnm";
    str = str.toLowerCase();
    for (let i = 0; i < checkStr.length; i++) {
        if (!(str.includes(checkStr[i]))) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

function Q161(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }

    console.log(positive, negative, zero);

}

function Q162(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3);
    }

    console.log(newArr);
}

function Q163(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(Math.abs(arr[i]));
    }

    console.log(newArr);
}

function Q164(arr) {

    isEven = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            isEven = false;
            break;
        }
    }

    console.log(isEven);

}

function Q165(arr) {

    isEven = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            isEven = true;
            break;
        }
    }

    console.log(isEven);

}

function Q166(arr) {

    isPosetive = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            isPosetive = false;
            break;
        }
    }

    console.log(isPosetive);

}

function Q167(arr) {

    let constant = 4;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > constant) {
            console.log(arr[i]);
        }
    }
}

function Q168(arr) {

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }

    console.log(arr.indexOf(max));
}
function Q169(arr) {

    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }

    console.log(arr.indexOf(min));
}

function Q170(arr) {

    // M1

    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            console.log(true)
            return;
        }
        console.log(false);
    }
    console.log(result);

    // M2

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            console.log(true);
            return;
        }
        else {
            obj[arr[i]] = 1;
        }
    }

    console.log(false);
}

function Q171(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let have = true;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j]) {
                have = false;
            }
        }
        if (have) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

function Q172(arr) {
    let sortedArr = arr.sort((a, b) => a - b)

    let isdone = true;

    for (let i = 0; i < sortedArr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            isdone = false;
            break;
        }
    }

    console.log(isdone);
}

function Q173(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        }
        else {
            result.push(arr[i]);
        }
    }

    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++
        }
        console.log(arr)

        console.log(result);
    }
}
function Q174(arr) {
    let max = arr[0];
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(max - min);
}

function Q175(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

function Q176(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

function Q177(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            count++;
        }
    }
    console.log(count);
}

function Q178(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0]);
    }
}

function Q179(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            result.push(arr[i]);
        }
    }

    console.log(result);
}

function Q180(arr) {

    // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 == 0) {
    //         sum += arr[i];
    //     }
    // }
    // console.log(sum);

    let result = arr.reduce((sum, num) => {
        if (num % 2 == 0) {
            return sum + num
        }
        else {
            return sum
        }
    }, 0)

    console.log(result);
}

function Q181(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    console.log(sum);

    let result = arr.reduce((sum, num) => {
        if (num % 2 != 0) {
            return sum + num
        }
        else {
            return sum
        }
    }, 0)

    console.log(result);
}

function Q182(arr, I, J) {

    let temp = arr[I];
    arr[I] = arr[J];
    arr[J] = temp;
    console.log(arr);

}

function Q183(arr, k) {

    // for (let i = 0; i < k; i++) {
    //     let index = arr.pop();
    //     arr.unshift(index);
    // }

    let res = [];
    let n = arr.length;
    if (k > n) {
        k = k % n
    }
    for (let i = arr.length - k; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for (let i = 0; i < arr.length - k; i++) {
        res.push(arr[i]);
    }
    console.log(res);


    // console.log(arr);
}

function Q184(arr, k) {

    for (let i = 0; i < k; i++) {
        let index = arr.shift();
        arr.push(index);
    }

    console.log(arr);
}

function Q185(arr1, arr2) {

    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    console.log(result);
}

function Q186(arr) {

    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }

    console.log(arr);
}

function Q187(arr) {

    for (let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        let index = 0;

        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                index = j;
            }
        }
        [arr[index], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[index]];
    }
    console.log(arr);
}

function Q188(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    console.log(arr);
}

function Q189(arr, k) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

    }

    console.log(arr[k - 1]);
}

function Q190(arr, k) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

    }

    console.log(arr[arr.length - k]);
}

function Q191(arr, target) {

    let high = arr.length - 1;
    let low = 0

    while (high >= low) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] > target) {
            high = mid - 1;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            console.log(mid);
            return;
        }
    }
    console.log(-1);
}

function Q192(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let right = null;
    let left = null;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            right = mid;
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    low = 0;
    high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            left = mid;
            low = mid + 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (left === -1) console.log(0);
    console.log(left - right + 1);
}

function Q193(arr, target) {

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                count++;
                console.log(`(${arr[i]}, ${arr[j]})`);
            }
        }
    }
}

function Q194(arr, target) {

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == target) {
                    console.log(`(${arr[i]}, ${arr[j]}, ${arr[k]})`);
                }
            }
        }
    }
}

function Q194(arr, target) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    console.log(`(${arr[i]}, ${arr[j]}, ${arr[k]})`);
                }
            }
        }
    }
}

function Q195(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (max < sum) {
                max = sum
            }
        }
    }
    console.log(max);
}

function Q196(arr) {
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;

        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    console.log(maxSum);
}

function Q197(str) {
    for (let i = 0; i < str.length; i++) {
        let present = false;
        for (let j = 0; j < str.length; j++) {
            if (i == j) {
                continue;
            }
            else if (str[i] == str[j]) {
                present = true;
                break;
            }
        }
        if (!present) {
            console.log(str[i]);
            return;
        }
    }
    console.log("Every element is repeating")
}

function Q198(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i == j) {
                continue;
            }
            else if (str[i] == str[j]) {
                console.log(str[i]);
                return;
            }
        }
    }
    console.log("Every element is unique")
}

function Q199(str) {
    if (str.length === 0) return "";

    let result = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += str[i];
        }
    }

    console.log(result);
}

function Q200(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            res.push(arr[i]);
        }
    }
    console.log(res);
}

// Q151("JavaScript is fun");
// Q152("the cat and the dog");
// Q153("the cat and the dog");
// Q154("1235");
// Q155("dfegfef");
// Q156("abc");
// Q157("6+8abc");
// Q158('short and tiny');
// Q159("listen", "silent");
// Q160("The quick brown fox jumps over a lazy dog");
// Q161([1, -2, 0, 5, -3]);
// Q162([1, -2, 0, 5, -3]);
// Q163([1, -2, 0, 5, -3]);
// Q164([4, 1, 9]);
// Q165([4, 1, 9]);
// Q166([-9, 1, 9]);
// Q167([-9, 1, 9]);
// Q169([-9, 1, 9]);
// Q170([1, 2, 3, 1]);
// Q171([1, 2, 3, 1]);
// Q172([1, 2, 3, 8]);
// Q173([1, -2, 3, -4, 0]);
// Q174([1, -2, 3, -4, 0]);
// Q177(["hi", "hello", "hey", "Java"]);
// Q178(["hi", "hello", "hey", "Java"]);
// Q179(["a", "", "b", "", "c"]);
// Q180([1, 2, 3, 4, 5]);
// Q181([1, 2, 3, 4, 5]);
// Q182([1, 2, 3, 4, 5], 1, 3);
// Q183([1, 2, 3, 4, 5], 1);
// Q184([1, 2, 3, 4, 5], 1);
// Q185([1, 3, 5], [2, 4, 6]);
// Q186([3, 5, 1]);
// Q187([1, 3, 5, 2]);
// Q188([1, 3, 5, 2]);
// Q189([7, 10, 4, 3, 20, 15], 2);
// Q190([7, 10, 4, 3, 20, 15], 2);
// Q191([1, 3, 5, 7, 9], 5);
// Q191([1, 2, 2, 2, 3], 2);
// Q192([1, 2, 2, 2, 3], 2);
// Q193([1, 2, 3, 4], 5);
// Q194([1, 2, 3, 4, 5], 9);
// Q194([0, -1, 2, -3, 1], 1);
// Q195([1, -2, 3, 4, -1]);
// Q196([1, -2, 3, 4, -1]);
// Q197("swiss");
// Q198("swiss");
// Q199("aaabbcddd");
// Q200([1, 1, 1, 2, 3, 3, 3]);