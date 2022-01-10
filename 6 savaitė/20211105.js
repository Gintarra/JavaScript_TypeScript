// Create a function that takes an array and returns the sum of all numbers in the array.
// getSumOfItems([2, 7, 4]) ➞ 13
// getSumOfItems([45, 3, 0]) ➞ 48
// getSumOfItems([-2, 84, 23]) ➞ 105

function getSumOfItems(arr) {
    let sum = 0;
    arr.map(num => sum += num);
    console.log(sum);
}


getSumOfItems([2, 7, 4]);
getSumOfItems([45, 3, 0]);
getSumOfItems([-2, 84, 23]);
/////////////////////////////////////////////////////////
// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).
// isInRange(4, { min: 0, max: 5 }) ➞ true
// isInRange(4, { min: 4, max: 5 }) ➞ true
// isInRange(4, { min: 6, max: 10 }) ➞ false
// isInRange(5, { min: 5, max: 5 }) ➞ true

function isInRange(num, obj) {
    if (num >= obj.min && num <= obj.max) { // paimt su keys, ne su pavadinimais, nes jei pvz nezinau pavadinimu
        //    if (num >= Object.keys(obj[0]) && num <= Object.keys(obj[1])) { // paimt su keys, ne su pavadinimais, nes jei pvz nezinau pavadinimu
        console.log("True");
    } else {
        console.log("False");
    }

    //i viena eilute
    // console.log(if (num >= obj.min && num <= obj.max))
}

isInRange(4, {min: 0, max: 5});
isInRange(4, {min: 4, max: 5});
isInRange(4, {min: 6, max: 10});
isInRange(5, {min: 5, max: 5});


////////////////////////////////////////////////////////////
//Create a function that returns an array of booleans from a
// given number by iterating through the number one digit
// at a time and appending true into the array if the digit is 1 and false otherwise.
// integerBoolean("100101") ➞ [true, false, false, true, false, true]
// integerBoolean("10") ➞ [true, false]
// integerBoolean("001") ➞ [false, false, true]

function integerBoolean(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            arr.push(true)
            //arr[i] = true;
        } else {
            //arr[i] = false;
            arr.push(false)
        }
    }
    //i viena eilute
    // str[i] === "1" ? arr.push(true) :  arr.push(false); // po klaustuko - jei true - vienas veiksmas, jei false - antras veiksmas
    console.log(arr);
}

integerBoolean("100101");
integerBoolean("10");
integerBoolean("001");

/////////////////////////////////////////////////////////
// Create a function that returns the number of syllables in a
// simple string. The string is made up of short repeated words
// like "Lalalalalalala" (which would have 7 syllables).
// countSyllables("Hehehehehehe") ➞ 6
// countSyllables("bobobobobobobobo") ➞ 8
// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
    str = str.toLowerCase(); // kad butu visos vienodos, nesiskirtu didzioji/mazoji, nes pvz pirmam yra didzioji pirma
    const startEl = str[0] + str[1];
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] + str[i + 1] === startEl) {
            n++;
        }
    }
    console.log(n);
}

countSyllables("Hehehehehehe");
countSyllables("bobobobobobobobo");
countSyllables("NANANA");
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create a function which returns the length of a string, WITHOUT using String.length property.
// length("Hello World") //➞ 11
// length("Edabit") //➞ 6
// length("wash your hands!") //➞ 16
function length(str) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        n++;
    }
    console.log(n)
}

function length1(str) {
    let n = 0;
    let arr = [];
    arr = Array.from(str);
    arr.map(let => n++);
    console.log(n)
}

length("Hello World");
length("Edabit");
length("wash your hands!");

length1("Hello World");
length1("Edabit");
length1("wash your hands!");
//////////////////////////////////////////////////////////
// Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):
//"one"        1
//"two"        2
//"three"    3
//"four"    4
//"five"    5
//"six"        6
//"seven"    7
//"eight"    8
//"nine"    9
//"zero"    0
function word(str) {
    if (str === "one") {
        return 1;
    }
    if (str === "two") {
        return 2;
    }
    if (str === "three") {
        return 3;
    }
    if (str === "four") {
        return 4;
    }
    if (str === "five") {
        return 5;
    }
    if (str === "six") {
        return 6;
    }
    if (str === "seven") {
        return 7;
    }
    if (str === "eight") {
        return 8;
    }
    if (str === "nine") {
        return 9;
    }
    if (str === "zero") {
        return 0;
    }
}

console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));

// jei sudeciau viska i array ir nereiketu 9 if
numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function word2(str) {
    for (let i = 0; i < 10; i++) { // arba galima panaudot indexOf funkcija ir tiek, per viena eilute tada kodas bus
        if (str === numbers[i]) {
            console.log(i)
        }
    }
}

word2("one");
word2("seven");
word2("zero");


///////////////////////////////////////////////////////////
//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
function filterArray(arr) {
    let l = arr.length;
    let newArr = [];
    for (let i = 0; i < l; i++) {
        if (Number.isInteger(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}


filterArray([1, 2, 3, 4.4, "a", "b", 4]) //➞ [1, 2, 3, 4]
filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]
filterArray(["Nothing", "here"]) //➞ []

///////////////////////////////////////////////////////////
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += "-"
    }
    console.log(str);
}

Go(1) //➞ "-"
Go(5) //➞ "-----"
Go(3) //➞ "---"
//////////////////////////////////////////////////////////
// Create a function that adds a string ending to each member in an array.
function addEnding(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += str;
    }
    console.log(arr);
}

addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]
addEnding(["new", "pander", "scoop"], "er")
//➞ ["newer", "panderer", "scooper"]
addEnding(["bend", "sharpen", "mean"], "ing")
//➞ ["bending", "sharpening", "meaning"]

//su map
// const result = arr.map(word => word+str)
// console.log(result)

/////////////////////////////////////////////////////////
//Create a function to multiply all of the values in an array by the amount of values in the given array.
function multiplyByLength(arr) {
    const result = arr.map(num => num * arr.length);
    console.log(result);
}

multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]
multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞  [7, 0, 21, 21, 49, 14, 7]
multiplyByLength([0]) //➞ ([0])
/////////////////////////////////////////////////////////
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
function countdown(num) {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
}

countdown(5) //➞ [5, 4, 3, 2, 1, 0]
countdown(1) //➞ [1, 0]
countdown(0) //➞ [0]
///////////////////////////////////////////////////////
// Create a function that takes two arguments (item, times). The first argument (item) is the item
// that needs repeating while the second argument (times) is the number of times the item is
// to be repeated. Return the result in an array.
function repeat(item, times) {
    const arr = [];
    for (let i = 0; i < times; i++) {
        arr.push(item);
    }
    console.log(arr);
}

repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]
repeat(13, 5) //➞ [13, 13, 13, 13, 13]
repeat("7", 2) //➞ ["7", "7"]
repeat(0, 0) //➞ []
////////////////////////////////////////////////////
//In this exercise you will have to:
//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".
function greetPeople(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) { // pirma tarpa darau, kad nedarytu
            arr[i] = "Hello " + arr[i];
        } else {
            arr[i] = " Hello " + arr[i];
        }
    }
    str = arr.toString();
    console.log(str);
}


greetPeople(["Joe"]) //➞ "Hello Joe"
greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"

//su map

function greetPeople2(arr) {
    const result = arr.map(word => " Hello " + word);
    let str = "";
    str = result.toString();
    console.log(str);
}

greetPeople2(["Joe"]) //➞ "Hello Joe"
greetPeople2(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
greetPeople2(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"

///////////////////////////////////////////////////
// Create a function that repeats each character in a string n times.
function repeat2(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(n);
    }
    console.log(result);
}

repeat2("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
repeat2("hello", 3) //➞ "hhheeellllllooo"
repeat2("stop", 1) //➞ "stop"
////////////////////////////////////////////////
// Create a function that takes in two arrays: the array of user-typed words,
// and the array of correctly-typed words and outputs an array containing
// 1s (correctly-typed words) and -1s (incorrectly-typed words).
function correctStream(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result[i] = 1;
            //result.push(1);
        } else {
            result[i] = -1;
            //result.push(-1);
        }
    }
    console.log(result);
}

// galima ir su map padaryti sita uzd

correctStream(
    ["it", "is", "find"],
    ["it", "is", "fine"]
) //➞ [1, 1, -1]
correctStream(
    ["april", "showrs", "bring", "may", "flowers"],
    ["april", "showers", "bring", "may", "flowers"]
) //➞ [1, -1, 1, 1, 1]
///////////////////////////////////////////
// Create a function that filters out an array of state names into two categories based on the second parameter.
// Abbreviations: abb
// Full names: full
function filterStateNames(arr, par) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (par === "abb" && arr[i].length <= 2) {
            result.push(arr[i]);
        }
        if (par === "full" && arr[i].length > 2) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
//➞ ["CA", "NY"]
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
//➞ ["Arizona", "Nevada"]
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
//➞ ["MT", "NJ", "TX", "ID", "IL"]
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
//➞ []
//////////////////////////////////////////////////
// Hamming distance is the number of characters that differ between two strings.
//To illustrate:
//String1: "abcbba"
//String2: "abcbda"
//Hamming Distance: 1 - "b" vs. "d" is the only difference.
//Create a function that computes the hamming distance between two strings.
function hammingDistance(str1, str2) {
    let n = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            n++;
        }
    }
    console.log(n);
}

hammingDistance("abcde", "bcdef") //➞ 5
hammingDistance("abcde", "abcde") // ➞ 0
hammingDistance("strong", "strung") //➞ 1
////////////////////////////////////////////////////
//Given a string of letters, how many capital letters are there?
function capitalLetters(str) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            n++;
        }
    }
    console.log(n);
}

capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6
capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14
capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0
///////////////////////////////////////////////////////
// Create a function that will remove the letters "a", "b" and "c"
// from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    // let newStr = '';
    if (!str.includes('a') && !str.includes("b") && !str.includes("c")) {
        console.log("Null")
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'a' || str[i] === "b" || str[i] === "c") {
                str = str.split(str[i]).join("");
            }
        }
        console.log(str);
    }
}


removeABC("This might be a bit hard") //➞ "This might e  it hrd"
removeABC("hello world!") //➞ null
removeABC("") // ➞ null
/////////////////////////////////////////////////////
// Create a function that takes an array of strings and returns an array with
// only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
function numInStr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(".*\\d.*")) { // issiaiskint ka reiskia
            result.push(arr[i]);
        }
    }
    console.log(result);
}


numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) //➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) //➞ ["test1"]
/////////////////////////////////////////////////
// Create a function that finds each number in the given array that is
// greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.
function leader(arr) {
    let result = [];
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        n = 0;
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[i]) {
                n++;
            }
        }
        if (n === arr.length - 1 - i) {
            result.push(arr[i])
        }
    }
    console.log(result);
}


leader([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.
leader([2, 3, 20, 15, 8, 25, 3]) // ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.
leader([1, 2, 3, 4, 5]) //➞ [5]
// 5 is technically greater than the (zero) remaining items.
leader([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.

//su vienu ciklu

function leader2(arr) {
    let result = [];
    let max = 0;
    for (let i = arr.length; i > 0; i--) {
        if (max < arr[i]) {
            max = arr[i];
            result.unshift(arr[i])
        }
    }
    console.log(result);
}

leader2([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]
leader2([2, 3, 20, 15, 8, 25, 3]) // ➞ [25, 3]
leader2([1, 2, 3, 4, 5]) //➞ [5]
leader2([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]
