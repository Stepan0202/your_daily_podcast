
let galleryImgs = document.querySelectorAll(".gallery__img");
let galleryItems = document.querySelectorAll(".gallerey__item");
let gallery = document.querySelector(".gallery__wrapper");
// gallerey.innerHTML = "";
gallery.onclick = replaceItems;
// window.onload = init;

function init(){
    let i = 0;
    galleryItems.forEach(element => {
        var left = i*400;
        element.style.left = left +"px";
        console.log(element);
        console.log(element.style.left);
        i++;
    });
    setInterval(replaceItems, 1000);
}


let i = 0;
function replaceItems(){
    if(i > galleryItems.length) i = 0;
    console.log(gallery.childNodes);
    console.log(galleryItems[i]);
    galleryItems[i].style.left = -100 + 'px';
    console.log(i);
    i++;
}




// gallerey.appendChild(galleryItems[0]);
// console.log(galleryImgs);
// console.log(galleryItems);
