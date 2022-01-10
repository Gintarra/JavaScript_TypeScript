const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const box = document.querySelector('.box');
const img1 = document.querySelector('.imgSlide');
const img2 = document.querySelector('.imgSlide1');
const img3 = document.querySelector('.imgSlide2');
const images = document.querySelectorAll('.allImg')
console.log(left, right)
let clickedR = 0;
let clickedF = 0;

img2.style.display = "none"
img3.style.display = "none"

left.onclick = () => {
    console.log("mdk")
    clickedF = 1;
    plusSlides(-1)
}


right.onclick = () => {
    console.log("asd")
    clickedR = 1;
    console.log(clickedR, "o cia")
    k = 0;
    plusSlides(1)
}


let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

let k = 0;
let id = 0;

function showSlides(n) {
    if (n > images.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = images.length
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    // setTimeout(() => position(slideIndex - 1), 3000)
    // images[slideIndex - 1].classList.add("anim2")
    console.log(k, "n")
    id = setInterval(() => position(slideIndex - 1), 2)
    //position(slideIndex-1)
    images[slideIndex - 1].style.display = "flex";
    //images[slideIndex - 1-1].style.display = "flex";
    //k=0;
    //  clickedF = 0;
    //clickedR = 0;
    // images[slideIndex-1].style.right = "0px";
}

function position(i) {
    if (k === 500) {
        clearInterval(id)
        clickedR = 0;
        clickedF = 0;
        k = 0;
        // images[i-1].style.right = `0px`
        images[i-1].style.display = "none"
       images[i].style.left = `0px`

    } else {
        console.log("fsdf")

        for (let j = 0; j < 1; j++) {
            // console.log(clickedR, "bjj")
            if (clickedR === 1){
                images[i-1].style.display = "flex"
                images[i].style.display = "flex"
                images[i-1].style.right = `${k}px`;
                images[i].style.left = `${500-k}px`;
               // images[i+1].style.display = "flex";
                console.log(`${k}px`)
            }
            if (clickedF === 1) images[i].style.left = `${500 - k}px`
            //images[i - 1].style.right = `${n}px`
            //images[i].style.right = `${500 - k}px`
        }
        k += 10;
    }

}