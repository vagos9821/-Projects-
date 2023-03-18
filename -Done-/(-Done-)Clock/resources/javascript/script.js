// Clock
function time() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let dt = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = dt;
}
setInterval(time, 1000);


// Button
let btn = document.getElementById("party");
btn.addEventListener("click", party);
btn.addEventListener("click", spin);


// Background Party Time
function party() {
    if (document.getElementById("container").className == "container") {

        document.getElementById("container").className = "stopped";

    } else if (document.getElementById("container").className == "stopped") {

        document.getElementById("container").className = "container";
    }
}


// Button Party Time
function spin() {
    if (document.getElementById("party").className == "party") {

        document.getElementById("party").className = "spin";

    } else if (document.getElementById("party").className == "spin") {

        document.getElementById("party").className = "party"
    }
}