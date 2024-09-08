let btn = document.querySelector("button");

let checke = 0;

btn.addEventListener("click" , function(){

    if(checke == 0){
        btn.style.backgroundColor = "green";
        btn.style.color = "black";
        btn.innerText = "ADD FRIEND";

        checke = 1;
    }
    else{
        btn.style.backgroundColor = "red";
        btn.style.color = "#fff";
        btn.innerText = "UNFRIEND";
        checke = 0;


    }
});