console.log("hi");

const lyricsOne = "vejas man pasake vien tavo varda"
const lyricsTwo = "bet taves surasti as negaliu,"
const lyricsThree = "kai pilka kregzdute padangem nardo"
const lyricsFour = "jai labai pavydziu zydru keliu"



let lyricsTotalLength;
// Make lyricsTotalLength value to be length of all lyrics strings summed up
lyricsTotalLength = lyricsOne.length + lyricsTwo.length + lyricsThree.length + lyricsFour.length;

console.log(lyricsTotalLength);


let totalLengthInString;
// Make totalLengthInString value to be " (NUMBER) is total length of lyrics"

totalLengthInString = `${lyricsTotalLength} is total length of lyrics`;
console.log(totalLengthInString);

let lyricsStringAverageLength;
// make lyricsStringAverageLength value to be mathematical expression
// which counts average length of lyrics string

lyricsStringAverageLength = lyricsTotalLength/4;

console.log(lyricsStringAverageLength);

const firstLetters = [];
// Get first letter of each lyrics string, add it array, using .push() or .unshift()

firstLetters.unshift(lyricsOne[0], lyricsTwo[0], lyricsThree[0], lyricsFour[0]);

console.log(firstLetters);

const lastLetters = [];
// Get last letter of each lyrics string, add it array, using .push() or .unshift()

lastLetters.unshift(lyricsOne[lyricsOne.length-1], lyricsTwo[lyricsTwo.length-1], lyricsThree[lyricsThree.length-1], lyricsFour[lyricsFour.length-1]);

console.log(lastLetters);

const authorsNameHidden = [
    47,
    'saldytuvas',
    ['5877', [654, 'Danute'], 99, '', [88, 6547, 686, 'paprika', 1, [44, 'Neimontaite']]]
]
let authorsName;
// Get authors name from array, make authorsName value to be string with authors name and surname

authorsName = `${authorsNameHidden[2][1][1]} ${authorsNameHidden[2][4][5][1]}`;

console.log(authorsName);


const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7]
const ascendingOrder = [4]
// Using .push() and .unshift() put numbers from numbersRandom to ascendingOrder in ascending order
// numbersRandom array should not be updated or edited

ascendingOrder.unshift(numbersRandom[0], numbersRandom[4], numbersRandom[5], numbersRandom[6]);
ascendingOrder.push(numbersRandom[1], numbersRandom[2], numbersRandom[7], numbersRandom[3]);

console.log(ascendingOrder);



const coldThings = ['hot', 'hot', 'cold', 'cold', 'cold']
const hotThings = ['hot', 'hot']
// get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array


hotThings.push(coldThings.shift(),coldThings.shift());

console.log(hotThings);
console.log(coldThings);


const arrayVariable = [2, 0, "any", [687, 'any', true, ['Black Cat', 0, false]]]
let myCat;
// remove 'Black Cat' from arr, make myCat value to be "arrayVariable has (number) items inside, i have Black Cat"


myCat = `arrayVariable has ${arrayVariable.length} items inside, i have ${arrayVariable[3][3].shift()}` ;

console.log(myCat);


// create an object with these keys:
// name, surname, age, school, country > region > city, booksRed(array with books you red)


let person = {
    name: "Gintare",
    surname: "Raudziute",
    age: 27,
    school: "Luksiu V.Grybo gimnazija",
    country:  {
        region: {
            city: "Kaunas"
        },
    },
    booksRed: ["Klastingasis Pi", "Atominiai iprociai", "Visi meluoja, bet internetas zino, ka veikiame is tikruju"]
}

// log length of your name
console.log(person.name.length);

// log sum of you name and school
console.log(`${person.name} ${person.school}`);

// create variable and make its value to be you age and city added together
let cityAge = person.age +" " + person.country.region.city;
console.log(cityAge);

// create new variable and make it value to be first book from booksRed array

let firstBook = person.booksRed.shift();

console.log(firstBook);



// check if person name is Myke, if not console log "this person name is (TRUE NAME)"
// check if person lives in Amercija, if yes console log "(Name) lives in amerca and has (amount of kids)"
// check if amount of kids is more than 5, if no console log "we need (subtract hasKids from 5) kids to reach 5"
// check if person is married if yes log "(Name) is married lives in (livesIn) and has (hasKids) kids"

let person1 = {
    personName: "John",
    livesIn: "America",
    hasKids: 3,
    married: true,
}

if (person1.personName !== "Mike") {
    console.log(`This person name is ${person1.personName}`);
}

if (person1.livesIn === "Amercija") {
    console.log(`${person1.personName} lives in America and has ${person1.hasKids}`);
} else {
    console.log(`${person1.personName} lives in ${person1.livesIn} and has ${person1.hasKids}`);
}

if (person1.hasKids > 5) {
    console.log(`Yes, ${person1.personName} has more than 5 kids - he has ${person1.hasKids}`);
} else {
    console.log(`We need ${5-person1.hasKids} kids to reach 5`);
}

if (person1.married) {
    console.log(`Yes, ${person1.personName} is married lives in ${person1.livesIn} and has ${person1.hasKids} kids`);
} else {
    console.log(`No, ${person1.personName} is unmarried lives in ${person1.livesIn} and has ${person1.hasKids} kids`);
}


// check if counter is more than 74 * 8 if yes console.log length of firstLetters array
// console log first item from arrayItems in upperCase
// console log last item from arrayItems in lowerCase
// create a new key in data object to have Boolean type
// check if newly created key is true or false if true create one more key in data object with


let data = {
    arrayItems: ['Zodziai ivairus', "naujas sakinys", 'sakinys be 858 skaiciu'],
    firstLetters: [],
    counter: 254 * 3,
    newBool: true,
}

if(data.counter > 74*8) {
    console.log(`Yes, ${data.firstLetters.length}`)
}
else {
    console.log("no");
}

console.log(data.arrayItems[0].toUpperCase());
console.log(data.arrayItems[data.arrayItems.length-1].toLowerCase());

data.newBool = true;

if (data.newBool) {
    data.newOne = "true";
}

console.log(data);

///////////////////////////////////////////////////////
// make numbers array to have only numbers
// make words array to have only words
// move items using - .pop() .shift() - .push(arg) .unshift(arg)

let numbers = ['first', 1, 2, 3, 4, 'last'];
let words = ['word', 'any', 'word', 'world'];

words.push(numbers.pop(), numbers.shift());
console.log(numbers, words);

///////////////////////////////////////////////////////
// check if Jerry is having his birthday if yes do things:
// remove teddy bear from hasToys array
// add "ps4" to end of hasToys array
// increment yearsOld by one
// make totalToys key to always show length of hasToys array
// log each of Jerry friends
let data2 = {
    name: "Jerry",
    hasToys: ['teddy bear', 'ball', 'car', 'soldier'],
    yearsOld: 12,
    birthDay: true,
    totalToys: null,
    friends: {
        susana: "at grandparents",
        tommy: "on pc",
        brad: "playing football"
    }
}

if(data2.birthDay) {
    data2.hasToys.shift();
    data2.hasToys.push("ps4");
    data2.yearsOld++;
    data2.totalToys = data2.hasToys.length;
    console.log(Object.keys(data2.friends));
    console.dir(Object.keys(data2.friends));
} else {
    console.log("Birthday not found")
}

console.log(data2);
///////////////////////////////////////////////////////////
// Change Johns name to Jonas
// Change his age to 30
// check if john is younger than 100 if yes change his alive status to true
// check if john is alive, if yes, add on more interest 'enjoying life' to array

let person2 = {
    name2: "John",
    age2: 120,
    alive: false,
    interest: ['swimming', 'dancing']
}

person2.name2 = "Jonas";
person2.age2 = 30;

if(person2.age2 < 100) {
    person2.alive = true;
    if (person2.alive) {
        person2.interest.push('reading');
    }
}

//gali buti sitaip, iskart priskirs reiksme true arba false ir tiek
//person2.alive = person2.age2 < 100;

console.log(person2);

//Petro uzduotys 4 JS pamoka
//Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą ' +
//'(atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką ' +
//'dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).
const myNameGint = "Gintare";
const count = 10;

for (let i = 0; i < count; i++) {
    console.log(i, myNameGint);
}

for (let i = count; i > 0; i--){
    console.log(i)
}

for (let i = 0; i < count; i++){
    console.log(count-i)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
//While
//Su while ciklu pasirašykite, kad jūsų vardą alertintų 3 kartus.
//    Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus loopą į combo prisirašo jūsų vardas
//(t.y. combo += "Petras" viduje while loop). Sukurkite programą, kur bus kintamasis (const times = 5),
//kuris nurodys kiek kartų combo atsiras jūsų vardas. Jei skaičius 0 ar neigiamas - vis tiek bent vieną kartą atsiras jūsų vardas.
 //   Pvz:
//times = 0; combo = "Petras"
//times = 1; combo = "Petras"
//times = 2; combo = "PetrasPetras"
//times = 3; combo = "PetrasPetrasPetras"

let i = 0;

while (i < 3) {
    console.log("Gintare");
    i++;
}

let j = 0;
let combo = "";
const times = 5;

do {
    combo +="Gintare";
    j++;
    console.log(combo);
} while (times > j) {
}

//Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians). Hint, atsakymas: 1.
//Sukurk random skaičių tarp 1 ir 5 (įskaitant abu). Pasitikrink su console.log().
//    Sukurk random skaičių tarp 5 ir 12 (įskaitant abu). Pasitikrink su console.log().
//    Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne.
//   Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).
//Patobulink programą, kad atsirastų daugiau prizų (naudok switch statement vietoj if-else).
//    1/15 tikimybė laimėti automobilį
//    3/15 tikimybė laimėti televizorių
//    5/15 tikimybė laimėti 2 eurus
//    kitais atvejais - nieko nelaimi

console.log(Math.cos(0));

let random = Math.floor(Math.random()*5) + 1;
console.log(random);

let random1 = Math.floor(Math.random()*8) + 5;
console.log(random1);

// let win = Math.floor(Math.random()*5) + 1;
// if(win === 1) {
//     alert("Laimejai");
// }
// else { alert("Nelaimejai")}

let win2 = Math.floor(Math.random()*15) + 1;
switch (win2){
    default :
        console.log("Deja, bandyk dar karta!")
        break;
    case 1:
    console.log("Laimejai automobili!")
        break;
    case 2:
        console.log("Laimejai TV!")
        break;
    case 3:
        console.log("Laimejai TV!")
        break;
    case 9:
        console.log("Laimejai TV!")
        break;
    case 4:
        console.log("Laimejai 2 eurus!")
        break;
    case 5:
        console.log("Laimejai 2 eurus!")
        break;
    case 6:
        console.log("Laimejai 2 eurus!")
        break;
    case 7:
        console.log("Laimejai 2 eurus!")
        break;
    case 8:
        console.log("Laimejai 2 eurus!")
        break;
}



