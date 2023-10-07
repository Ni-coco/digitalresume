let green = document.querySelector(".green");
let lightblue = document.querySelector(".lightblue");
let purple = document.querySelector(".purple");
let peach = document.querySelector(".peach");

let current = "green";

green.addEventListener('click', (e) => {
    remove(current);
    set("green");
});

lightblue.addEventListener('click', (e) => {
    remove(current);
    set("lightblue");
});

purple.addEventListener('click', (e) => {
    remove(current);
    set("purple");
});

peach.addEventListener('click', (e) => {
    remove(current);
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

    current = color;
}

function remove(current) {
    if (current == "")
        return;
    
    document.querySelector("body").classList.remove(current + "1");
    document.querySelector(".name").classList.remove(current + "2");
    document.querySelector(".info").classList.remove(current + "2");
    document.querySelector("footer").classList.remove(current + "2");

    let cards = document.querySelectorAll(".card");
    for (let card of cards)
        card.classList.remove(current + "3");

    let titles = document.querySelectorAll(".title");
    for (let title of titles)
        title.classList.remove(current + "4");

    let scards = document.querySelectorAll(".scard");
    for (let scard of scards)
        scard.classList.remove(current + "5");

    let lcards = document.querySelectorAll(".lcard");
    for (let lcard of lcards)
        lcard.classList.remove(current + "5");
}