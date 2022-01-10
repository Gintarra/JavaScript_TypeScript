const redCar = {
    model: "audi",
    engineOn: false,
    wheels: 4,
    fuel: 40,
    speed: 0,
    broken: false,
    people: ['John', 'Lucy', 'Marta', 'Fat Joe']
}

// Get passengers count, log string "red (Cars Model) was standing by the road with (number) people inside"
console.log(`Red ${redCar.model} was standing by the road with ${redCar.people.length} people inside`);
// log "(First person from people array) started engine and began to ride", change engineOn value to opposite
console.log(`${redCar.people[0]} started engine and began to ride`);
redCar.engineOn = !redCar.engineOn;
// increase car speed by 60, decrease fuel by 3, log "at first car speed was (speed), they had (fuel) left"
redCar.speed += 60;
redCar.fuel -=3;
console.log(`At first car speed was ${redCar.speed}, they had ${redCar.fuel} fuel left`);
// increase car speed by 60, decrease fuel by 5, log "later car speed was (speed), they had (fuel) left"
redCar.speed += 60;
redCar.fuel -=5;
console.log(`Later car speed was ${redCar.speed}, they had ${redCar.fuel} fuel left`);
// check if car speed is more than 100 and passengers count is more than 3
// if yes subtract 1 from wheels and change broken to opposite value
if (redCar.speed > 100 && redCar.people.length > 3){
    redCar.wheels --;
    redCar.broken = !redCar.broken;
    // log "while driving at (speed) kmh, one wheel went off so car was forced to stop"
    console.log(`while driving at ${redCar.speed} kmh, one wheel went off so car was forced to stop`)
// change engineOn to opposite value
    redCar.engineOn = !redCar.engineOn;
// log "(first person name) got out to check the problem, and he saw only (wheels) was left"
    console.log(`${redCar.people[0]} got out to check the problem, and he saw only ${redCar.wheels} was left`)
// log "ohh no, said (any girl from people array), looks like car was loaded too much, so we lost one wheel"
    console.log(`ohh no, said ${redCar.people[2]}, looks like car was loaded too much, so we lost one wheel`)
// log "i have an idea, said (any girl from people array), we should take (last person in people array) out and leave him by the road"
    console.log(`I have an idea, said ${redCar.people[1]}, we should take ${redCar.people[redCar.people.length-1]} out and leave him by the road`)
// log "great idea! shouted (first person from people array)"
    console.log(`Great idea! shouted ${redCar.people[0]}`)
// remove last person from people array, make oneByTheRoad value to be removed persons name
    let oneByTheRoad;
    oneByTheRoad = redCar.people.pop();
// add one to wheels, change engineOn and broken values to opposite
    redCar.wheels += 1;
    redCar.engineOn = !redCar.engineOn;
    redCar.broken = !redCar.broken;
// log "few moments later car was hitting the road with (people count) passengers inside"
    console.log(`Few moments later car was hitting the road with ${redCar.people.length} passengers inside`)
// log "while (oneByTheRoad) was left glancing surly at red (car model) vanishing in horizon"
    console.log(`while ${oneByTheRoad} was left glancing surly at red ${redCar.model} vanishing in horizon`)
} else {
    ////// ELSE
// check if car speed is less than 100 if yes subtract 6 from fuel
    if (redCar.speed > 100 ){
        redCar.fuel -= 6;
        // log "car successfully reached home with (fuel) left and all (people count) people"
        console.log(`Car successfully reached home with ${redCar.fuel} fuel left and all ${redCar.people.length} people`)
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ANTRA UZDUOTIS
let warehouseOfTypes = {
    items: ['wheel', 'bag', 'ball', {noteOne: 'buy some stuff', noteTwo: 'buy some more stuff'}],
    itemsInWarehouseCount: 0,
    rentPrice: 0,
    warehouseSize: 50,
    budget: 20,
    bankrupt: false
}
// create new key in warehouse object name 'notes', remove last object from items array and make it to be value of 'notes'

//warehouseOfTypes.notes = warehouseOfTypes.items.pop(); galima ir taip iskart
warehouseOfTypes.items.pop();
warehouseOfTypes.items.notes = {};
// add 3 more random items to items array
warehouseOfTypes.items.push('shoe', 'bat', 'mirror');

// make itemsInWarehouseCount to be total length of items in warehouse
warehouseOfTypes.itemsInWarehouseCount = warehouseOfTypes.items.length;
// check if there is more than 5 items in warehouse if yes increase warehouse size by 30
if (warehouseOfTypes.items.length > 5){
    warehouseOfTypes.warehouseSize += 30;
}

// check if warehouse size is more than 60 if yes set rentPrice, rent price is 2.5 per warehouseSize unit, count total price
if (warehouseOfTypes.warehouseSize > 60){
     warehouseOfTypes.rentPrice = 2.5 * warehouseOfTypes.warehouseSize;
}


// check if budget enough to pay the rent, if not, create new key in object warehouseOfTypes named "moneyFromSoldItems" with value 0
if (warehouseOfTypes.budget >= warehouseOfTypes.rentPrice) {
} else {
    warehouseOfTypes.moneyFromSoldItems = 0;
}

// add new key to note "noteThree" which holds string value "Sell some items"
warehouseOfTypes.items.notes.noteThree = "Sell some items";

// check if noteThree value is "Sell some items", if yes sell two last items for 30units each, make moneyFromSoldItems value to be selling expresion
if (warehouseOfTypes.items.notes.noteThree === "Sell some items") {
  warehouseOfTypes.moneyFromSoldItems = 2* 30;
  warehouseOfTypes.items.pop();
  warehouseOfTypes.items.pop();
}

// check if you budget is bigger than rent price if not change bankrupt value according to it

//ar taip galima rasyti vietoj if, pakeis bankrupt reiksme, tik nieko nekonsolins
//warehouseOfTypes.bankrupt = warehouseOfTypes.budget >= warehouseOfTypes.rentPrice;

if (warehouseOfTypes.budget >= warehouseOfTypes.rentPrice) {
    console.log("YEAH!")
    warehouseOfTypes.bankrupt = false;
} else {
    warehouseOfTypes.bankrupt = true;
    console.log("Ohh no, bankrupt...")
}

console.log(warehouseOfTypes);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRECIA UZDUOTIS
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }]
// check if all readingStatus is true
// if yes sum up all titles and console log them
// if no check each of object in array readingStatus separately
// for those which are positive log their authors name and surname first letters
if (library[0].readingStatus === true && library[1].readingStatus === true && library[2].readingStatus === true) {
    console.log(library[0].title, library[1].title, library[2].title)
} else {
    if(library[0].readingStatus){
        console.log("First reading status - true");
        console.log(library[0].author[0], library[0].author[5]);
    }
    if(library[1].readingStatus){
        console.log("Second reading status - true");
        console.log(library[1].author[0], library[1].author[6]);
    }
    if(library[2].readingStatus){
        console.log("Third reading status - true");
        console.log(library[2].author[0], library[2].author[8]);
    }
}

// also add new key "titleLength", which represents that object title length
library[0].titleLenght= library[0].title.length;
library[1].titleLenght= library[1].title.length;
library[2].titleLenght= library[2].title.length;
// check if first object in array has longer title then last object in array
// if no push one more object to library array with you favorite author, title, and reading status
if (library[0].titleLenght > library[2].titleLenght){

} else {
library.push ({ author: 'J.K. Rowling',
    title: 'Harry Potter',
    readingStatus: false,})
}

// remove first item from library array, put it to new variable "book"
// iskart ismetam ir pakeiciam kitu;
const book = library.shift();

// add new key to variable book "bookIsNew" set it to true
book.bookIsNew = true;

console.log(library)

// check if book.booIsNew and library.length is more than 2
// if yes add book variable value to the end of library array
if (book.bookIsNew && library.length > 2){
   console.log("yes")
    library.push(book);
} else {
   console.log("Nooo");
}

/////////////////////////////////////////////////////////////////////
/// Petro uzd
document.getElementById("name").textContent = "Gintare";
document.getElementsByClassName("sarasas")[2].textContent="Suris";

document.querySelector("p.bluetext span").textContent="blue";

let vw = document.querySelector("ol li");

alert(vw)