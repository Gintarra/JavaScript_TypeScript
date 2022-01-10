// const box = document.querySelector("div");

//pirma uzd
// fetch("https://api.chucknorris.io/jokes/random")
//     .then(res => res.json())
//     .then(data => {
//         box.innerHTML += `    <img class="margin-b" src=${data.icon_url} alt=""> `
//         box.innerHTML += `    <a href="${data.url}" > Joke link</a> `
//         box.innerHTML += `    <p> ${data.value}</p> `
//         console.log(data)
//     })


// antra uzd
let arr = [];
const btnAdd = document.querySelector("button");
const card = document.getElementById("card");
let btnDelete;
let n = 0;
let k = 0;
let idDelete = 0;
let cardId = 0;
card.innerHTML = "";

//prideda user i array
function addUser() {
    // arr = [];
    fetch("https://random-data-api.com/api/users/random_user?size=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            arr.push(data)
        })
}


function append(arr) {
    console.log(arr)
    card.innerHTML += `<div class="user cards margin d-flex column" id="${n}c"> <img class="size" src="${arr[0].avatar}"> 
<h2>${arr[0].first_name}  ${arr[0].last_name}</h2> 
                             <h4>Email: ${arr[0].email}</h4>
                             <h4>City: ${arr[0].address.city}</h4>
                              <h4>Postcode: ${arr[0].address.zip_code}</h4>
                               <h4>State: ${arr[0].address.state}</h4>
                                <h4>Phone: ${arr[0].phone_number}</h4>
       <div class="align-self"> 
       <button class="margin-b deleteBtn" id="${n}">Delete User</button>
       </div>
        </div>`

    let age = arr[0].date_of_birth.slice(0, 4);
    console.log(n, "n indeksas")
    const x = document.getElementsByClassName("user")[k].id;
    console.log(x, "x - card ID appen fjoj")
    n++;
    k++;
    if ((2021 - Number(age)) > 30) {
        document.getElementById(`${x}`).style.border = "4px solid yellow"
    }
    btnDelete = document.querySelectorAll(".deleteBtn");
    console.log(btnDelete)
}


btnAdd.onclick = () => {
    addUser();
    append(arr[0])
    console.log(arr, "pilnas")
    arr = [];
    console.log(arr, "tuscias")
    console.log(btnDelete, "onclic fja")
    btnDelete.forEach(el => el.onclick = (event) => {
        console.log(event.target.id)
        cardId = event.target.id + 'c';
        deleteUser(cardId);
        //  console.log(cardId, "card IDD")
        k--;
    })

}


function deleteUser(id) {
    document.getElementById(`${id}`).remove();
    //  console.log(document.getElementById(`${id}`), "cardas")
}

