// Process of the game ==>>>

// step 1 : keypress -> gamestart

// step 2 : btn flash + level1

// step 3 : btn press -> check the user and the game ki array ki value same hai to to Level up kar denge nahi to Game Over likh denga.

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;

let level = 0;
// let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function() {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
btn.classList.add("flash");
setTimeout(() => {
    btn.classList.remove("flash");
},250);
}


function userFlash(btn){
btn.classList.add("userflash");
setTimeout(() => {
    btn.classList.remove("userflash");
},250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // random btn choose
  gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        reset();
    }
};

function btnPress() {
    let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
     
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function reset(){
 started = false;
 gameSeq = [];
 userSeq = [];
 level = 0;
}