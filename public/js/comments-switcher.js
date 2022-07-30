let items = document.querySelectorAll('.listener-fb__item');
let itemsContainer = document.querySelector('.listener-fb__item-container');
let leftButton = document.querySelector('.listener-fb__left-button');
let rightButton = document.querySelector('.listener-fb__right-button');

let cuurentContainerPosition = itemsContainer.style.left;
let moveStep = items[0].getBoundingClientRect().width;

let viewportWidth = document.documentElement.clientWidth;
let itemsContainerWidth = items[0].getBoundingClientRect().width * items.length;
let isRightActive = false;
let isLeftActive = true;


window.onload = function(){
leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;
}

function moveLeft(){
    if(isLeftActive){
    isRightActive = true;
    rightButton.style.borderColor = "black";
    rightButton.style.color = "black";

    console.log(document.documentElement.clientWidth);
    itemsContainer.style.left = (cuurentContainerPosition - moveStep) + "px";
    cuurentContainerPosition -= moveStep;
    console.log(itemsContainer.getBoundingClientRect());
    console.log("viewportWidth - itemsContainerWidth = " + (viewportWidth - itemsContainerWidth));
    if(cuurentContainerPosition < viewportWidth - itemsContainerWidth){
        
        isLeftActive = false; 
        leftButton.style.borderColor = "#CD4631";
        leftButton.style.color = "#CD4631";
    }
    else{

    }
    }
    
}

function moveRight(){

    if(isRightActive){
            isLeftActive = true;
            leftButton.style.borderColor = "black";
            leftButton.style.color = "black";

            console.log("cuurentContainerPosition " + cuurentContainerPosition);
            itemsContainer.style.left = (cuurentContainerPosition + moveStep) + "px";
            cuurentContainerPosition += moveStep;
            console.log(itemsContainer.getBoundingClientRect());
            console.log("cuurentContainerPosition after increment " + cuurentContainerPosition);
            if(cuurentContainerPosition >= 0){
                console.log("cuurentContainerPosition in if statement " + cuurentContainerPosition);
                isRightActive = false; 
                rightButton.style.borderColor = "#CD4631";
                rightButton.style.color = "#CD4631";
            }
    }
    
}