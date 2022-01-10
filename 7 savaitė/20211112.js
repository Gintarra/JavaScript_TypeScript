const btn = document.querySelectorAll("button");
const box = document.querySelector(".container");





btn.forEach(el => el.onclick = (event) => {
    event.target.parentElement.style.backgroundColor = event.target.innerText;

})

