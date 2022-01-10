"use strict";
const container = document.querySelector('.container');
const buyBtn = document.querySelector('.landBtn');
let grassArr = [];
//resources
let gold = 1000;
let wood = 100;
let stone = 100;
let population = 10;
let landQuantity = 0;
let randomNumArr = [];
let dataArr = [];
for (let i = 0; i < 96; i++) {
    const grass = document.createElement('div');
    grass.style.backgroundImage = 'URL("data:image/jpeg;base64,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"';
    grass.classList.add('grassImg');
    container.appendChild(grass);
    grassArr = document.querySelectorAll('.grassImg');
}
function appendResources(num1, num2, num3, num4) {
    const resourcesP = document.querySelectorAll('.resources');
    resourcesP[0].innerHTML = `x ${num1.toFixed(2)}`;
    resourcesP[1].innerHTML = `x ${num2.toFixed(2)}`;
    resourcesP[2].innerHTML = `x ${num3.toFixed(2)}`;
    resourcesP[3].innerHTML = `x ${num4}`;
}
function randomNum(num) {
    return Math.floor(Math.random() * num);
}
appendResources(wood, gold, stone, population);
buyBtn.onclick = () => {
    landQuantity++;
    if (gold >= 100 * landQuantity) {
        const random = randomNum(grassArr.length);
        //const random = 0;
        randomNumArr.push(random);
        console.log(randomNumArr);
        gold -= 100 * landQuantity;
        let woodOfLand = randomNum(101);
        let stoneOfLand = randomNum(101);
        // wood += woodOfLand;
        // stone += stoneOfLand;
        appendResources(wood, gold, stone, population);
        //issaugoti visus random num i array ir ziureti, kad velesni neincludintu ju
        //jei includina - while random num generuoti, kol neincludins, if nera vietos - game over, sorry
        grassArr[random].style.opacity = '1';
        grassArr[random].style.fontWeight = 'bold';
        grassArr[random].innerHTML += `<button class="house1" id='stoneBtn${random}'>STONE HOUSE</button>`;
        grassArr[random].innerHTML += `<button class="house2" id='woodBtn${random}'>WOOD HOUSE</button>`;
        grassArr[random].innerHTML += `<button  class="house3" id='houseBtn${random}'>HOUSE</button>`;
        grassArr[random].innerHTML += `<div class="text" id="text${random}"> WOOD: ${woodOfLand} STONE: ${stoneOfLand}</div>`;
        buyHouse(random, woodOfLand, stoneOfLand);
    }
    else {
        landQuantity--;
        alert("You dont have enough gold");
    }
};
function buyHouse(index, w, s) {
    const buyStoneHouse = document.getElementById(`stoneBtn${index}`);
    const buyWoodHouse = document.getElementById(`woodBtn${index}`);
    const buyHouse = document.getElementById(`houseBtn${index}`);
    const textDiv = document.getElementById(`text${index}`);
    console.log(buyStoneHouse);
    buyStoneHouse.onclick = () => {
        if (gold >= 50 && wood >= 50) {
            gold -= 50;
            wood -= 50;
            appendResources(wood, gold, stone, population);
            const houseDiv = document.createElement('img');
            houseDiv.style.height = '100px';
            houseDiv.style.width = '130px';
            // houseDiv.style.mixBlendMode = 'multiply'
            houseDiv.src = 'https://www.reallusion.com/contentstore/iclone/pack/tessellation/images/Stone_house.png';
            grassArr[index].appendChild(houseDiv);
            buyStoneHouse.style.display = 'none';
            buyWoodHouse.style.display = 'none';
            buyHouse.style.display = 'none';
            textDiv.innerText = `STONE: ${s}`;
            upgradeLevel(index);
            produceStone(s);
            objectToArray('stone', s, index, 1);
        }
        else {
            alert("You dont have enough resources");
        }
    };
    buyWoodHouse.onclick = () => {
        if (gold >= 50 && stone >= 50) {
            gold -= 50;
            stone -= 50;
            appendResources(wood, gold, stone, population);
            const houseDiv = document.createElement('img');
            houseDiv.style.height = '100px';
            houseDiv.style.width = '130px';
            houseDiv.src = 'https://www.pngall.com/wp-content/uploads/4/Wooden-House-PNG-Image.png';
            grassArr[index].appendChild(houseDiv);
            buyStoneHouse.style.display = 'none';
            buyWoodHouse.style.display = 'none';
            buyHouse.style.display = 'none';
            textDiv.innerText = `WOOD: ${w}`;
            upgradeLevel(index);
            produceWood(w);
            objectToArray('wood', w, index, 1);
        }
        else {
            alert("You dont have enough resources");
        }
    };
    buyHouse.onclick = () => {
        if (gold >= 50 && stone >= 50 && wood >= 50) {
            gold -= 50;
            wood -= 50;
            stone -= 50;
            let popPlus = randomNum(11);
            population += popPlus;
            gold += popPlus * 0.1;
            appendResources(wood, gold, stone, population);
            const houseDiv = document.createElement('img');
            houseDiv.style.height = '100px';
            houseDiv.style.width = '130px';
            houseDiv.src = 'pngwing.com.png';
            grassArr[index].appendChild(houseDiv);
            buyStoneHouse.style.display = 'none';
            buyWoodHouse.style.display = 'none';
            buyHouse.style.display = 'none';
            textDiv.innerText = `POPULATION: ${popPlus}`;
            upgradeLevel(index);
            produceGold(popPlus);
            objectToArray('simple', popPlus, index, 1);
        }
        else {
            alert("You dont have enough resources");
        }
    };
}
let intervalStone;
function produceStone(s) {
    clearInterval(intervalStone);
    intervalStone = setInterval(function () {
        stone += s / 100;
        console.log(stone, 'intervalas');
        appendResources(wood, gold, stone, population);
    }, 1000);
}
let intervalWood;
function produceWood(s) {
    clearInterval(intervalWood);
    intervalWood = setInterval(function () {
        wood += s / 100;
        appendResources(wood, gold, stone, population);
    }, 1000);
}
let intervalGold;
function produceGold(pop) {
    clearInterval(intervalGold);
    intervalGold = setInterval(function () {
        gold += pop * 0.1;
        appendResources(wood, gold, stone, population);
    }, 1000);
}
function objectToArray(t, q, i, l) {
    dataArr.push({ type: t, quantity: q, n: i, level: l });
    console.log(dataArr);
}
function upgradeLevel(index) {
    let level = 1;
    const levelDiv = document.createElement('div');
    levelDiv.setAttribute("id", `${index}`);
    levelDiv.style.height = '100px';
    levelDiv.style.width = '130px';
    levelDiv.innerText = `Level: ${level}`;
    grassArr[index].appendChild(levelDiv);
    console.log(levelDiv);
    levelDiv.onclick = (e) => {
        console.log(e);
        // console.log(e.path[0].id, "id is evento")
        console.log(e.target.id);
        level++;
        for (let i = 0; i < dataArr.length; i++) {
            console.log(dataArr[i], 'itasais');
            if (String(dataArr[i].n) === e.target.id && dataArr[i].type === 'wood') {
                if (gold >= 50 * level && stone >= 50 * level) {
                    levelDiv.innerText = `Level: ${level}`;
                    gold -= 50 * level;
                    stone -= 50 * level;
                    appendResources(wood, gold, stone, population);
                    produceWood(dataArr[i].quantity * level);
                }
                else {
                    level--;
                    alert("You dont have enough resources");
                }
            }
            if (String(dataArr[i].n) === e.target.id && dataArr[i].type === 'stone') {
                if (gold >= 50 * level && wood >= 50 * level) {
                    levelDiv.innerText = `Level: ${level}`;
                    gold -= 50 * level;
                    wood -= 50 * level;
                    appendResources(wood, gold, stone, population);
                    // console.log(level, 'lygis if')
                    produceStone(dataArr[i].quantity * level);
                }
                else {
                    level--;
                    alert("You dont have enough resources");
                }
            }
            if (String(dataArr[i].n) === e.target.id && dataArr[i].type === 'simple') {
                if (gold >= 50 * level && stone >= 50 * level && wood >= 50 * level) {
                    levelDiv.innerText = `Level: ${level}`;
                    gold -= 50 * level;
                    stone -= 50 * level;
                    wood -= 50 * level;
                    let popPlus = randomNum(11);
                    population += popPlus;
                    console.log(population, 'pop');
                    appendResources(wood, gold, stone, population);
                    produceGold(popPlus);
                }
                else {
                    level--;
                    alert("You dont have enough resources");
                }
            }
        }
        //pinigus turi atimti
        //dideti apsukos wood ir stone ir gold
        //jei neturi babkiu
    };
}
// 2 lvl building costs 100 gold, 100 wood, its production is x2 -
// 3 lvl building costs 150 gold, 150 wood, its production is x3
// show building level somewhere
