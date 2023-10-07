let green = document.querySelector(".green");
let lightblue = document.querySelector(".lightblue");
let purple = document.querySelector(".purple");
let peach = document.querySelector(".peach");

let savedColor = localStorage.getItem("userColor");
let currentColor = savedColor !== null ? savedColor : "green";
set(currentColor);

green.addEventListener("click", (e) => {
    remove(currentColor);
    set("green");
});

lightblue.addEventListener("click", (e) => {
    remove(currentColor);
    set("lightblue");
});

purple.addEventListener("click", (e) => {
    remove(currentColor);
    set("purple");
});

peach.addEventListener("click", (e) => {
    remove(currentColor);
    set("peach");
});

function set(color) {
    document.querySelector("body").classList.add(color + "1");
    document.querySelector(".name").classList.add(color + "2");
    document.querySelector(".info").classList.add(color + "2");

    document.querySelector(".about").classList.add("about" + color);
    document.querySelector(".linkto").classList.add("linkto" + color);
    document.querySelector(".contact").classList.add("contact" + color);
    document.querySelector(".news").classList.add("news" + color);

    currentColor = color;
    changeColor(currentColor);
}

function remove(currentColor) {
    if (currentColor == "") return;
    document.querySelector("body").classList.remove(currentColor + "1");
    document.querySelector(".name").classList.remove(currentColor + "2");
    document.querySelector(".info").classList.remove(currentColor + "2");

    document.querySelector(".about").classList.remove("about" + currentColor);
    document.querySelector(".linkto").classList.remove("linkto" + currentColor);
    document.querySelector(".contact").classList.remove("contact" + currentColor);
    document.querySelector(".news").classList.remove("news" + currentColor);
}

function changeColor(color) {
    localStorage.setItem("userColor", color);
}