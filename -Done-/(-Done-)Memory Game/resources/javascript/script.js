// Images
let blank = "/resources/images/blank.png"
let cheeseburger = "/resources/images/cheeseburger.png"
let fries = "/resources/images/fries.png"
let hotdog = "/resources/images/hotdog.png"
let ice = "/resources/images/ice-cream.png"
let milkshake = "/resources/images/milkshake.png"
let pizza = "/resources/images/pizza.png"
let white = "/resources/images/white.png"

// --------------------------------

// All Cards
let AllCards = [
    { nums: "", name: "blank", type: blank },
    { nums: "0", name: "cheeseburger", type: cheeseburger },
    { nums: "1", name: "fries", type: fries },
    { nums: "2", name: "hotdog", type: hotdog },
    { nums: "3", name: "ice-cream", type: ice },
    { nums: "4", name: "milkshake", type: milkshake },
    { nums: "5", name: "pizza", type: pizza },
    { nums: "", name: "white", type: white },
    { nums: "", name: "blank", type: blank },
    { nums: "", name: "cheeseburger", type: cheeseburger },
    { nums: "", name: "fries", type: fries },
    { nums: "", name: "hotdog", type: hotdog },
    { nums: "", name: "ice-cream", type: ice },
    { nums: "", name: "milkshake", type: milkshake },
    { nums: "", name: "pizza", type: pizza },
    { nums: "", name: "white", type: white }
];
let PlayableCards = [
    { nums: "0", name: "cheeseburger", type: cheeseburger },
    { nums: "1", name: "fries", type: fries },
    { nums: "2", name: "hotdog", type: hotdog },
    { nums: "3", name: "ice-cream", type: ice },
    { nums: "4", name: "milkshake", type: milkshake },
    { nums: "5", name: "pizza", type: pizza },
    { nums: "0", name: "cheeseburger", type: cheeseburger },
    { nums: "1", name: "fries", type: fries },
    { nums: "2", name: "hotdog", type: hotdog },
    { nums: "3", name: "ice-cream", type: ice },
    { nums: "4", name: "milkshake", type: milkshake },
    { nums: "5", name: "pizza", type: pizza }
];
// --------------------------------

// Variables
let ScoreDisplay = document.getElementById("score");
let Container = document.getElementById("container");
let RandomCards = PlayableCards.sort(() => Math.random() - 0.5);
// --------------------------------

// Setting Blank Images
for (let i = 0; i < PlayableCards.length; i++) {
    let img = document.createElement("img");
    Container.appendChild(img);
    img.setAttribute("src", blank);
    img.setAttribute("id", "a" + i);
    img.setAttribute("class", "blank");
    Container.setAttribute("onclick", "check()")
};
// --------------------------------

// Flipping Cards
let img11 = document.querySelector("#a0")
img11.setAttribute("onclick", "clicked11()")

function clicked11() {
    img11.setAttribute("src", RandomCards[0].type)
    img11.setAttribute("class", "open")
}

let img12 = document.querySelector("#a1")
img12.setAttribute("onclick", "clicked12()")

function clicked12() {
    img12.setAttribute("src", RandomCards[1].type)
    img12.setAttribute("class", "open")
}

let img13 = document.querySelector("#a2")
img13.setAttribute("onclick", "clicked13()")

function clicked13() {
    img13.setAttribute("src", RandomCards[2].type)
    img13.setAttribute("class", "open")
}

let img14 = document.querySelector("#a3")
img14.setAttribute("onclick", "clicked14()")

function clicked14() {
    img14.setAttribute("src", RandomCards[3].type)
    img14.setAttribute("class", "open")
}

let img21 = document.querySelector("#a4")
img21.setAttribute("onclick", "clicked21()")

function clicked21() {
    img21.setAttribute("src", RandomCards[4].type)
    img21.setAttribute("class", "open")
}

let img22 = document.querySelector("#a5")
img22.setAttribute("onclick", "clicked22()")

function clicked22() {
    img22.setAttribute("src", RandomCards[5].type)
    img22.setAttribute("class", "open")
}

let img23 = document.querySelector("#a6")
img23.setAttribute("onclick", "clicked23()")

function clicked23() {
    img23.setAttribute("src", RandomCards[6].type)
    img23.setAttribute("class", "open")
}

let img24 = document.querySelector("#a7")
img24.setAttribute("onclick", "clicked24()")

function clicked24() {
    img24.setAttribute("src", RandomCards[7].type)
    img24.setAttribute("class", "open")
}

let img31 = document.querySelector("#a8")
img31.setAttribute("onclick", "clicked31()")

function clicked31() {
    img31.setAttribute("src", RandomCards[8].type)
    img31.setAttribute("class", "open")
}

let img32 = document.querySelector("#a9")
img32.setAttribute("onclick", "clicked32()")

function clicked32() {
    img32.setAttribute("src", RandomCards[9].type)
    img32.setAttribute("class", "open")
}

let img33 = document.querySelector("#a10")
img33.setAttribute("onclick", "clicked33()")

function clicked33() {
    img33.setAttribute("src", RandomCards[10].type)
    img33.setAttribute("class", "open")
}

let img34 = document.querySelector("#a11")
img34.setAttribute("onclick", "clicked34()")

function clicked34() {
    img34.setAttribute("src", RandomCards[11].type)
    img34.setAttribute("class", "open")
}

// --------------------------------

// Checking Cards
function check() {
    ScoreDisplay.innerHTML = " " + document.querySelectorAll(".found").length / 2
    if (document.querySelectorAll(".open").length == 2) {
        let open = document.querySelectorAll(".open");
        // rename open images to 1 and 2
        open.forEach(opened => {
            opened.setAttribute("class", "two");
        })
        document.querySelector(".two").setAttribute("class", "one");
        // check the image file
        function img(src) {
            document.querySelector(src).getAttribute("src")
        };
        // if same
        if (document.querySelector(".one").getAttribute("src") == document.querySelector(".two").getAttribute("src")) {
            console.log("same!")

            document.querySelector(".one").setAttribute("src", white);
            document.querySelector(".one").setAttribute("onclick", "");
            document.querySelector(".one").setAttribute("class", "found");

            document.querySelector(".two").setAttribute("src", white);
            document.querySelector(".two").setAttribute("onclick", "");
            document.querySelector(".two").setAttribute("class", "found");

            Container.removeEventListener("click", check());
            // if different
        } else if (document.querySelector(".one").getAttribute("src") !== document.querySelector(".two").getAttribute("src")) {
            console.log("not same!")
            setTimeout(function() {
                document.querySelector(".one").setAttribute("src", blank);
                document.querySelector(".one").setAttribute("class", "blank");

                document.querySelector(".two").setAttribute("src", blank);
                document.querySelector(".two").setAttribute("class", "blank");
            }, 500);
        }
    } else if (document.querySelectorAll(".found").length == RandomCards.length) {
        alert("YOU WON!!!")
        document.location.reload(true)
    }
}