function getSize() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 767)
        return "S";
    else if (viewportWidth > 767 && viewportWidth < 1105)
        return "M";
    else
        return "L";
}

const cards = {
    skills: document.getElementById("skills"),
    projects: document.getElementById("projects"),
    experience: document.getElementById("experience"),
    education: document.getElementById("education")
}
let currentlyOpen = null;

for (const cardName in cards) {
    const card = cards[cardName];

    card.addEventListener("click", function() {
        showCard(card);
        currentlyOpen = card;
    });

    document.addEventListener("click", function(event) {
        if (currentlyOpen == card && !card.contains(event.target)) {
            displayCards(card);
            currentlyOpen = null;
        }
    });
}

function showCard(card) {
    let size = getSize()
    for (const i in cards) {
        //Size up
        if (cards[i] == card) {
            cards[i].style.animation = "sizeup" + size + " 400ms 400ms forwards";
            cards[i].querySelector("p").style.animation = "fadeout 400ms 400ms forwards";
            cards[i].querySelector("img").style.animation = "fadeout 400ms 400ms forwards";
            cards[i].style.backgroundColor = "#EAC4D5";
            setTimeout(() => {
                cards[i].querySelector("div").style.display = "block";
                cards[i].querySelector("div").style.animation = "fadein 200ms forwards";
            }, 800);
        }
        //Dismiss others
        if (cards[i] !== card) {
            cards[i].style.animation = "fadeout 400ms forwards";
        }
    }
}

function displayCards(card) {
    let size = getSize()
    for (const i in cards) {
        //Size down
        if (cards[i] == card) {
            cards[i].style.animation = "sizedown" + size + " 200ms forwards";
            setTimeout(() => {
                cards[i].style.animation = "";
            }, 200);
            cards[i].querySelector("p").style.animation = "";
            cards[i].querySelector("img").style.animation = "";
            cards[i].querySelector("p").style.display = "block";
            cards[i].querySelector("img").style.display = "block";
            cards[i].style.backgroundColor = ""
            cards[i].querySelector("div").style.animation = "";
            cards[i].querySelector("div").style.display = "none";
        }
        //Show hidden cards
        if (cards[i] !== card) {
            setTimeout(() => {
                cards[i].style.animation = "fadein 400ms forwards";
            }, 200);
        }
    }
}