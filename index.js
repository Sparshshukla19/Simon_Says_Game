let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}

function levelUp(){
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3) ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelUp,1000) ;
        }
    }
    else{
        h2.innerText = `game over, your score is${level} press any key to start`;
        reset();
    }
}

function btnPress(){
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
    started=false ;
    gameSeq = [];
    userSeq = [];
    level = 0;
}