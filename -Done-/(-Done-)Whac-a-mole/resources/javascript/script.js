// Variables
const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

// ------------------------------------------------

// Button
document.getElementById("button").addEventListener("click", function() {
    if (document.getElementById("button").innerHTML == "Start") {
        // Random Box
        function randomBox() {
            boxes.forEach((box) => {
                box.classList.remove("mole");
            });
            let randomBox = boxes[Math.floor(Math.random() * 9)];
            randomBox.classList.add("mole");
            hitPosition = randomBox.id;
        }

        function moveMole() {
            timerId = setInterval(randomBox, 500);
        }
        moveMole();

        // ------------------------------------------------

        // Whac-a-mole
        boxes.forEach((box) => {
            box.addEventListener("mousedown", () => {
                if (box.id == hitPosition) {
                    box.style.backgroundImage = "var(--red-7)"
                    result++;
                    score.textContent = result;
                    hitPosition = null;
                    setTimeout(function() {
                        box.style.backgroundColor = "var(--gray-2)"
                    }, 50)
                }
            });
        });

        // ------------------------------------------------

        // Timer
        function countDown() {
            currentTime--;
            timeLeft.textContent = currentTime;
            if (currentTime == 0) {
                clearInterval(countDownTimerId);
                clearInterval(timerId);
                alert("GAME OVER! Your final score is " + result);
                location.reload()
            } else if (document.getElementById("button").innerHTML == "Start") {
                clearInterval(countDownTimerId);
                clearInterval(timerId);
            }
        }
        let countDownTimerId = setInterval(countDown, 1000);
        document.getElementById("button").innerHTML = "Stop"

    } else if (document.getElementById("button").innerHTML == "Stop") {
        document.getElementById("button").innerHTML = "Start"
        clearInterval(countDown);
        clearInterval(timerId);
        timeLeft.textContent = "Paused"
    }
});