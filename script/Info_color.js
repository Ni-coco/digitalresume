let green = document.querySelector(".green");
let lightblue = document.querySelector(".lightblue");
let purple = document.querySelector(".purple");
let peach = document.querySelector(".peach");

let current = "green";

green.addEventListener("click", (e) => {
    remove(current);
    set("green");
});

lightblue.addEventListener("click", (e) => {
    remove(current);
    set("lightblue");
});

purple.addEventListener("click", (e) => {
    remove(current);
    set("purple");
});

peach.addEventListener("click", (e) => {
    remove(current);
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

    current = color;
}

function remove(current) {
    if (current == "") return;
    document.querySelector("body").classList.remove(current + "1");
    document.querySelector(".name").classList.remove(current + "2");
    document.querySelector(".info").classList.remove(current + "2");

    document.querySelector(".about").classList.remove("about" + current);
    document.querySelector(".linkto").classList.remove("linkto" + current);
    document.querySelector(".contact").classList.remove("contact" + current);
    document.querySelector(".news").classList.remove("news" + current);
}
