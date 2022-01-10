const box = document.querySelector(".container");
const loginBox = document.querySelector(".loginBox");
const input = document.querySelectorAll(".inputF");
const createAccBtn = document.getElementById("createBtn");
const box2 = document.querySelector(".boxPosts");
const getAllBtn = document.getElementById("getAllBtn");
const getMyBtn = document.getElementById("myPostBtn");
const logBtn = document.querySelector(".loginBtn");
const createPostBtn = document.querySelector(".createBtn");
const inp1 = document.querySelector("#btn1");
const inp2 = document.querySelector("#btn2");
const inp3 = document.querySelector("#btn3");
const myPostsBox = document.getElementById("myPostBox");
const createPostBox = document.querySelector(".boxNewPost");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");

let arrAll = [];
let arrAll2 = [];
let myPosts = [];
let keyNew = "";

//nusiunti i fetcha duomenis, ir tikrina serveryje juos, butina
//duoti "options", taip nusiuncia duomenis ir parametrus
// fetch("address", options)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
const host = "http://167.99.138.67:1111"
// to create account send POST request to '/createaccount'
// you should send object with these keys: name, passwordOne, passwordTwo
// check validations messages which you get from server
// make validations in front end according to it

if (document.title === "Main page") {
    q1.onclick = () => {
        loginBox.style.display = "flex";
        box.style.display = "none";
    }
    q2.onclick = () => {
        box.style.display = "flex";
        loginBox.style.display = "none";
    }
    createAccBtn.onclick = () => {
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
}

function getAllPosts() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            appendPosts(data.data)
            arrAll.push(data.data)
        })
}

function appendPosts(arr) {
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

//sitas veikia abiejuose html psl
getAllBtn.onclick = () => {
    box2.innerHTML = "";
    myPostsBox.innerHTML = "";
    arrAll = [];
    arrAll2 = [];
    getAllPosts();
}

function appendPostsNew(arr) {
    box2.innerHTML = "";
    arr.map((x, i) => {
        box2.innerHTML +=
            `        <div class="card" id=${i}>
        <h4>${x.username}</h4>
        <h6>${x.title}</h6>
        <p>${x.description}</p>
        </div> `
    })
    oneUserPosts2(arr)
}

function oneUserPosts() {
    const cardBox = document.querySelectorAll(".card");
    cardBox.forEach(x => {
        x.onclick = userID;
    })
}

function userID(event) {
    let id = event.target.id;
    id = Number(id);
    console.log(id)
    console.log(arrAll[0].length)
    console.log(id, "save id")
    console.log(arrAll[0][Number(id)].username, "su ID");
    for (let i = 0; i < arrAll[0].length; i++) {
        if (arrAll[0][i].username === arrAll[0][id].username) {
            console.log("if")
            fetch(`http://167.99.138.67:1111/getuserposts/${arrAll[0][i].username}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    appendPostsNew(data.data)
                    arrAll2.push(data.data)
                })
        }
    }
}

//pagal name ir id
function oneUserPosts2(arr) {
    const cardBox = document.querySelectorAll(".card");
    console.log(cardBox, "cardbox")
    cardBox.forEach(x => {
        x.onclick = userID2;
    })
}

function userID2(event) {
    let idn = event.target.id;
    idn = Number(idn);
    console.log(event.target)
    console.log(arrAll2[0], "su ID");
    for (let i = 0; i < arrAll2[0].length; i++) {
        if (arrAll2[0][i].id === arrAll2[0][idn].id) {
            console.log("if")
            fetch(`http://167.99.138.67:1111/getsinglepost/${arrAll2[0][i].username}/${arrAll2[0][i].id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    box2.innerHTML = "";
                    box2.innerHTML +=
                        `        <div class="card">
        <h4>${arrAll2[0][i].username}</h4>
        <h6>${arrAll2[0][i].title}</h6>
        <p>${arrAll2[0][i].description}</p>
        </div> `
                })
        }
    }
}

// LOGIN AND RECEIVE SECRET KEY FOR FURTHER OPERATIONS
// user login endpoint "/login"
// send object with these keys: name, password
// USE SECRET KEY FOR UPDATING AND CREATING THE POSTS
// to create post, endpoint "/createpost"
// send object with these keys: secretKey, title, description, image
// to update post, endpoint "/updatepost"
// send object with these keys: secretKey, title, description, image, id
// to delete post, endpoint "/deletepost"
// send object with these keys: secretKey, id

if (document.title === "Main page") {
    logBtn.onclick = () => {
        loginUser();
        window.location = '20211122-1.html';
    }
}


if (document.title === "Create") {
    createPostBtn.onclick = () => {
        createPost();
    }
    //tik mano postai cia
    getMyBtn.onclick = () => {
        getMyPosts();
    }
}

function loginUser() {
    const userLogin = {
        name: input[3].value,
        password: input[4].value
    }

    console.log(userLogin)
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userLogin)
    }
    console.log(userLogin, "po click")
    fetch("http://167.99.138.67:1111/login", options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem("key", data.secretKey)
                localStorage.setItem("username", userLogin.name)
                console.log(data.secretKey)
            }
            else return;
            console.log(data);
        })
}

function createPost() {
    keyNew = localStorage.getItem("key")
    const postData = {
        title: inp1.value,
        description: inp2.value,
        image: inp3.value,
        secretKey: keyNew
    }
    console.log(postData)
    fetchUrl("http://167.99.138.67:1111/createpost", postData);
}

function getMyPosts() {
    myPosts = [];
    box2.innerHTML = ""
    myPostsBox.innerHTML = "";
    let name = localStorage.getItem("username")
    fetch(`http://167.99.138.67:1111/getuserposts/${name}`)
        .then(res => res.json())
        .then(det => {
            console.log(det)
            det.data.map((x) => {
                myPostsBox.innerHTML +=
                    `        <div class="card myPostsDiv"  >
        <h4>${x.username}</h4>
        <h6>${x.title}</h6>
        <p>${x.description}</p>
        <div class="d-flex justify-ev">
        <button class="updateBtn" >Update post</button>
        <button class="deleteBtn" >Delete post</button>
        </div>
        </div> `
                myPosts.push(x);
                console.log(myPosts, "my posts")
            })
            updatePost();
            deletePost();
        })
}

function updatePost() {
    keyNew = localStorage.getItem("key");
    console.log(keyNew, "raktas")
    const updateBtn = document.querySelectorAll(".updateBtn");
    let clickID = null;
    updateBtn.forEach((x, i) => x.onclick = () => {
        console.log("clickk")
        clickID = i;
        createPostBox.innerHTML = `
            <h3>To update post:</h3>
            <input class="margin" type="text" placeholder="title" id="btn10" value="${myPosts[i].title}" >
            <input class="margin"  type="text" placeholder="description" id="btn20" value="${myPosts[i].description}">
            <input class="margin"  type="url" placeholder="image url" id="btn30" value="${myPosts[i].image}">
            <button id="updatePostBtnMain">Update post</button>
                    `
        const updateBtnMain = document.querySelector("#updatePostBtnMain");
        const inp1Up = document.querySelector("#btn10");
        const inp2Up = document.querySelector("#btn20");
        const inp3Up = document.querySelector("#btn30");
        updateBtnMain.onclick = () => {
            const postUpdateData = {
                title: inp1Up.value,
                description: inp2Up.value,
                image: inp3Up.value,
                secretKey: keyNew,
                id: myPosts[clickID].id
            }
            console.log(postUpdateData)
            fetchUrl("http://167.99.138.67:1111/updatepost", postUpdateData);
            //perspausdinu visus savo postus
            setTimeout(getMyPosts, 2000);
        }
    })
}

function deletePost() {
    const deleteBtn = document.querySelectorAll(".deleteBtn");
    keyNew = localStorage.getItem("key");
    deleteBtn.forEach((x, i) => x.onclick = () => {
        const postDelete = {
            secretKey: keyNew,
            id: myPosts[i].id
        }
        fetchUrl("http://167.99.138.67:1111/deletepost", postDelete);
        //perspausdinu visus savo postus
        setTimeout(getMyPosts, 2000);
    })
}

function fetchUrl(url, arg) {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(arg)
    }
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}