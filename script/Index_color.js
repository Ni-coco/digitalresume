let green = document.querySelector(".green");
let lightblue = document.querySelector(".lightblue");
let purple = document.querySelector(".purple");
let peach = document.querySelector(".peach");

let savedColor = localStorage.getItem("userColor");
let currentColor = savedColor !== null ? savedColor : "green";
set(currentColor);

green.addEventListener('click', (e) => {
    remove(currentColor);
    set("green");
});

lightblue.addEventListener('click', (e) => {
    remove(currentColor);
    set("lightblue");
});

purple.addEventListener('click', (e) => {
    remove(currentColor);
    set("purple");
});

peach.addEventListener('click', (e) => {
    remove(currentColor);
    set("peach");
});

function set(color) {
    document.querySelector("body").classList.add(color + "1");
    document.querySelector(".name").classList.add(color + "2");
    document.querySelector(".info").classList.add(color + "2");
    document.querySelector("footer").classList.add(color + "2");

    let cards = document.querySelectorAll(".card");
    for (let card of cards)
        card.classList.add(color + "3");

    let titles = document.querySelectorAll(".title");
    for (let title of titles)
        title.classList.add(color + "4");

    let scards = document.querySelectorAll(".scard");
    for (let scard of scards)
        scard.classList.add(color + "5");

    let lcards = document.querySelectorAll(".lcard");
    for (let lcard of lcards)
        lcard.classList.add(color + "5");

    currentColor = color;
    changeColor(currentColor);
}

function remove(currentColor) {
    if (currentColor == "")
        return;
    
    document.querySelector("body").classList.remove(currentColor + "1");
    document.querySelector(".name").classList.remove(currentColor + "2");
    document.querySelector(".info").classList.remove(currentColor + "2");
    document.querySelector("footer").classList.remove(currentColor + "2");

    let cards = document.querySelectorAll(".card");
    for (let card of cards)
        card.classList.remove(currentColor + "3");

    let titles = document.querySelectorAll(".title");
    for (let title of titles)
        title.classList.remove(currentColor + "4");

    let scards = document.querySelectorAll(".scard");
    for (let scard of scards)
        scard.classList.remove(currentColor + "5");

    let lcards = document.querySelectorAll(".lcard");
    for (let lcard of lcards)
        lcard.classList.remove(currentColor + "5");
}

function changeColor(color) {
    localStorage.setItem("userColor", color);
}