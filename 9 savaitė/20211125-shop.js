const shop = document.querySelector(".shopping-page");
const modalBox = document.getElementById("modalBox");
const cartQ = document.getElementById("quantity");
const cartIconBtn = document.querySelector(".fa-shopping-cart");
const cartList = document.querySelector(".cartList");
const total = document.querySelector(".totalSum");


let dataArr = [];
let dataArrNew = [];
let cartArray = [];
let n = 0;
let cartItems = [];
let sum = 0;
let cartItemsAfterDelete = [];
let cartItems2 = [];

function generateItems() {
    shop.innerHTML = "";
    if (!!JSON.parse(localStorage.getItem("allData"))) {
        dataArrNew.push(JSON.parse(localStorage.getItem("allData")));
        console.log(JSON.parse(localStorage.getItem("allData")))
        console.log(dataArrNew)
        appendItems(dataArrNew[0]);
        addToModal();
    } else {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("allData", JSON.stringify(data));
                console.log(data)
                appendItems(data);
                dataArr.push(data);
                addToModal();
                console.log(dataArr)
                console.log(JSON.parse(localStorage.getItem("allData")))
            })
    }
}

function appendItems(arr) {
    arr.map(x =>
        shop.innerHTML += `
        <div class="card d-flex column align-center">
               <h4> ${x.title} </h4>
               <img class="productImg" src="${x.image}" alt="">
                <h2> Price: ${x.price} </h2>
                <button class="addBtn margin-b">Add to cart</button>
               <div> ${x.description} </div>
        </div>
        `
    )
}

function addToModal() {
    const addBtn = document.querySelectorAll(".addBtn");
    const card = document.querySelectorAll(".card");
    // console.log(card[1])
    addBtn.forEach((x, i) => x.onclick = () => {
        n++;
        modalBox.style.display = "block";
        modalBox.innerHTML = `
            <div class="modal-content d-flex align-center justify-center column ">
                <span class="close align-right">&times;</span>
                <div class="modalProduct">
                        <div class="d-flex column align-center">
               <h4> ${dataArrNew[0][i].title} </h4>
               <img class="productImg" src="${dataArrNew[0][i].image}" alt="">
                <h2> Price: ${dataArrNew[0][i].price} </h2>
        </div>
                </div>
                <div class="d-flex space-ev">
                <button class="continueBtn">Continue shopping</button>
                <button class="checkOutBtn">Check out</button>
                </div>
            </div>
`

        const span = document.getElementsByClassName("close")[0];
        console.log(card[i])
        span.onclick = () => {
            modalBox.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target === modalBox) {
                modalBox.style.display = "none";
            }
        }
        cartQ.innerHTML = `${n}`
        console.log(cartArray, "pries")
        cartArray.push(dataArrNew[0][i]);
        console.log(cartArray, "po")
        addToCart();

    })
}

function addToCart() {
    const continueBtn = document.querySelector(".continueBtn");
    const checkOutBtn = document.querySelector(".checkOutBtn");

    continueBtn.onclick = () => {
        modalBox.style.display = "none";
    }
    checkOutBtn.onclick = () => {
        localStorage.setItem("cartData", JSON.stringify(cartArray));
        window.location = "20211125-cart.html"
    }
}


function cart() {
    cartItems = (JSON.parse(localStorage.getItem("cartData")));
    console.log(cartItems)
    cartListAppend(cartItems);
    total.innerHTML = ` <h2 class="total">Total price: ${sum} €</h2>`;
    localStorage.setItem("cartHistory", JSON.stringify(cartItems));
    console.log(cartItems, "pries delete")
    deleteItem();

}

function deleteItem() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    console.log(deleteBtn)
    deleteBtn.forEach((x, i) => x.onclick = (e) => {
        console.log(e)
        let price2 = e.path[1].childNodes[1].innerHTML.replace("Price: ", "");
        price2 = Number(price2);
        sum -= price2;
        sum = sum.toFixed(2);
        total.innerHTML = ` <h2 class="total">Total price: ${sum} €</h2>`;
        e.path[0].remove();
        e.path[1].remove();
        e.path[2].remove();
        e.path[3].remove();
        // cartItems.splice(i, 1)
        // cartItemsAfterDelete.splice(cartItems[i]);
        //console.log(cartItemsAfterDelete, "after delete")
        delete cartItems[i];
        //cartListAppend(cartItems);
        // deleteBtn = document.querySelectorAll(".deleteBtn");
        console.log(deleteBtn, "delete btn viduj")
        //galiu idet kad dar karta atvaizduotu, kad persikrovus butu nauja info
        cartItemsAfterDelete = [];
        for (let j = 0; j < cartItems.length; j++) {
            if(!!cartItems[j]) cartItemsAfterDelete.push(cartItems[j])
        }
        console.log(cartItemsAfterDelete, "po remove")
        localStorage.setItem("cartHistory", JSON.stringify(cartItemsAfterDelete));
        console.log(i, "i-tasis")

    })
}

function cartListAppend(arr) {
    cartList.innerHTML = "";
    arr.map(x => {
        cartList.innerHTML += `
        <div class="card1 d-flex align-center column">
                <div>
               <h4> ${x.title} </h4>
               </div>
               <div class="d-flex align-center justify-center row">
               <div class="grow1 d-flex justify-center">
               <img class="productImg1" src="${x.image}" alt="">
               </div>
                <div class="grow3 d-flex"> ${x.description} </div>
                <div class="grow1 d-flex space-ev align-center ">
                <h3> Price: ${x.price} </h3>
               <i class="deleteBtn margin-b fas fa-trash-alt fa-2x"></i>
               </div>
               </div>
        </div>
        `
        sum += x.price;
    })
}

if (document.title === "Fake Store") {
    if (!!JSON.parse(localStorage.getItem("cartHistory"))) {
        cartArray = JSON.parse(localStorage.getItem("cartHistory"));
        n = cartArray.length;
        cartQ.innerHTML = `${n}`
    } else {
        cartArray = [];
        n = 0;
   }
    generateItems();
    cartIconBtn.onclick = () => {
        console.log("jbj")
        localStorage.setItem("cartData", JSON.stringify(cartArray));
        window.location = "20211125-cart.html"
    }
}
if (document.title === "Cart") {
    cart();
}