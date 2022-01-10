const inventory = document.querySelector(".inventoryIn");
const buyBtn = document.querySelector(".eggBtn");
const moneyH = document.querySelector(".moneyHeader");
const shopBox = document.querySelector(".shop");
const innerBox = document.querySelector(".innerBox");
const bar = document.getElementById("myBar");

const animals = ["fas fa-otter", "fas fa-hippo", "fas fa-dog",
    "fas fa-kiwi-bird", "fas fa-horse-head", "fas fa-spider",
    "fas fa-horse", "fas fa-fish", "fas fa-crow", "fas fa-cat",
    "fas fa-dragon", "fas fa-dove", "fas fa-frog"
]
let money = 300;

buyBtn.onclick = () => {
    if (money >= 100) {
        money -= 100;
        moneyH.innerHTML = `Money:${money}`
        shopBox.style.display = "none";
        innerBox.style.display = "flex";
        let width = 1;
        let id = setInterval(loadingBar, 20);
        function loadingBar() {
            if (width >= 100) {
                clearInterval(id);
                shopBox.style.display = "flex";
                innerBox.style.display = "none";
                appendAnimals();
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }
    } else {
        alert("You don't have enough money")
    }
}


function randomNum(num1, num2) {
    return Math.round(Math.random() * num1) + num2;
}

function appendAnimals() {
    let animalID = randomNum(animals.length - 1, 0);
    console.log(animalID);
    let price = randomNum(100, 50);
    let name = "";
    let sex = "";
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            sex = data.results[0].gender;
            name = data.results[0].name.first;
            console.log(name, "  ", sex)

            inventory.innerHTML += `
    <div class="animalCard margin">
        <i class="${animals[animalID]} ${sex} fa-2x"></i>
        <p class="margin-small">${name}</p>
        <p class="priceBox margin-small">${price}</p>
        <button class="sellBtn">Sell</button>
    </div>
`
            sell();
        })
    console.log(document.querySelectorAll(".sellBtn"))


}

function sell() {
    const sellBtn = document.querySelectorAll(".sellBtn");
    const card = document.querySelectorAll(".animalCard");
    const priceBox = document.querySelectorAll(".priceBox");
    sellBtn.forEach((x, i) => x.onclick = () => {
        console.log("paspaudziau", x)
        money += Number(priceBox[i].innerHTML);
        moneyH.innerHTML = `Money:${money}`
        card[i].remove();
    })
}



