const generateCardBtn = document.getElementById("generateBtn");
const inputs = document.querySelectorAll("input");
const colorBoxes = document.querySelectorAll(".colorBox");
const catText = document.getElementById("cat-text");
const subCatText = document.getElementById("sub-cat-text");
const generateContentBtn = document.getElementById("contentBtn");
const error = document.getElementById("errorMessage");
const area = document.getElementById("previewArea");
const appendCardBtn = document.getElementById("appendCard");
const allCards = document.querySelector(".allCards");
const optionStyle = document.querySelector("#border-style");

let color = "";
error.innerHTML = "";
let click = false;


function unselectedAll(items, index) {
    items.forEach(x => x.classList.remove('selected'));
    selectOne(items, index)
}

function selectOne(items, index) {
    items[index].classList.add("selected");
}

function preview(card) {
    area.innerHTML = "";
    area.appendChild(card);
}

function contentGenerator(card) {
    generateContentBtn.onclick = () => {
        if (!click && !!catText.value && !!subCatText.value) {
            fetch(`http://167.99.138.67:8281/random/${catText.value}/${subCatText.value}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        error.innerHTML = "";
                        area.style.overflow = "auto";
                        if (data.item.includes("http")) {
                            card.innerHTML += `<div class="d-flex column margin-5 wrap align-center">
                                            <img class="size" src=${data.item} alt="">
                                          </div>
`
                        } else {
                            card.innerHTML += `<div class="d-flex column align-center margin-5 border">${data.item}</div>`
                           // console.log(data)
                        }
                    } else {
                        error.innerHTML = `Server error: ${data.success}`
                    }
                })
        } else if (click) {
            alert("First create the card")
        } else {
            error.innerHTML = "Fill all rows";
        }
    }
    appendCard(card);
}

function appendCard(card) {
    appendCardBtn.onclick = () => {
        area.style.overflow = "hidden";
        card.style.overflow = "hidden";
        click = true;
        allCards.appendChild(card);
        boxCard = document.createElement("div");
    }
}


colorBoxes.forEach((x, i) => x.onclick = () => {
    color = x.id;
    unselectedAll(colorBoxes, i)
})

let boxCard = document.createElement("div");

generateCardBtn.onclick = () => {
    boxCard.style.height = inputs[0].value + "px";
    boxCard.style.width = inputs[1].value + "px";
    boxCard.style.borderWidth = inputs[2].value;
    boxCard.style.borderStyle = optionStyle.value;
    boxCard.style.borderColor = inputs[3].value;
    boxCard.style.borderRadius = inputs[4].value + "px";
    boxCard.style.backgroundColor = color;
    boxCard.style.padding = inputs[5].value + "px";
    boxCard.style.margin = inputs[6].value + "px";
    click = false;
  //  console.log(boxCard)
    preview(boxCard);
    contentGenerator(boxCard);
}


