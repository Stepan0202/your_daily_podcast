
let galleryMain = document.querySelector(".gallerey").appendChild(document.querySelector(".gallery__wrapper").cloneNode(true));
let galleryWrapper = document.querySelectorAll(".gallery__wrapper");
const galleryMainRect = galleryMain.getBoundingClientRect();
const galleryMainWidth = galleryMainRect.right - galleryMainRect.left;


window.addEventListener('scroll', init,{"once" : true});

//helpfull function to get wright position of element
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }

function init(){
    let n1 = 1;
    let n2 = 1;
    let controllN = 0;
    setInterval(()=>{
        console.log("START init func. controllN = " + controllN);
        console.log("START init func. galleryMainWidth = " + galleryMainWidth);
        galleryWrapper[0].style.left = -n1 + "%";
        galleryWrapper[1].style.left = -n2 + "%";
        
        console.log( "0 element left: " + offset(galleryWrapper[0]).left);
        console.log( "1 element left: " + offset(galleryWrapper[1]).left);
        n1++;
        n2++;
        if(offset(galleryWrapper[controllN]).left < -(galleryMainWidth/1.8)){
            if(controllN == 0){
                console.log("0: Math.abs(offset(galleryWrapper[controllN]).left) = " + Math.abs(offset(galleryWrapper[controllN]).left));
                galleryWrapper[controllN].style.opacity = 0;
                galleryWrapper[controllN].removeAttribute("style");
                n1 = -62;
                controllN = 1;
                galleryWrapper[0].style.opacity = 100;
            }
            else {
                console.log("CHANGE in 1");
                galleryWrapper[controllN].style.opacity = 0;
                galleryWrapper[controllN].removeAttribute("style");
                n2 = -62;
                controllN = 0;
                galleryWrapper[1].style.opacity = 100;
            }
        }

    }, 100)
}


