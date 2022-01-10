let userName: string = "Andrius";
let userName2: string = "Gintare";
let userName3: string = "Jonas";
let mkskdf: string = "n";

// create 4 variables with different types
// check if variable with number type is more than 100
// if yes change the number to 200
let num: number = 34;
let word: string = "Hello";
let arr: number[] = [2, 4, 5];
let check: boolean = true;

if (num > 100) {
    console.log("Yes")
} else {
    console.log("No")
}
// create array with string values
// go through array and append string values lengths to newly created array with numbers

let arr2: string[] = ["hi", 'me', 'today', 'snow', 'wintertime'];
let arrNum: number[] = [];
arr2.map(x => arrNum.push(x.length));
console.log(arrNum)
console.log(arr2)
// create union variable to be number \ string
// make its value to be your name
// in second line change that variable value to length of prevous value
let newVar: number | string = "Gintare";
console.log(newVar);
newVar = newVar.length;
console.log(newVar);

// create object with name, age, city, mobile, array of interests (strings), height, hair color
// make name and age to be read only
// make hair color to be optional
type UserType = {
    readonly name: string,
    readonly age: number,
    city: string,
    mobile: string,
    interests: string[],
    height: number,
    hairColor?: string
}

const person: UserType = {
     name: "Gintare",
     age: 28,
    city: "Kaunas",
    mobile: "+3706277777",
    interests: ['books', 'netflix', 'running', 'cooking'],
    height: 165
}
console.log(person);
// create variable with array of numbers, add 5 numbers to it
const numberArr: number[] = [1,3,5,7,9]
// check if you object with user age is more than 18
if(person.age > 18){
    console.log("More than 18: ", person.age)
   // person.age = numberArr[1]; negalima, nes age yra readonly - neperrasomas
} else {
    console.log("Less than 18: ", person.age)
}
// if yes get second number form array with numbers and set it as user age
// create 3 variables with string types, make values to be various hobbies
const hobby1: string = 'reading';
const hobby2: string = 'swimming';
const hobby3: string = 'hiking';
// push newly created variables values to user object interests array
// change user height to 180
person.interests.push(hobby1);
person.interests.push(hobby2);
person.interests.push(hobby3);

person.height = 180;

console.log(person, "New person")

// create interface for object with carModel, carYear, gasolineConsumption, isDiesel
// create object with random car info according to earlier created interface
// create function which takes car object as an argument and returns string as a value
// in function check if car isDiesel
// if yes return car model and carYear combined in string
// if no return car gasolineConsumption combined with isDiesel in string
type CarType = {
    carModel: string,
    carYear: number,
    gasolineConsumption: number,
    isDiesel: boolean
}

const car = {
    carModel: "Audi",
    carYear: 2021,
    gasolineConsumption: 9,
    isDiesel: false
}
console.log(car)

function carToString(car:CarType): string {
    if(car.isDiesel){
        return car.carModel + car.carYear;
    } else {
        return  `${car.gasolineConsumption} ${car.isDiesel}`;
    }
}



console.log(carToString(car))