var butt = document.querySelector("button");

butt.addEventListener("click",function(){
    console.log("Button clicked!!");
    
    if(document.body.style.background == "cyan"){
        document.body.style.background = "white";
    }
    else
    {
        document.body.style.background = "cyan";
    }
});