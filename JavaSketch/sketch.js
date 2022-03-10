'use strict';

//* CONSTANTS
const shakeBttn = document.querySelector(".shake");
const canvas = document.querySelector("#screen");
const bg = document.querySelector(".sketch-bg");
const knobs = document.querySelector(".knob-container");
//! knobs must also be grabbed to be part of shake animation

//* SHAKE SCREEN ANIMATION
shakeBttn.addEventListener("click", function(){
    bg.classList.toggle("shake-vertical");
    knobs.classList.toggle("shake-vertical");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sketch();
    setTimeout(function(){
        bg.classList.toggle("shake-vertical");
        knobs.classList.toggle("shake-vertical");
    }, 2000);
    //settimeout is to remove the shake class again, so bttn is re-pressable
});

//* CANVAS DEFAULTS
canvas.width = 610;
canvas.height = 315;
const ctx = canvas.getContext('2d');
let x = 300;
let y = 180;
ctx.strokeStyle = "#36454F";
ctx.lineWidth = 3;
ctx.lineCap = "round";

//* CANVAS PEN STARTING POINT
function sketch(){
    x = 300;
    y = 180;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x += .5, y);
    ctx.stroke();
}
sketch();
//TODO consider changing all else ifs to event.keyCode
//* W A S D DRAWING CONTROLS
document.addEventListener("keydown", handleKeyPress);
const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
function handleKeyPress(event){
    ctx.beginPath();
    if(event.keyCode === 87){
        //* up / w
        y = y - 1;
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if(event.key.includes("a")){
        //* left
        x = x - 1;
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if(event.key.includes("s")){
        //* down
        y = y + 1;
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if(event.key.includes("d")){
        //* right
        x = x + 1;
        ctx.lineTo(x, y);
        ctx.stroke();
    }

};

// const w = document.querySelector(".w");
// const a = document.querySelector(".a");
// const s = document.querySelector(".s");
// const d = document.querySelector(".d");
document.addEventListener("keydown", handleKeyDownGlow);
function handleKeyDownGlow(event){
    if(event.keyCode === 87){
        w.classList.add("glow");
    } else if(event.key.includes("a")){
        a.classList.add("glow");
    } else if(event.key.includes("s")){
        s.classList.add("glow");
    } else if(event.key.includes("d")){
        d.classList.add("glow");
    }
}
document.addEventListener("keyup", handleKeyUpGlow);
function handleKeyUpGlow(event){
    if(event.keyCode === 87){
        w.classList.remove("glow");
    } else if(event.key.includes("a")){
        a.classList.remove("glow");
    } else if(event.key.includes("s")){
        s.classList.remove("glow");
    } else if(event.key.includes("d")){
        d.classList.remove("glow");
    }
}


//* move marker to ctx position


//* DOWNLOAD DRAWING BUTTON
const dwnld = document.querySelector("#download");
dwnld.addEventListener("click", function(){
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
});

//add animation 2 modal & on click hide & show modal
const modal = document.querySelector(".modal");
const lineColor = document.querySelector(".color-modal");
const lineSize = document.querySelector(".line-modal");
const closeModalBttn = document.querySelector(".close-modal");
const divTwelve = document.querySelector(".div12");
const messageOne = document.querySelector(".message-1");
const messageTwo = document.querySelector(".message-2");


lineColor.addEventListener("click", function(){
    modal.classList.toggle("hide");
    modal.classList.toggle("slide-in-blurred-left");
    divTwelve.classList.toggle("move-behind");
    messageOne.classList.remove("hide");
    messageTwo.classList.add("hide");
});
lineSize.addEventListener("click", function(){
    modal.classList.toggle("hide");
    modal.classList.toggle("slide-in-blurred-left");
    divTwelve.classList.toggle("move-behind");
    messageTwo.classList.remove("hide");
    messageOne.classList.add("hide");

    
});
closeModalBttn.addEventListener("click", function(){
    modal.classList.toggle("hide");
    divTwelve.classList.toggle("move-behind");
});
//* toggle between color bttn txt and line width txt


ColorPicker(
    document.getElementById('color-picker'),
    function(hex, hsv, rgb) {
        console.log(hsv.h, hsv.s, hsv.v);         // [0-359], [0-1], [0-1]
        console.log(rgb.r, rgb.g, rgb.b);         // [0-255], [0-255], [0-255]
        ctx.strokeStyle = hex;
});

function increaseLineSize(){
    ctx.lineWidth += 1;
};
function decreaseLineSize(){
    ctx.lineWidth -= 1;
};

//onclick go to homepage
const logo = document.querySelector("#logo");
logo.addEventListener("click", function(){
    window.location.href=window.location.href;
});
