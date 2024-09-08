let ctn = document.querySelector(".contain");
let love = document.querySelector("i");

ctn.addEventListener("dblclick", function(){

  love.style.transform = " translate(-50%, -50%) scale(1)"


  setTimeout(function(){
  love.style.transform = " translate(-50%, -50%) scale(0)"
     
  },1000)
})