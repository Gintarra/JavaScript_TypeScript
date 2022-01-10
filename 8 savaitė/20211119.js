const container = document.querySelector(".container");
const postBox = document.querySelector(".onePost");
const postCom = document.querySelector(".com");
const btn = document.querySelector("button");


let arr = [];
let bool = true;
//window.location = '20211119.html';


function allPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            data.map(x => {
                arr.push(x);
                appendPost();
            })
        })
}


function appendPost() {
    container.innerHTML = "";
    arr.map(x => {
        container.innerHTML += `       <div class="box margin pad border">
        <div> ${x.title} </div>
        <div>${x.body}</div>
             </div>   `
    })
    singlePost();
}


function singlePost() {
    const postList = document.querySelectorAll(".box")
    postList.forEach((x, i) => {
        x.onclick = () => {
            //paimti array
            arr.map((y, i2) => {
                if (i === i2) {
                    localStorage.setItem("index", y.id);
                    console.log(y.id, "indeksa issaugojau")
                    window.location = '20211119-post.html';
                }
            })

        }
    })
}


function singlePostNew() {
    //paimti id
    let id = JSON.parse(localStorage.getItem("index"));
    console.log(id, "naujam psl")
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            postBox.innerHTML = `      
        <div> ${data.title} </div>
        <div>${data.body}</div>
                `
            console.log(data)
        })
        btn.onclick = () => {
            window.location = '20211119-com.html';
    }
}

function comment(){
    //paimti id
    let id = JSON.parse(localStorage.getItem("index"));
    console.log(id, "naujam psl")
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => {
            data.map(x => {
                postCom.innerHTML += `   
   <div class="comStyle">  
        <div> ${x.name} </div>
        <div>${x.body}</div>
        </div>  
                `
                console.log(data)
            })
        })
}

//reikia if tam, kad kitas html skaitytu tik jam reikalingas funkcijas
if (window.location.pathname === "/20211117.css/20211119.html") {
    allPosts();
}  else if (window.location.pathname === "/20211117.css/20211119-post.html")  {
    singlePostNew();
} else {
    comment();
}


console.log(window.location.pathname);


//console.log(arr)

