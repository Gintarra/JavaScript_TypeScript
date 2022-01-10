const shop = document.getElementsByClassName("shop");
const inventory = document.getElementsByClassName("inventory");
const h1 = document.querySelector("h1");
let money = 200;
const btn = document.querySelector("#btn");
let index = [];
let newList = [];
h1.innerHTML = `Money: ${money}`

const icons = [
    "fas fa-trailer",
    "fas fa-taxi",
    "fas fa-shuttle-van",
    "fas fa-motorcycle",
    "fas fa-truck-pickup",
    "fas fa-truck-monster",
    "fas fa-truck",
    "fas fa-caravan",
    "fas fa-ambulance",
    "fas fa-bus",
    "fas fa-car"
]
let price = [];
let newPrice = [];

function print(box, icons) {
    for (let j = 0; j < icons.length; j++) {
        price[j] = Math.floor(Math.random() * 100) + 1;
        box.innerHTML += `<div id="fasIcon"> <i class="${icons[j]} fa-4x"></i><p>Price: ${price[j]}</p></div>`;
    }
}

print(shop[0], icons);

let iconList = document.querySelectorAll("#fasIcon");


// pasaudus ant ikonos issaugo jos index, mazina pinigus
function moneyIndex(iconList, price) {
    index = [];
    for (let i = 0; i < iconList.length; i++) {
        iconList[i].onclick = () => {
            if (money >= price[i]) {
                money -= price[i];
                index.push(i);
                iconList[i].classList.add("changeColor")
            } else {
                return alert("You don't have enough money");
            }
            h1.innerHTML = `Money: ${money}`
            //  iconList[i].style.pointerEvents = "none";
        }
    }
}

//su forEach
// function moneyIndex(iconList, price) {
//     index = [];
//      iconList.forEach((x, ind) => {x.onclick = () => {
//          if (money >= price[ind]) {
//              money -= price[ind];
//              index.push(ind);
//              x.classList.add("changeColor")
//          } else {
//              return alert("You don't have enough money");
//          }
//          h1.innerHTML = `Money: ${money}`;
//          //  iconList[i].style.pointerEvents = "none";
//      }
//      })
// }
//spausdinu ikonas be pasirinktos
function deleteIcon(box, icons, index, list) {
    box.innerHTML = "";
    newList = []
    newPrice = [];
    let n = 0;
    for (let j = 0; j < icons.length; j++) {
        if (!(index.includes(j))) {
            box.innerHTML += `<div id="fasIcon"> <i class="${icons[j]} fa-4x"></i><p>Price: ${price[j]}</p></div>`;
            newPrice[n] = price[j];
            newList[n] = list[j];
            n++;
        }
    }
    //newList = document.querySelectorAll("#fasIcon");
    // newList.push(box.innerHTML);
    console.log(newList, "naujas")
}

//spaisdinu tik pasirinktas ikonas
function addIcon(box, icons, index) {
    box.innerHTML = "";
    for (let j = 0; j < icons.length; j++) {
        if ((index.includes(j))) {
            box.innerHTML += `<div id="fasIcon"> <i class="${icons[j]} fa-4x"></i><p>Price:${price[j]}</p></div>`;
        }
    }
}

// pasaudus ant ikonos issaugo jos index, mazina pinigus



newList = iconList;
newPrice = price;
console.log(newPrice)

btn.onclick = () => {
    deleteIcon(shop[0], icons, index, newList);
    console.log(newList, "new listas");
    addIcon(inventory[0], icons, index);
    console.log(iconList, "icon list")
    console.log(newPrice)
    console.log(index, "indeksai")
    // moneyIndex(newList, newPrice);
}

moneyIndex(newList, newPrice);
// newList.forEach(x => {x.onclick = () => {
//     moneyIndex(newList, newPrice)}})

fetch('https://api.chucknorris.io/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })