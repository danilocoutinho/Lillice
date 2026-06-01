const intro = document.getElementById("intro");
const content = document.getElementById("content");

document
.getElementById("enterBtn")
.onclick = () => {

intro.style.display = "none";

content.style.display = "block";

window.scrollTo(0,0);

};

const startDate =
new Date("2026-01-12T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(diff/(1000*60*60)) % 24;

const minutes =
Math.floor(diff/(1000*60)) % 60;

const seconds =
Math.floor(diff/1000) % 60;

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

document.getElementById("loveDays")
.textContent = days;

}

setInterval(updateCounter,1000);
updateCounter();

const music =
document.getElementById("music");

document
.getElementById("playMusic")
.onclick = () => {

music.play();

};

const images = [

"img/galeria/foto1.jpg",
"img/galeria/foto2.jpg",
"img/galeria/foto3.jpg",
"img/galeria/foto4.jpg",
"img/galeria/foto5.jpg"

];

let current = 0;

function nextSlide(){

current++;

if(current >= images.length)
current = 0;

slide.src = images[current];

}

function prevSlide(){

current--;

if(current < 0)
current = images.length-1;

slide.src = images[current];

}

document
.getElementById("surpriseBtn")
.onclick = () => {

const text =
document.getElementById("surpriseText");

text.style.display = "block";

};