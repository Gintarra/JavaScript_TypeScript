console.log("veikia");

let text = "BDHR L SHA BRA";

let word = text[5]+text[9]+text[0]+text[9]+text[7];

console.log(word);

let num1 = 15;
let num2 = 3;
let num3 = 13;

let rez = (num1 - num2) * num3;

console.log(rez);

let text1 = "first str";
let text2 = "second str";
let sumOfLengths = text1.length + text2.length;

console.log(sumOfLengths);


//substract second from first, divide by third, multiply by fourth
const first = 100;
const second = 30;
const third = 2;
const fourth = 5;



const result= (first-second) / third * fourth;

console.log(result);

// Declare a variable with value 99
let myNum = 99;
// do something with myNum so it value would be 33 and log it
// do something with myNum so it value would be 30 and log it
// do something with myNum so it value would be "52 kortos yra kaladej"

console.log(myNum/3);
console.log(myNum/3-3);
console.log(myNum-47 + " kortos yra kaladej");

// make result value to be "A1B2G3"

const str = "ABC DEF GH";
const num11 = 1;
const num22 = 2;
const num33 = 3;

let resultValue = str[0] + num11 + str[1] + num22 + str[8] + num33;

console.log(resultValue);

//make result value to be "trains are cool, so i like trains"
const quote1 = "trains are cool";
const quote2 = "i like trains";

let result2 = quote1 + ", so " + quote2;

console.log(result2);

//make result to be "B is the second letter of alphabet"
const firstOrSecond = ['first', 'second'];
const valueOne = "A is the";
const valueTwo = "letter of alphabet";

let result3 = valueOne.replace("A", "B") + " " + firstOrSecond[1] + " " + valueTwo;

console.log(result3);

//make result to be "this string length is ___"
const string4 = "this string length is";
let result4 = string4 + " " + string4.length;

console.log(result4);

//get last object of array, and divide it by 2
const arr5 = [5, 12, 18, 30, 40]
let result5 = arr5[arr5.length-1] / 2;

console.log(result5);

//change value of 'pienas' to 'jogurtas
const shoppingList = ['duona', 'ledai', 'maisto katinui', 'bananai', 'gyvenimo prasme', 'pienas', 'sokoladas'];
shoppingList.splice(5,1, 'jogurtas');
console.log (shoppingList);

//arba paprastesnis sprendimas (tik keiciu pvz sokolada i jogurta)
shoppingList[6] = 'jogurtas';
console.log(shoppingList);

// make result to be "ohh baby its cold outside"
const randomWords = [0, 20, "ohh", [78, "baby"], ['its cold', 11, 22], 'outside']
let result6= randomWords[2] + " "  + randomWords[3][1] + " "  + randomWords[4][0] + " "  + randomWords[5];

console.log(result6);

// create variables, you name, you age, city you live in
// append those variables to "Hello, my name is ___ i am already ___ years old and i do live in ___"

const age1 = 27;
const name1 = "Gintare";
const city1 = "Kaunas";

console.log(`Hello, my name is ${name1} i am already ${age1} years old and i do live in ${city1}`);

// replace streetName to be "Kestucio"
// create new variable to be "Kestucio 52-4" using back ticks and numbers from array
// create new variable to have last symbol of before created variable multiplied by fourth number from numbers array
let numbers = [1, 5, 2, 52, 88, 4];
let streetName = "Kestučio gatve";
streetName = "Kestucio";

let street1 = streetName +" "+ numbers[3] +"-" + numbers[numbers.length-1];
//su back ticks - `` sitos kabutes ir tada galima pliusu nedet, tik reikia dolerio zenklu, riestiniu
//ir butinai tu kabuciu
let street2 = `${streetName} ${numbers[3]}-${numbers[numbers.length-1]}`;

console.log(street1);
console.log(street2);

console.log(street2[street2.length-1] * numbers[3]);

// create new variable and make it value to be "Ai20" using elements from array and back ticks
// and add last element from array multiplied by first array element

const arr = [10, "pienas", "ABC", 20, 44];

const newVar= `${arr[2][0]}${arr[1][1]}${arr[3]}`;
console.log(newVar);

const newVar2 = arr[arr.length-1] * arr[0];
const newVar1 = `${newVar} ${newVar2}`;

console.log(newVar1);
//kitas budas, be tarpinio kintamojo ir skaiciai nepaverciami string
console.log(`${newVar}` + arr[arr.length-1] * arr[0]);

//remove last element from array, add it to result string, console log both of them

const arr7 = ['zuvis', 'zvejyba', 'ezeras', 'meduolis'];
let result7 = "Mmmmm koks velniskai skanus ";

let last = arr7.pop();
result7 = result7 + last;

console.log(result7);

//return right type of values to their arrays

const arrayWithNumbers = [1, 5, 9, 6, 'sun']
const arrayWithString = [5, 'grass', 'nature']

const lastS = arrayWithNumbers.pop();
const firstN = arrayWithString.shift();

console.log( arrayWithNumbers+ "," +firstN );
console.log(lastS + ","+ arrayWithString );

//kitas budas - pridedam i gala, nes sutrumpejo po viena abi eilutes (nesvrabu, kad vienoj paemem is priekio)

arrayWithString[2] = lastS;
arrayWithNumbers[4] = firstN;

console.log (arrayWithNumbers, arrayWithString);

// .push() - prideti i gala array elementa, prides i gala, nesvarbu koks ilgis
// .unshift() - prideda priekyje - priesingas .push()

//////////////////////////////////////////////
//add 3 new products to shopping list array
const shoppingList1 = ['tomatoe', 'milk'];
let list1 = "pasta";
let list2 = "cake";
let list3 = "apple";

shoppingList1.push(list1, list2, list3);

console.log(shoppingList1);


/////////////////////////////////////////////////////////////////////////
//remove first and last values from array1 and add them to empty array
let array100 = ['first value', 2, 6, 4, 7, 'second value' ];
let emptyArray = []

let last100 = array100.pop();
let first100 = array100.shift();

emptyArray.push(first100, last100);

console.log(emptyArray);


////////////////////////////////////////////////////////////////////////
//add arrayTwo to begining of arrayOne, console log value from arrayTwo
let arrayOne = [5, 8, "anything", [5, 88]];
let arrayTwo = [879, 'get this string'];

arrayOne.unshift(arrayTwo);

console.log(arrayOne);

//kokia reiksme - true ar false su boolean operatoriumi
console.log((2 === 2));  //true
console.log(2 == "2");  //true
console.log((2 !== 2));  //false
console.log((5 < 5)); //false
console.log((5 >= 4)); //true
console.log(true); //true
console.log((9 - 5 === 4)); //true
console.log((5 * 5 !== "25")); //true
console.log(true); // true
console.log(!!(2 === 5 && true)); //false
console.log(!!(6 * 6 === 36 && 15 - 9 == "6")); //true
console.log(!!(false || false)); //false
console.log(!!(10 === 10 || 5 == 2));  //true
console.log(!!(2 * 2 / 2 == "1" || 5 * 5 === 25));  //true
console.log(!!(14 * 2 !== "28" || "Jonas" == "Jonas")); //true
console.log(!!(10 && 15 > 10)); //true
console.log(!!("Petras" && 0)); // false
console.log(!!(("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13))); //true
console.log(("jonas" === "Jonas")); //false
console.log(("Petras" + 5 === "Petras" + "5")); //true
console.log(("Jonas" + 5 + 5 === "Jonas10")); //false
console.log((5 + 10 + "Antanas" === "15Antanas")); //true
console.log((2 + 1 + "Jonas" + 3 + 2 === "3Jonas5")); //false
console.log((10 % 1 === 1)); //false
console.log((5 * "5" === 25)); //true