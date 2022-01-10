// write a function which takes obj.numbers as an argument, gets third number in numbers array with for loop
// rounds it to Ceil and puts to obj.roundedCeil, rounds it to floor and puts to obj.roundedFloor

let obj = {
    numbers: [1.1, 5.3, 6.68, 3, 2.5, 10.1],
    roundedCeil: null,
    roundedFloor: null
}
//su for loop, nors kam cia jo reik - pagal salyga tipo reikia
// function numberRound(num) {
//     for (let i = 0; i < num.length; i++) {
//         if(i === 2){
//             obj.roundedCeil = Math.ceil(num[i]);
//             obj.roundedFloor = Math.floor(num[i]);
//         }
//     }
// }

function numberRound(num) {
    obj.roundedCeil = Math.ceil(num[2]);
    obj.roundedFloor = Math.floor(num[2]);
}

numberRound(obj.numbers);

console.log(obj);
///////////////////////////////////////////
// check if stringVariable includes word 'doing' if yes create a function
// which takes stringVariable as an argument and counts how many spaces it has
// call that function
let stringVariable = "Hello people, how are you doing ?"

if (stringVariable.includes('doing')) { // patikrinu pagal salyga, jei nera doing, tada ir funkcija neprasides
    function spaces(str) {
        let n = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                n++;
            }
        }
        return console.log(n);
    }
}
spaces(stringVariable);
///////////////////////////////////////////
// create a function which goes through array rounds all numbers to Ceil and returns array
// with rounded numbers
let arrayOfNumbers = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6];

function roundedAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(arr[i]);
    }
    return arr;
}

roundedAll(arrayOfNumbers);

console.log(arrayOfNumbers);
//////////////////////////////////////////////
// create function which takes objectWithKeys as argument ant check which key includes
// word 'actually' in array, make function to return string "{key name} has actually in array"

let objectWithKeys = {
    firstOne: ['hi', 'what', 'is', 'good'],
    second: ['im', 'doing', 'pretty', 'well'],
    third: ['me', 'too', 'me', 'too', 'actually']
}

//automatiskai suranda
function includes(obj) {
    //   const keys = Object.keys(obj); galima  Object.keys(obj) pakeisti kitu kintamuoju, kad nebutu toks ilgas pavadinimas
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (obj[Object.keys(obj)[i]].includes('actually')) {
            console.log(`${Object.keys(obj)[i]} has actually in array`)
        }
    }
}


//su atskirais if budas (neuniversalus)
// function includes(obj){
//     if (obj.firstOne.includes('actually')) {
//         console.log(`${Object.keys(obj)[0]} has actually in array`)
//     }
//     if (obj.second.includes('actually')) {
//         console.log(`${Object.keys(obj)[1]} has actually in array`)
//     }
//     if (obj.third.includes('actually')) {
//         console.log(`${Object.keys(obj)[2]} has actually in array`)
//     }
// }

includes(objectWithKeys)

///////////////////////////////////////////////
/*
Write a function that stutters a word as if someone is
struggling to read it. The first two letters are
repeated twice with an ellipsis ...
and space after each, and then the word is pronounced with a question mark ?.
 */
//stutter("incredible") ➞ "in... in... incredible?"
//stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//stutter("outstanding") ➞ "ou... ou... outstanding?"

function stutter(str) {
    console.log(`${str[0]}${str[1]}... ${str[0]}${str[1]}... ${str}?`);
}

stutter("incredible");
stutter("enthusiastic");
stutter("outstanding");
///////////////////////////////////////////////////////////
// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.
/*
Person               Relation
Darth Vader    father
Leia            sister
Han            brother in law
R2D2            droid
 */

function relationToLuke(name) {
    if (name === "Darth Vader") {
        console.log("Luke, I am your father.")
    }
    if (name === "Leia") {
        console.log("Luke, I am your sister.")
    }
    if (name === "Han") {
        console.log("Luke, I am your brother in law.")
    }
    if (name === "R2D2") {
        console.log("Luke, I am your droid.")
    }
}


relationToLuke("Darth Vader")
relationToLuke("Leia")
relationToLuke("Han")

//duomenys objekte, nereikia if daug, universalesne programa
person = {
    name1: ['Darth Vader', 'father'],
    name2: ['Leia', 'sister'],
    name3: ['Han', 'brother in law'],
    name4: ['R2D2', 'droid']
}

function relationToLuke1(name) {
    const obj = Object.keys(person); // prilyginu viska obj, kad nereiktu sudetingai rasyti - cia susideda visi name1, name2....
    // juos pasiekti galima su indeksu gale, bet reikia dar ir obj priekyje pakartoti
    for (let i = 0; i < obj.length; i++) {
        if (person[obj[i]].includes(name)){
            console.log(`Luke, I am your ${person[obj[i]][1]}`);
        }
    }
}


relationToLuke1("Darth Vader")
relationToLuke1("Leia")
relationToLuke1("Han")

/////////////////////////////////////////////////////////////
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
//getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
//getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
function getMultipliedArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}



console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

// map eina per array kaip su for, tik jau tai funkcija, nereikia apsirasineti
function getMultipliedArr1(arr) {
  const newArr = arr.map(num => num * 2) // {} nebutina jei tik viena eilute
    return newArr;
}

console.log(getMultipliedArr1([2, 5, 3]));
console.log(getMultipliedArr1([1, 86, -5]));
console.log(getMultipliedArr1([5, 382, 0]));

///////////////////////////////////////////////////////////////
// Create a function that takes an array of words and transforms it into an array of each word's length.
//wordLengths(["hello", "world"]) ➞ [5, 5]
//wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
//wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
function wordLengths(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }
    return arr;
}


console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

//su map isloginti kiekvieno zodzio paskutine raide

function lastLetter(str){
   console.log(str.map(word => word[word.length-1])); // viduje map pasirenku kintamaji nauja, jis aprasys tai, kas viduje yra, kokiu noriu pavadinimu galiu rasyt
    str.map(word => console.log(word[word.length-1])); // sitaip islogins ne array, o tiesog po raide
}

lastLetter(["She", "sells", "seashells", "down", "by", "the", "seashore"]);

// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.
function longBurp(num){
    let string = 'Bu';
    for (let i = 0; i < num; i++) {
        string += 'r';
    }
    console.log(string+"p");
}
longBurp(3);
longBurp(5);
longBurp(9);
////////////////////////////////////////////////////////
// Create a function that takes a number and return an array
// of three numbers: half of the number, quarter of the number and an eighth of the number.
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
function halfQuarterEighth(num) {
    const arr = [];
        arr[0] = num/2;
        arr[1] = num/4;
        arr[2] = num/8;
        console.log(arr);
}

halfQuarterEighth(6);
halfQuarterEighth(22);
halfQuarterEighth(25);
////////////////////////////////////////////////////////
// For each of the 6 coffee cups I buy, I get a 7th cup free.
// In total, I get 7 cups. Create a function that takes n cups
// bought and return as an integer the total number of cups I would get.
// totalCups(6) ➞ 7
// totalCups(12) ➞ 14
// totalCups(213) ➞ 248

function totalCups(cups){
    let total = Math.floor(cups/6) + cups;
    console.log(total);
}
totalCups(6);
totalCups(12);
totalCups(213);
//////////////////////////////////////////////////////////
// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ")
       newStr += str[i] + " ";
    }
    console.log(newStr);
}


spaceMeOut("space");
spaceMeOut("far out");
spaceMeOut("elongated musk");

