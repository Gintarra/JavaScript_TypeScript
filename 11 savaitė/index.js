"use strict";
let userName = "Andrius";
let userName2 = "Gintare";
let userName3 = "Jonas";
let mkskdf = "n";
// create 4 variables with different types
// check if variable with number type is more than 100
// if yes change the number to 200
let num = 34;
let word = "Hello";
let arr = [2, 4, 5];
let check = true;
if (num > 100) {
    console.log("Yes");
}
else {
    console.log("No");
}
// create array with string values
// go through array and append string values lengths to newly created array with numbers
let arr2 = ["hi", 'me', 'today', 'snow', 'wintertime'];
let arrNum = [];
arr2.map(x => arrNum.push(x.length));
console.log(arrNum);
console.log(arr2);
// create union variable to be number \ string
// make its value to be your name
// in second line change that variable value to length of prevous value
let newVar = "Gintare";
console.log(newVar);
newVar = newVar.length;
console.log(newVar);
const person = {
    name: "Gintare",
    age: 28,
    city: "Kaunas",
    mobile: "+3706277777",
    interests: ['books', 'netflix', 'running', 'cooking'],
    height: 165
};
console.log(person);
// create variable with array of numbers, add 5 numbers to it
const numberArr = [1, 3, 5, 7, 9];
// check if you object with user age is more than 18
if (person.age > 18) {
    console.log("More than 18: ", person.age);
    // person.age = numberArr[1]; negalima, nes age yra readonly - neperrasomas
}
else {
    console.log("Less than 18: ", person.age);
}
// if yes get second number form array with numbers and set it as user age
// create 3 variables with string types, make values to be various hobbies
const hobby1 = 'reading';
const hobby2 = 'swimming';
const hobby3 = 'hiking';
// push newly created variables values to user object interests array
// change user height to 180
person.interests.push(hobby1);
person.interests.push(hobby2);
person.interests.push(hobby3);
person.height = 180;
console.log(person, "New person");
const car = {
    carModel: "Audi",
    carYear: 2021,
    gasolineConsumption: 9,
    isDiesel: false
};
console.log(car);
function carToString(car) {
    if (car.isDiesel) {
        return car.carModel + car.carYear;
    }
    else {
        return `${car.gasolineConsumption} ${car.isDiesel}`;
    }
}
console.log(carToString(car));
