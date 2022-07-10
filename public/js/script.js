window.onload = init;
let educationItems = document.getElementsByClassName("education__item");
let educationSwitcher= document.getElementsByClassName("education__switcher-element");

function init(){
    sliderInit();
}

function sliderInit() {
    placeDots();
    for (let i = 0; i < educationSwitcher.length; i++){
        educationSwitcher[i].onclick = changeSlide;
    }

}

function changeSlide(eventObj){
    let educationSwitcherArray = Array.from(educationSwitcher);
    let elementIndex = educationSwitcherArray.indexOf(eventObj.target);
    changeAttribute(educationItems, "class", "education__item invisible");
    changeAttribute(educationSwitcher, "src", "img/switcher_oval.jpg");
    eventObj.target.setAttribute("src", "img/switcher_oval-active.jpg");
    let firstElement = elementIndex*4;
    for(var i = firstElement; i < firstElement + 4; i++){
        educationItems[i].setAttribute("class", "education__item");
    }   
}

const placeDots = () => {
    const itemsCount = document.getElementsByClassName("education__item").length;
    const visibleItemsCount = itemsCount - document.getElementsByClassName("invisible").length
    const dotsCount = Math.ceil(itemsCount/visibleItemsCount);
    const switcherInnerHTML = "<img src=\"img/switcher_oval.jpg\" alt=\"\" class=\"education__switcher-element\">";
    let dots = "<img src=\"img/switcher_oval-active.jpg\" alt=\"\" class=\"education__switcher-element\">";
    for(var i = 1; i < dotsCount; i++){
       dots = dots+switcherInnerHTML;
    }

    document.getElementsByClassName("education__switcher")[0].innerHTML = dots;
    
}

function changeAttribute(array, attribute, newValue, pos = 0, length = array.length){
    // let length = array.length;
    console.log("LENGTH in changeImage func:" + length);
    for(var i = pos; i < length+pos; i++){
        console.log("LENGTH in loop of changeImage func:" + length);
        array[i].setAttribute(attribute, newValue);
    }
}




