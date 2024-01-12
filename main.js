const ianu = document.querySelector(".bars-menu");

const line1 = document.querySelector(".line1__bars-menu");
const line2 = document.querySelector(".line2__bars-menu");
const line3 = document.querySelector(".line3__bars-menu");

const menu = document.querySelector(".container");


ianu.addEventListener("click",()=>{
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
    menu.classList.toggle("rigth")
});
