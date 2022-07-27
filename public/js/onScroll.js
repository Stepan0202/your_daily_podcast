const scrolableItems = document.querySelectorAll('.scrolableItem');



if(scrolableItems.length > 0){
window.addEventListener('scroll', animateOnScroll);
function animateOnScroll(params){
    console.log("began of animateOnScroll");
    for (let index = 0; index < scrolableItems.length; index++) {
        const scrolabelItem = scrolableItems[index];
        console.log("scrolabelItem: " + scrolabelItem);
        const scrolabelItemHeight = scrolabelItem.offsetHeight;
        console.log("scrolabelItemHeight: " + scrolabelItemHeight);
        const scrolabelItemPosition = offset(scrolabelItem).top;
        console.log("scrolabelItemPosition: " + scrolabelItemPosition);
        const scrollStart = 4;
        console.log("window.innerHeight: " + window.innerHeight);
        let scrollItemPoint = window.innerHeight - scrolabelItemHeight / scrollStart;
        console.log("ScrollX: " + scrollX);
        console.log("ScrollY: " + scrollY);
        if (scrolabelItemHeight > window.innerHeight) {
            scrollItemPoint = window.innerHeight - window.innerHeight / scrollStart;
        }

        if((scrollY > scrolabelItemPosition - scrollItemPoint) & (scrollY < scrolabelItemHeight + scrolabelItemPosition)){
            scrolabelItem.classList.add('scrolabel__active');
        }
        else{
            scrolabelItem.classList.remove('scrolabel__active');
        }
    }
}
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
}

animateOnScroll();