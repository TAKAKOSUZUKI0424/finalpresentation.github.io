"use strict";

function startJump(){
    button.classList.remove("anim_s");
    button.classList.add("jump");
    }
    function stopJump(event){
    if(event.animationName === "jump"){
    button.classList.remove("jump");
    button.classList.add("anim_s");
    }
    }
    const button = document.getElementById("clickmove");
    button.classList.add("anim_s");
    button.addEventListener("mousedown", startJump);
    button.addEventListener("animationend", stopJump);
    button.addEventListener("animationcancel", stopJump);

    