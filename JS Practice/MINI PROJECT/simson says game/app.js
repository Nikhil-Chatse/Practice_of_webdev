let gamesqnce =[];
let usersqnce =[];

let btns =["yellow", "orange", "blue" , "red"];
let p= document.querySelector("p");
let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false);
   console.log("started");
    
    started == true;
    
    
    levelUp();
});

function btnFlash(fbtn){
    fbtn.classList.add("flash");

    setTimeout(function(){
        fbtn.classList.remove("flash");
    }, 1000);
}


function levelUp(){
   level++;
    p.innerText =`LEVEL ${level}`;
     
   let randidx = Math.floor(Math.random() * 3);
   let randColor = btns[randidx];
   let randBtn = document.querySelector(`.${randColor}`);
   console.log(randidx);
   console.log(randColor);
   console.log(randBtn);

    btnFlash(randBtn);
}