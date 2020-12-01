var character = 
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
      character.classList.add("animate");  
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 &&
        characterTop>=130){
            block.style.animation = "none";
            block.style.display = "none";
            //alert("Game Over :(")
            location.href = "../Lose.html";
        }
},10); 

var delay=3000; //3 segundos
setTimeout(function(){
    location.href = "../FlappyBird/FB2.html";
        //o código vai ser executado em 7 segundos
},delay);

let elemento = document.querySelector('#contador');
		let contador = 24;
		
		setInterval(() => elemento.innerHTML = contador++, 1000);