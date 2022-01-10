

function name() {
    console.log("Gintare")
}

function age() {
    console.log(27)
}

function city() {
    console.log("Kaunas")
}

name()
age()
city()

function sayName(personName, personAge, personCity) {
    console.log(personName, personAge, personCity)
}

sayName("Migle", 27, "Kaunas")
sayName("Beata", 26, "Kaunas")
sayName("Asta", 27, "Kaunas")

function long(string){
    const letKnow = string.length/3;
    console.log(letKnow);
}

long('Pypkee')

const arr = [];

function addToArr(arg) {
    arr.push(arg)
}

addToArr(100);

console.log(arr)


/////////////////////// FUNCTIONS ///////////////////////////////////////////
// Create a function that takes two numbers as arguments and return their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function sum(x, y){
    const z = x+y;
    console.log(z)
}

sum(3,2);
sum(-3,-6);
sum(7,3);
////////////////////////////////////////////////////////
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2

function increaseOne (x1) {
    console.log(x1+=1);
}

increaseOne(0);
increaseOne(9);
increaseOne(-3);


////////////////////////////////////////////////////////
// Create a function that takes an array and returns the first element.
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function  getFirstValue(array) {
    console.log(array[0]);
}
getFirstValue([1, 2, 3])
getFirstValue([80, 5, 100])
getFirstValue([-500, 0, 50])


/////////////////////////////////////////////////////////
// Write a function that converts hours into seconds.
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400

function howManySeconds(h) {
    console.log(h*3600)
}

howManySeconds(2)
howManySeconds(10)
howManySeconds(24)

//Write a function that returns the string "something" joined with
// a space " " and the given argument a.
//giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//giveMeSomething("something") ➞ "something something"
function giveMeSomething(a){
    const a1 = `Something ${a}`;
    console.log(a1)
}
giveMeSomething("is better than nothing")
giveMeSomething("Bob Jane")
giveMeSomething("something")
// Create a function that takes a number as its only
// argument and returns true if it's less than or equal to zero,
// otherwise return false.
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true
function lessThanOrEqualToZero(b) {
    if(b <= 0){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}

//arba trumpiau - nes reiskinys iskart igauna true arba false reiksme
function lessThanOrEqualToZero1(b) {
        console.log(b <= 0)
}

lessThanOrEqualToZero(5)
lessThanOrEqualToZero(0)
lessThanOrEqualToZero(-2)

lessThanOrEqualToZero1(5)
lessThanOrEqualToZero1(0)
lessThanOrEqualToZero1(-2)
// Given two numbers, return true
// if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// lessThan100(83, 34) ➞ false
// lessThan100(3, 77) ➞ true
function lessThan100 (c1, c2) {
    if (c1 + c2 < 100){
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}
//arba trumpiau
//function lessThan100 (c1, c2) {
//         console.log(c1 + c2 < 100) }

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(3, 77);
// Create a function that returns true when num1 is equal to num2;
// otherwise return false.
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
function  isSameNum(d1, d2){
    if ( d1 === d2 ){
            console.log(`true`)
        } else {
            console.log(`false`)
        }
}

isSameNum(4, 8);
isSameNum(2, 2);
isSameNum(2, "2");
// Create a function that takes the number of wins,
// draws and losses and calculates the number of points a
// football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
// footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0
function footballPoints(e1, e2, e3) {
    const totalPoints = e1 * 3 + e2 * 1;
    console.log(totalPoints);
}

footballPoints(3, 4, 2);
footballPoints(5, 0, 2);
footballPoints(0, 0, 1);


//////////////////////////////////
// from inside the function change persons name age and add one interest
// variable "person" should stay outside the function
let person = {
    name: "Andy",
    surname: 'Dandy',
    interests: ['sports', 'pc']
}

function change(){
    person.name = "Andrius";
    person.age = 18;
    person.interests.push('books');
}
change();
console.log(person);
/////////////////////////////////////////////////
// pass information object to function tellFortune as argument,
// outputs your fortune to the console like so: "You will be a X in Y,
// and married to Z with N kids."
let information = {
    jobTitle: "taxi driver",
    location: "London",
    marriedTo: "John",
    amountOfKids: '12'
}
function tellFortune(info) {
    console.log(`You will be a ${info.jobTitle} in ${info.location}, and married to ${info.marriedTo} with ${info.amountOfKids} kids.`)
}

tellFortune(information);

///////////////////////////////////////////////////
let data = ['data1', 'data2', 'data3', 'data4']
// create a function which takes data as an argument, checks if data has more than 3 items
// in array, if yes multiply data array length by 8 and return the answer
function checkData(i) {
    if(i.length > 3){
        const result = i.length * 8;
        console.log(result);
    } else {
        console.log('false');
    }
}

checkData(data);

///////////////////////////////////////////////////////////////////////
// create a function which checks if numbers (and types) are equal, return true or false
//console.log(isSameNum(2,2))
//console.log(isSameNum(8,21))
//console.log(isSameNum(9,"9"))

function isSameNum1(num1, num2) {
        return num1 === num2;
}

console.log(isSameNum1(2,2));
console.log(isSameNum1(8,21));
console.log(isSameNum1(9,"9"));

//////////////////////////////////////////////////////////
//Write a function that takes two integers (hours, minutes),
// converts them to seconds, and adds them.
function  convert(hours, min) {
    const sumOfSeconds = hours * 3600 + min * 60;
    return sumOfSeconds;
}
console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))
//////////////////////////////////////////////////////////////////////
// write function named calculateDogAge that:
// takes 1 argumentL you puppy's age.
// calculates your dog's age based on conversion rate of 1 human year to 7 dog years.
// outputs the result to console log like so "Your doggie is (AGE) years old in dog years"
// call the function three times with different sets of values - 3, 8, 12
function calculateDogAge(l){
    console.log(`Your doggie is ${l*7} years old in dog years`);
}
calculateDogAge(3);
calculateDogAge(8);
calculateDogAge(12);

///////////////////////////////////////////////////////////////////////////////
/*
In this challenge, a farmer is asking you
to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal
for each species. You have to implement a function that returns the total number
 of legs of all the animals.
Don't forget to return the result.
The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not the total number of animals.
*/
function animals(ch, cow, pigs){
    return ch*2 + cow * 4 + pigs * 4;
}

console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))

/////////////////////////////////
//Create a function that takes three arguments prob, prize, pay
// and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
    return (prob * prize > pay);
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));

/////////////////////////////////////
// Create a function that takes two strings as arguments and return either true or
// false depending on whether the total number of characters in the first
// string is equal to the total number of characters in the second string.
function comp(g,k){
    return (g.length===k.length);
}

console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))
////////////////////////////////////////////////////////////////////////////
//Create a function that returns true if a string is empty and false otherwise.
function isEmpty(empt){
    return (empt.length === 0)
}

console.log(isEmpty(""))
console.log(isEmpty("a"))
console.log(isEmpty(" "))
///////////////////////////////////////////////////////////////////////////////
/*
A bartender is writing a simple program to determine whether
he should serve drinks to someone. He only serves drinks
to people 18 and older and when he's not on break.
Given the person's age, and whether break time is in session,
create a function which returns whether he should serve drinks.
 */
// nes jei true - tai jis petraukoj, reikia, kad butu false ir daugiau arba lygu 18 metu
function  shouldServeDrinks(clientAge, br){
    return (clientAge>=18 && !br)
}

console.log(shouldServeDrinks(17, true))
console.log(shouldServeDrinks(19, false))
console.log(shouldServeDrinks(30, true))
//////////////////////////////////////////////////////////////////////////////////