
let offset = 0;
const permisContent = document.querySelector(".permissions__content");
let imagesCount = document.getElementsByClassName("permissions__image").length;
document.querySelector(".permissions__left").onclick = moveLeft;
document.querySelector(".permissions__right").onclick = moveRight;

function moveLeft(){
    
    
    offset = offset - 1138 / 1349/4 *100;
    if(Math.abs(offset) > 1138 / 1349/4 *100 *imagesCount) offset = 0;
    permisContent.style.left = offset + "%";
    console.log("MovingLeft. Offset: " + offset);
}

function moveRight(){
    
    
    offset = offset + 1138 / 1349/4 *100;
    if(offset > 0) offset = 0;
    permisContent.style.left = offset + "%";
    console.log("MovingRight. Offset: " + offset);
}