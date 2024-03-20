const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
let count = 0;

decrease.onclick = function(){
    count--;
   document.getElementById("label").textContent = count
}

increase.onclick = function(){
    count++;
   document.getElementById("label").textContent = count
}

reset.onclick = function(){
    count=0;
   document.getElementById("label").textContent = count
}