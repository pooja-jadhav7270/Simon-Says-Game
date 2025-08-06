

              //Simon Says Game
              
let gameSeq=[];
let userSeq=[];

let btns=["red","green","purple","yellow"];

let started=false;
let level=0;
let h2=document.querySelector("h2");                                                                                                                                                                                                                                                                                                                                                                                                        

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started= true;
    }
   levelUp();
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
    }

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random btn choose
    let randomX=Math.floor(Math.random()*3);
    let randomcol=btns[randomX];
    let randbtn=document.querySelector(`.${randomcol}`);
    gameSeq.push(randomcol);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b> </br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
       let highScr=`${level}`;
       level++;
    }
}

function btnPrees(){
    //console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPrees);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}