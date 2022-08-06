let galleryWrapper = document.getElementsByClassName("gallery__wrapper");
let galleryItems = document.getElementsByClassName("gallery__item");
const galleryItemWidth = galleryItems[0].getBoundingClientRect().width;
let itemNumber = 0;
galleryWrapper[0].style.left = 0 + "px";
setInterval(()=>{
    if(itemNumber > (galleryItems.length-1)){
        galleryWrapper[0].style.left = 392 + "px";
        itemNumber = 0;
    }
    console.log("setInterval: " + itemNumber);
    galleryWrapper[0].style.left = (galleryWrapper[0].style.left.split("px")[0]-galleryItemWidth-20) + "px";
    itemNumber++;

},2000);

    



