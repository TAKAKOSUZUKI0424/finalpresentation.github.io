"use strict";

const button = document.getElementById("Tama");
function TamaSartJump(){
    button.classList.remove("anim_s");
    button.classList.add("jump");
    }
function TamaStopJump(event){
    if(event.animationName === "jump"){
    button.classList.remove("jump");
    button.classList.add("anim_s");
    }
}
button.classList.add("anim_s");
button.addEventListener("mousedown", TamaSartJump);
button.addEventListener("animationend", TamaStopJump);
button.addEventListener("animationcancel", TamaStopJump);


const button2 = document.getElementById("Boo");
function BooSartJump(){
    button2.classList.remove("anim_s2");
    button2.classList.add("sidejump");
}
function BooStopJump(event){
      if(event.animationName === "sidejump"){
      button2.classList.remove("sidejump");
      button2.classList.add("anim_s2");
      }
}
button2.classList.add("anim_s2");
button2.addEventListener("mousedown", BooSartJump);
button2.addEventListener("animationend", BooStopJump);
button2.addEventListener("animationcancel", BooStopJump);

const button3 = document.getElementById("Hanawa");
function HanawaSartJump(){
    button3.classList.remove("anim_s");
    button3.classList.add("elegantJump");
}
function HanawaStopJump(event){
      if(event.animationName === "elegantJump"){
      button3.classList.remove("elegantJump");
      button3.classList.add("anim_s");
      }
}
button3.classList.add("anim_s");
button3.addEventListener("mousedown", HanawaSartJump);
button3.addEventListener("animationend", HanawaStopJump);
button3.addEventListener("animationcancel", HanawaStopJump);


const button4 = document.getElementById("Hamaji");
function HamajiSartJump(){
    button4.classList.remove("anim_s2");
    button4.classList.add("shake");
}
function HamajiStopJump(event){
      if(event.animationName === "shake"){
      button4.classList.remove("shake");
      button4.classList.add("anim_s2");
      }
}
button4.classList.add("anim_s2");
button4.addEventListener("mousedown", HamajiSartJump);
button4.addEventListener("animationend", HamajiStopJump);
button4.addEventListener("animationcancel", HamajiStopJump);


const button5 = document.getElementById("Maruo");
function MaruoSartJump(){
    button5.classList.remove("anim_s");
    button5.classList.add("sideMove");
}
function MaruoStopJump(event){
      if(event.animationName === "sideMove"){
      button5.classList.remove("sideMove");
      button5.classList.add("anim_s");
      }
}
button5.classList.add("anim_s");
button5.addEventListener("mousedown", MaruoSartJump);
button5.addEventListener("animationend", MaruoStopJump);
button5.addEventListener("animationcancel", MaruoStopJump);
