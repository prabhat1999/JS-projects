 
var play1 = 0,play2 = 0,max = 5 ;
var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");
var reset = document.querySelector("#reset");
var maximum = document.querySelector("#max-lim");
var maximumDisplay = document.querySelector("#maxgame");
var firstdisplay = document.querySelector("#firstSc");
var seconddisplay = document.querySelector("#secondSc");
var gameOver = false;


but1.addEventListener("click",function(){
    if(gameOver == false)
    {
        play1++;
        //scoreString();
        if(play1 >= max){
            gameOver = true;
            firstdisplay.classList.add("win-class");
        }
        firstdisplay.textContent = play1;
    
    }
});

but2.addEventListener("click",function(){
    if(gameOver == false)
    {
        play2++;
        //scoreString();
        if(play2 >= max){
            gameOver = true;
            seconddisplay.classList.add("win-class");
        }
        seconddisplay.textContent = play2;
    
    }
});

maximum.addEventListener("change",function(){
    
    max = Number(maximum.value);
    maximumDisplay.textContent = max;
    resetGame();
});

reset.addEventListener("click",resetGame);

function resetGame(){
    gameOver = false;
    play1 = 0;
    play2 = 0;
     
    firstdisplay.textContent = play1;
    firstdisplay.classList.remove("win-class");
    seconddisplay.textContent = play2;
    seconddisplay.classList.remove("win-class");
}
