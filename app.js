let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let maxLevel = 0;

let h2 = document.querySelector("h2");

// START GAME
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// FLASH FUNCTIONS
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

// LEVEL UP
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level} | Highest Level: ${maxLevel}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

// CHECK ANSWER
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > maxLevel) {
            maxLevel = level;
        }

        h2.innerHTML = `Game Over!<br>
        Your Score: <b>${level}</b><br>
        Highest Level: <b>${maxLevel}</b><br>
        Press any key to restart`;

        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 150);

        reset();
    }
}

// BUTTON PRESS
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(btn => btn.addEventListener("click", btnPress));

// RESET
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// RULES TOGGLE
let rulesBtn = document.querySelector("#rulesBtn");
let rulesBox = document.querySelector("#rulesBox");
let closeRules = document.querySelector("#closeRules");

rulesBtn.addEventListener("click", () => {
    rulesBox.classList.toggle("hidden");
});

closeRules.addEventListener("click", () => {
    rulesBox.classList.add("hidden");
});
