const input = document.querySelectorAll("input");
const btn = document.querySelector("button");
const box2 = document.querySelector(".boxPosts");
const btn2 = document.querySelectorAll("button")[1];
let arrAll = [];
let arrAll2 = [];

const host = "http://167.99.138.67:1111"

// to create account send POST request to '/createaccount'
// you should send object with these keys: name, passwordOne, passwordTwo
// check validations messages which you get from server
// make validations in front end according to it


btn.onclick = () => {
    let success = true;
    const user = {
        name: input[0].value,
        passwordOne: input[1].value,
        passwordTwo: input[2].value
    }

    if (user.name.length < 5) {
        console.log("Name has to be at least 5 symbols length");
        success = false;
    }
    if (user.passwordOne.length < 5) {
        console.log("Password has to be at least 5 symbols length");
        success = false;
    }
    if (user.passwordTwo !== user.passwordOne) {
        console.log("Password should match");
        success = false;
    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }

    console.log(user, "po click")

    fetch("http://167.99.138.67:1111/createaccount", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    if (success) alert("Account created successfully");
}


function getAllPosts() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            appendPosts(data.data)
            arrAll.push(data.data)
        })
    console.log(arrAll, "visas array")
}

function appendPosts(arr) {
    box2.innerHTML = "";
    arr.map((x, i) => {
        box2.innerHTML +=
            `        <div class="card" id=${i}>
        <h4>${x.username}</h4>
        <h6>${x.title}</h6>
        <p>${x.description}</p>
        </div> `

        oneUserPosts();

    })
}

function oneUserPosts() {
    const cardBox = document.querySelectorAll(".card");
    let firstTime = true;
    console.log(arrAll[0].length, "ilgis")
    console.log(arrAll[0])
    cardBox.forEach((x, i) => {
        x.onclick = () => {
            for (let j = 0; j < arrAll[0].length; j++) {
                if (arrAll[0][j].id === arrAll[0][i].id) {
                    let id = arrAll[0][i].id;
                    if (arrAll[0][j].username === arrAll[0][i].username && firstTime === true) {
                        console.log("if")
                        box2.innerHTML = "";
                        firstTime = false;
                        fetch("http://167.99.138.67:1111/getuserposts/${arrAll[0][i].username}")
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                data.data.map((x, i) => {
                                    box2.innerHTML +=
                                        `        <div class="card" id=${i}>
        <h4>${x.username}</h4>
        <h6>${x.title}</h6>
        <p>${x.description}</p>
        </div> `
                                })
                                console.log(arrAll, "visas array")

                            })
                    }
                }
            }
        }
    })
}

btn2.onclick = () => {
    box2.innerHTML = "";
    getAllPosts();
}

//
// function appendPostsNew(arr) {
//     box2.innerHTML = "";
//     arr.map((x, i) => {
//         box2.innerHTML +=
//             `        <div class="card" id=${i}>
//         <h4>${x.username}</h4>
//         <h6>${x.title}</h6>
//         <p>${x.description}</p>
//         </div> `
//     })
//     oneUserPosts2(arr)
// }
//

//
//

//
//
// //pagal name ir id
// function oneUserPosts2(arr) {
//     const cardBox = document.querySelectorAll(".card");
//     console.log(cardBox, "cardbox")
//     cardBox.forEach(x => {
//         x.onclick = userID2;
//     })
// }
//
//
// function userID2(event) {
//     let idn = event.target.id;
//     idn = Number(idn);
//     console.log(event.target)
//     console.log(arrAll2[0], "su ID");
//     for (let i = 0; i < arrAll2[0].length; i++) {
//         if (arrAll2[0][i].id === arrAll2[0][idn].id) {
//             console.log("if")
//             fetch(`http://167.99.138.67:1111/getsinglepost/${arrAll2[0][i].username}/${arrAll2[0][i].id}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     box2.innerHTML = "";
//                     box2.innerHTML +=
//                         `        <div class="card">
//         <h4>${arrAll2[0][i].username}</h4>
//         <h6>${arrAll2[0][i].title}</h6>
//         <p>${arrAll2[0][i].description}</p>
//         </div> `
//                 })
//         }
//     }
// }