var butt = document.querySelector("button");

butt.addEventListener("click",function(){
/*    if(document.body.style.background == "cyan"){
        document.body.style.background = "white";
    }
    else
    {
        document.body.style.background = "cyan";
    } */

    document.body.classList.toggle("bg-cyan");
});