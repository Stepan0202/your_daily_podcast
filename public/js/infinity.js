
let galleryImgs = document.querySelectorAll(".gallery__img");
let galleryItems = document.querySelectorAll(".gallerey__item");
let gallery = document.querySelector(".gallery__wrapper");
// gallerey.innerHTML = "";
window.addEventListener('click', init);

function init(){
    let i = 0;
        let itemRect = galleryItems[0].getBoundingClientRect();
        setInterval(function(){
            gallery.style.left = (gallery.style.left.split('px')[0]-1) + "px";
            // console.log(gallery.style.left.split('px')[0]);
        },1);
        setInterval(function(){
            if(offset(gallery).left < -1*(itemRect.right-itemRect.left)){
            if(i == galleryItems.length) i = 0;
            console.log("gallery move. Step: " + i );
            // gallery.replaceChild(galleryItems[i], galleryItems[galleryItems.length-1]);
            gallery.appendChild(galleryItems[i].cloneNode(true));

            // gallery.appendChild(galleryItems[i]);
            console.log("Nodes in gallerey: " + gallery.childNodes.length );
            i++;
            }
        },200)
        setInterval(function(){
            console.log("REMOVING");
            gallery.removeChild(document.querySelector('.gallerey__item:first-child'));
        },500)
    
}


function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
