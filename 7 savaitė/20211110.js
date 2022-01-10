const inp = document.querySelector("input");
const btn = document.querySelector("button");
const circle = document.getElementById("circle");

const inputEmail = document.getElementById("email");
const btnEmail = document.getElementById("emailBtn");

function textLength() {
    let result = inp.value.length;
    console.log(result)
    document.querySelector("span").innerHTML = `${result}`;
    if (result <= 10) {
        circle.style.backgroundColor = "green";
    } else if (result > 10 && result < 30) {
        circle.style.backgroundColor = "yellow";
    } else {
        circle.style.backgroundColor = "red";
    }
}
//ilgi skaiciuoja ant button paspaudimo, bet realiai jau buna suskaiciuotas,
// nes vedant po viena raide jau input skaiciuoja automatiskai
btn.onclick = () => {
    textLength();
}
inp.oninput = () => {
    textLength();
}

//antras uzd

btnEmail.onclick = () => {
    inputEmail.style.borderColor = "black";
    inputEmail.style.backgroundColor = "none";
    let l = inputEmail.value.length;
    let emailValue = inputEmail.value;
    if (l > 10 && emailValue.includes('@') && emailValue.includes('.')){
        inputEmail.style.borderColor = "green";
        inputEmail.style.backgroundColor = "green";
        console.log(true)
    } else {
        inputEmail.style.borderColor = "red";
        inputEmail.style.backgroundColor = "red";
    }
}

///// trecia uzd
const icon = document.querySelectorAll("i");
//nuo vieno iki 255 random skaiciu
function randomNum() {
    return Math.floor(Math.random() * 255) + 1;
}

// su for galima padaryti, kad nereiktu kartot
icon[0].onclick = () => {
    icon[0].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}
icon[1].onclick = () => {
    icon[1].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}
icon[2].onclick = () => {
    icon[2].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}
icon[3].onclick = () => {
    icon[3].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}
icon[4].onclick = () => {
    icon[4].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}
icon[5].onclick = () => {
    icon[5].style.color = 'rgb('+randomNum()+', '+randomNum()+', '+randomNum()+')';
}

