//Blackjack

let deckId: string = "";
let pScore: number = 0;
let dScore: number = 0;
let firstCardPoints: number = 0;

const playerBox = document.querySelector(".playerBox")!;
const dealerBox = document.querySelector(".dealerBox")!;
const pScoreBox = document.querySelector(".pScoreBox")!;
const dScoreBox = document.querySelector(".dScoreBox")!;
const box = document.querySelector<HTMLElement>(".box")!;
const imgReverse = document.querySelector<HTMLElement>("#reverse")!
const buttons = document.querySelectorAll("button")!;
const winnerIs = document.querySelector<HTMLElement>(".border")!;


winnerIs.style.visibility = "hidden";
box.style.display = "none";

interface OneCard {
    image: string,
    value: string,
}

let card: OneCard;
let firstCard: OneCard;


//sugeneruoju kalades ID
function mainDeck() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
            console.log(deckId)
            generateCards(deckId, "first");
            generateCards(deckId, "second");
        })
}

function generateCards(id: string, player: string) {
    //sugeneruoju dvi kortas
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                card = {
                    image: data.cards[0].image,
                    value: data.cards[0].value
                }
                if (player === "first")
                    appendCard(card);
                if (player === "second")
                    appendFirstDealerCard(card);
                card = {
                    image: data.cards[1].image,
                    value: data.cards[1].value
                }
                if (player === "first")
                    appendCard(card);
                if (player === "second")
                    appendDealerCard(card);
            }
        })
}

function appendCard(card: OneCard) {
    let cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.style.height = '150px'
    playerBox.appendChild(cardImage);
    pScoreBox.innerHTML = `<h2>Player score: ${playerScore(card)}</h2>`
    checkWinner("hit");
    // check21();
}

function appendDealerCard(card: OneCard) {
    let cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.style.height = '150px'
    dealerBox.appendChild(cardImage);
    dScoreBox.innerHTML = `<h2>Dealer score: ${dealerScore(card) - firstCardPoints}</h2>`;
    checkWinner("hit");
}

function appendFirstDealerCard(card: OneCard) {
    imgReverse.style.display = "block";
    firstCardPoints = dealerScore(card);
    firstCard = card;
}

function playerScore(card: OneCard): number {
    if (!!(parseInt(card.value))) {
        pScore += parseInt(card.value);
    } else if (card.value === "ACE") {
        if (pScore <= 10)
            pScore += 11;
        else
            pScore += 1;
    } else {
        pScore += 10;
    }
    return pScore;
}

function dealerScore(card: OneCard): number {
    if (!!(parseInt(card.value))) {
        dScore += parseInt(card.value);
    } else if (card.value === "ACE") {
        if (dScore <= 10)
            dScore += 11;
        else
            dScore += 1;
    } else {
        dScore += 10;
    }
    return dScore;
}

function generateOneCard(id: string, player: string) {
    //sugeneruoju viena korta
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                card = {
                    image: data.cards[0].image,
                    value: data.cards[0].value
                }
                if (player === "first")
                    appendCard(card);
                if (player === "second")
                    appendDealerCard(card);
            }
        })
}

// async function generateOneCard(id: string, player: string) {
//     //sugeneruoju viena korta
//    const response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
//        const data = await response.json();
//             console.log(data)
//             if (data.success) {
//                 card = {
//                     image: data.cards[0].image,
//                     value: data.cards[0].value
//                 }
//                 if (player === "first")
//                     appendCard(card);
//                 if (player === "second")
//                     appendDealerCard(card);
//             }
//             return data;
// }

buttons[0].onclick = () => {
    mainDeck();
    box.style.display = "flex";
    buttons[0].style.display = "none";
}


buttons[1].onclick = () => {
    generateOneCard(deckId, "first");
    //setTimeout(dealerScoreTimeout, 200)
    if (dScore < 17) {
        generateOneCard(deckId, "second");
    } else {
        checkWinner("hit");
        return;
    }
}

// function dealerScoreTimeout(){
//     if (dScore < 17) {
//         generateOneCard(deckId, "second");
//     } else {
//         checkWinner();
//         return;
//     }
// }

buttons[2].onclick = () => {
    if (dScore < 17) {
        generateOneCard(deckId, "second");
        console.log(dScore)
    }
    setTimeout(() => checkWinner("stand"), 2000);
}

buttons[3].onclick = () => {
    window.location.reload();
}

function checkWinner(hit: string) {
    console.log(pScore, " player")
    console.log(dScore, " dealer")
    if (hit === "hit") {
        if (pScore > 21 && dScore > 21) {
            itsDraw();
            return;
        }
        if (pScore > 21 && dScore <= 21) {
            computerWon();
            return;
        }
        if (pScore <= 21 && dScore > 21) {
            playerWon();
            return;
        }
        if (pScore === 21 && dScore > 17 && dScore !== 21) {
            playerWon();
            return;
        }
        if (pScore === 21 && dScore === 21 ) {
            itsDraw();
            return;
        }
    } else {
        if (pScore <= 21 && dScore <= 21 && 21 - pScore < 21 - dScore) {
            playerWon();
            return;
        }
        if (pScore <= 21 && dScore <= 21 && 21 - pScore > 21 - dScore) {
            computerWon();
            return;
        }
        if (pScore === dScore) {
            itsDraw();
        }
    }

}

function computerWon() {
    winnerIs.style.visibility = "visible";
    winnerIs.innerText = "Game over, dealer won";
    imgReverse.innerHTML = `<img src=${firstCard.image} alt="">`;
    console.log(firstCard.image)
    dScoreBox.innerHTML = `<h2>Dealer score: ${dScore}</h2>`;
}

function playerWon() {
    winnerIs.style.visibility = "visible";
    winnerIs.innerText = "Game over, player won";
    imgReverse.innerHTML = `<img src=${firstCard.image} alt="">`;
    dScoreBox.innerHTML = `<h2>Dealer score: ${dScore}</h2>`;
}

function itsDraw() {
    winnerIs.style.visibility = "visible";
    winnerIs.innerText = "Game over, draw";
    imgReverse.innerHTML = `<img src=${firstCard.image} alt="">`;
    dScoreBox.innerHTML = `<h2>Dealer score: ${dScore}</h2>`;
}