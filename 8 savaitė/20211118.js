// create a game where player fights against monster+
// player and monster should both have health bars representing health left+
// 100 health points each+
// game goes like this: player clicks button "hit" and hits enemy+
// then enemy automatically hits player back with random damage from 0 to max damage it makes+
// when enemy is killed, second random enemy appear with full health bar+

// player should be able to change weapon he is equipped with+
// each weapon will have it's own effect on player+
// (player should have 3 weapons to choose, but can hold only one while fighting)+
// on every hit player gets random amount of coins - from 0 to 10+
// coins are needed to buy health potions, one potion costs 50 points+
// health potions fully restores player health when bought+

let enemies = [
    {
        name: "Goblin",
        img: "https://i.imgur.com/yBh7Fn4.png",
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
        maxDamage: 15
    }
]

let weapons = {
    sword: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
        damage: 10,
        effect: 'gives player 25% chance to doge enemy attacks'
    },
    magicWand: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
        damage: 12,
        effect: 'heals player on every enemy hit from 0 to 5 hit points'
    },
    bow: {
        img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
        damage: 7,
        effect: 'has a 50% chance to hit enemy two times in a row'
    },
    potion: {
        img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
        info: "can be bought from shop for 50 coins, recovers player health when bought",
    }
}

const box = document.getElementsByClassName("box")[0];
let hpPlayer = 100;
let hpEnemy = 100;
let enemy = enemies[0]

//html
function startGame() {
    box.innerHTML = `<div class="grow2 align-center d-flex column">
                        <h1 class="text-center">Houmer</h1>
                        <img class="size" src="data:image/png;base64,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" alt="">
                        <div id="hp1" >
                            <div class="hp1-color text-center">
                                100
                            </div>
                            <div class="d-flex space-ev">
                                <img class="weapons" src="${weapons.sword.img}" alt="" >
                                <img class="weapons" src="${weapons.magicWand.img}" alt="" >
                                <img class="weapons" src="${weapons.bow.img}" alt="" >
                                </div>
                        </div>
                   </div>
        
                   <div class="grow1 d-flex column align-center">
                   <h1 class="text-center">vs</h1>
                         <p></p>
                         <button class="margin-top">ATTACK</button>
                         <div class="potions"></div>
                         <h4 class="margin-no">Coins: 0</h4>
                    </div>
                <div class="grow2 align-center d-flex column">
                        <h1 class="text-center" id="enemyName">${enemy.name}</h1>
                        <img id="enemyImg" class="size" src="${enemy.img}" alt="">
                         <div id="hp2" >
                               <div class="hp2-color text-center">
                               100
                                </div>
                         </div>
                </div>
          
`
}

startGame();

const btn = document.querySelector("button");
const lifeP = document.querySelector(".hp1-color");
const lifeE = document.querySelector(".hp2-color");
const enemyName = document.getElementById("enemyName");
const enemyImg = document.getElementById("enemyImg");
const weaponList = document.querySelectorAll(".weapons");
const coinsSum = document.querySelector("h4");
const potion = document.querySelector(".potions");
const help = document.querySelector("p");

let n = 0;
let deadEnemy = false;
let selectedWeapon = weapons.sword; //by default - kardas
let coins = 0;

//ginklo pasirinkimas
weaponList.forEach((x, i) => x.onclick = () => {
    if (i === 0) selectedWeapon = weapons.sword;
    if (i === 1) selectedWeapon = weapons.magicWand;
    if (i === 2) selectedWeapon = weapons.bow;
    unselectedAll(weaponList, i);
})

//atakos - zaidejo ir prieso
btn.onclick = () => {
    enemyLife();
    setTimeout(playerLife, 500)
}

//pagydo uz 50 pinigu
potion.onclick = () => {
    if (coins >= 50) {
        potion.style.animationName = "animePot";
        potion.style.animationIterationCount = "1";
        coins -= 50;
        hpPlayer = 100;
        lifePrint(lifeP, hpPlayer);
        coinsSum.innerHTML = `<h4 class="margin-no">Coins: ${coins}</h4>`
    } else {
        alert("neturi pakankamai money")
    }

}

//zaidejo taskai
function playerLife() {
    help.innerHTML = "";
    if (!deadEnemy) {
        let pointsP = randomNum(enemies[n].maxDamage)
        if (selectedWeapon === weapons.sword) {
            let prob = randomNum(3);
            if (prob === 0) {
                pointsP = 0;
                help.innerHTML = `Player dodged attack`;
            }
        }
        if (selectedWeapon === weapons.magicWand) {
            let healsPoint = randomNum(5);
            pointsP -= healsPoint;
            help.innerHTML = `Player was healed (${healsPoint} points)`;
        }
        if (selectedWeapon === weapons.bow) {
            let hit2 = randomNum(1);
            if (hit2 === 0) {
                enemyLife();
                coinsCounter();
                help.innerHTML = `Player hit twice`;
            }
        }
        console.log(enemies[n].maxDamage, "  ", enemies[n].name, pointsP, "kiek suzeidzia player")
        if (hpPlayer >= pointsP) {
            hpPlayer -= pointsP;
            lifePrint(lifeP, hpPlayer)
            coinsCounter();
        } else {
            lifePrint(lifeP, 0)
        }
    } else {
        console.log("priesas mire")
    }
}

//prieso taskai
function enemyLife() {
    let pointsE = selectedWeapon.damage;
    console.log(pointsE, "enemio taskai")
    if (hpEnemy >= pointsE) {
        hpEnemy -= pointsE;
        lifePrint(lifeE, hpEnemy);
        deadEnemy = false;
    } else {
        deadEnemy = true;
        n = randomNum(2);
        lifeE.style.width = `0%`
        // alert("Enemy is dead");
        enemyName.innerHTML = `${enemies[n].name}`
        enemyImg.src = `${enemies[n].img}`
        hpEnemy = 100;
        lifePrint(lifeE, hpEnemy);
    }
}

//nuo nulio iki duoto num
function randomNum(num) {
    return Math.round(Math.random() * num)
}

//atzymi visus, pazymi viena
function unselectedAll(items, index) {
    items.forEach(x => x.classList.remove('selected'));
    selectOne(items, index)
}

function selectOne(items, index) {
    items[index].classList.add("selected");
}

//pinigus skaiciuoja
function coinsCounter() {
    coins += randomNum(10);
    coinsSum.innerHTML = `<h4 class="margin-no">Coins: ${coins}</h4>`
}

//atnaujina hp juosta
function lifePrint(arg, sum) {
    arg.style.width = `${sum}%`
    arg.innerText = `${sum}`
}
