document.querySelector(".burger").addEventListener("click", open);

function open() {
    if (document.getElementById("menu").className == "menu") {
        document.getElementById("menu").className = "flex";
        document.body.style.overflowY = "hidden";
    } else if (document.getElementById("menu").className == "flex") {
        document.getElementById("menu").className = "menu";
        document.body.style.overflowY = "auto";
    }
}

document.querySelector(".burger").addEventListener("click", ani);

function ani() {
    if (document.getElementById("a").className !== "x") {
        document.getElementById("a").className = "x";
    } else if (document.getElementById("a").className === "x") {
        document.getElementById("a").className = "xa";
    }

    if (document.getElementById("c").className !== "z") {
        document.getElementById("c").className = "z";
    } else if (document.getElementById("c").className === "z") {
        document.getElementById("c").className = "zc";
    }

    if (document.getElementById("b").className !== "y") {
        document.getElementById("b").className = "y";
    } else if (document.getElementById("b").className === "y") {
        document.getElementById("b").className = "yb";
    }
}