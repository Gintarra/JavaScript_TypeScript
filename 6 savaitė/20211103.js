for (let i = 0; i < 10; i++) {
    console.log(i);
}

// create for loop with 30 cycles, on each iteration check if
// for loop index is more than 20 if yes, console log "cycle index is (CYCLE ID)"
for (let i = 0; i < 30; i++) {
    if (i > 20) {
        console.log("Cycle index is ", i)
    }
}
// go through array with for loop and flip booleans to opposite value
let arrayOfBooleans = [true, false, false, true, true, true, false];

for (let i = 0; i < arrayOfBooleans.length; i++) {
    arrayOfBooleans[i] = !arrayOfBooleans[i];
}

console.log(arrayOfBooleans);

// goe through array with for loop, if string is 'black mamba' console log
// "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"

let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth'];

for (let i = 0; i < getIndex.length; i++) {
    if (getIndex[i] === 'black mamba') {
        console.log(`${getIndex[i]} is ${i} in array, and is one of most poisonous snakes in the world`)
    }
}
/////////////////////////////////////////
// create a functions which accepts array data as an argument,
// loops over all items in array and console logs each of them
function arrayData(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']
arrayData(arrayOfStrings);
//////////////////////////////////////////////////////
// in function loop over numbers in array multiply each by 3
// console log answer
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function numbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 3);
    }
}

numbers(arrayOfNumbers);

// create function do this in it:
// with single for loop removes items from wagonsWIthCoal
// and append them to wagonsOfGasoline after this done
// check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// do the same with gasolineCargo key
// console log modified object
let freightTrain = {
    wagonsWithCoal: [1, 2, 3, 4, 5],
    coalCargo: true,
    wagonsOfGasoline: [],
    gasolineCargo: false
}

function train() {
    const l = freightTrain.wagonsWithCoal.length;
    for (let i = 0; i < l; i++) {
        let a = freightTrain.wagonsWithCoal.pop();
        freightTrain.wagonsOfGasoline.unshift(a);
    }
    if (freightTrain.wagonsWithCoal.length === 0) {
        freightTrain.coalCargo = !freightTrain.coalCargo;
    }
    if (freightTrain.wagonsOfGasoline.length !== 0) {
        freightTrain.gasolineCargo = !freightTrain.gasolineCargo;
    }
}

train();
console.log(freightTrain)


//////////////////////////////////////////////////
// crete a function which takes textObject.arrayWithWords as an argument
// goe through array with words using for loop
// take first letter of each word and add to aWord key in textObject
// console log aWord key after all is done
let textObject = {
    arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
    aWord: ''
}

function text(arg) {
    for (let i = 0; i < arg.length; i++) {
        textObject.aWord += arg[i][0];
    }
}

text(textObject.arrayWithWords);
console.log(textObject);

// Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one that ends in "s".
function isPlural(string) {
    if (string[string.length - 1] === 's') {
        console.log('It is plural');
    } else {
        console.log('It is not plural');
    }
}

isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");

/////////////////////////////////////////////////
// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(string) {
    return (string[string.length - 1] === 'n')
}

console.log(isLastCharacterN("Aiden"))
console.log(isLastCharacterN("Piet"))
console.log(isLastCharacterN("Bert"))
console.log(isLastCharacterN("Dean"))

//////////////////////////////////////////////
// A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.
function carsNeeded(arg) {
    const howMany = arg / 5;
    console.log(`You need ${Math.ceil(howMany)} car(s)`);
}

carsNeeded(5);
carsNeeded(11);
carsNeeded(0);
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes an array and a string as arguments and return the index of the string.
function findIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            console.log("Index of the string is", i);
        }
    }
}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh");
findIndex(["Red", "blue", "Blue", "Green"], "blue");
findIndex(["a", "g", "y", "d"], "d");
findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple");


////////////////////////////////////////
// Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
    const two = [...arr1, ...arr2]; // isima kas viduje yra, be tipo kintamojo, t.y. siuo atveju be []. vadinasi spled operatorius
    console.log(two);
}

// function concat(arr1, arr2) {
//     const arr3 = [];
//     let len = arr1.length;
//     let len2 = arr2.length;
//     for (let i = 0; i < len; i++) {
//         arr3.push(arr1.shift());
//     }
//     for (let j = 0; j < len2; j++) {
//         arr3.push(arr2.shift());
//     }
//     console.log(arr3);
// }


concat([1, 3, 5], [2, 6, 8])
concat([7, 8], [10, 9, 1, 1, 2])
concat([4, 5, 1], [3, 3, 3, 3, 3])

//////////////////////////////////////////////////
// Write a function to check if an array contains a particular number.
// function check(arr, num) {
//     let answer = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             answer = true;
//         }
//     }
//     return answer;
// }

function check(arr, num) {
   return arr.includes(num) ; // grazina true ar false, priklausomai randa ar ne num
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

///////////////////////////////////////////////
// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.

// paprasta, grazina paskutini indexa, jei yra tokie skaiciai keli eiluteje
// function search(arr, num) {
//     let index = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             index = i;
//
//         }
//     }
//     return index;
// }

//grazina kaip masyva (array) index reiksmes - vadinasi, jei sutinka skaiciu kelis kartus, tuomet ir grazina visus jo indeksus
// bet grazinama reiksme gauna indexa toki kaip skaiciaus, todel su filter funkcija isnaikinamos neuzpildytos reiksmes
// function search(arr, num) {
//     let index = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//                 index[i] = i;
//         }
//     }
//    let newIndex = index.filter((a) => a); // istrina tuscias reiksmes
//     if (newIndex.length === 0) {
//       return newIndex[0] = -1;
//    } else {
//         return newIndex;
//     }
// }

//grazina kaip masyva (array) index reiksmes - vadinasi, jei sutinka skaiciu kelis kartus, tuomet ir grazina visus jo indeksus
// grazinama reiksme gauna nauja indexa, kuris didinamas tik jei reiksme randama ir salyga tenkinama, taigi sukuriamas naujas masyvas tik su indeksu reiksmemis
function search(arr, num) {
    let index = [-1];
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index[n] = i;
            n++;
        }
    }
    return index;
}


console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));
console.log(search([1, 11, 5, 7, 11], 11));

/////////////////////////////////////////////////
// Create a function that returns true if a string contains any spaces.
function hasSpaces(string) {
    let space = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            space = true;
        }
    }
    console.log("Has space or not?", space);
}


hasSpaces("hello")
hasSpaces("hello, world")
hasSpaces(" ")
hasSpaces("")
hasSpaces(",./!@#")

///////////////////////////////////////////////////////
// Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
function hasSameBread(arr1, arr2) {
    if (arr1[0] === arr2[0] && arr1[length - 1] === arr2[length - 1] && arr1[0] === arr1[length - 1]) {
        console.log("Both sandwiches use the same type of bread")
    } else {
        console.log("Both sandwiches use the different type of bread")
    }
}


hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
)

hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
)


hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
)

//////////////////////////////////////////////////////
/*
Create a function that takes an object
as an argument and returns a string with facts about
the city. The city facts will need to be extracted
from the object's three properties:

name
population
continent

The string should have the following format:
X has a population of Y and is
situated in Z (where X is the city name,
Y is the population and Z is the continent the city is situated in).
 */

function cityFacts(object) {
    console.log(`${object.name} has a population of ${object.population} and is
situated in ${object.continent}`)
}


cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
})


cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
})
//////////////////////////////////////////////////////
//Creates a function that takes a string and returns the concatenated first and last character.
function firstLast(string) {
    console.log(string[0] + string[string.length - 1]);
}

firstLast("ganesh");
firstLast("kali");
firstLast("shiva");
firstLast("vishnu");
firstLast("durga");
