function toggleMobileMenu(className)
{
    let elements = document.getElementsByClassName(className);
    let mobileWraps = document.getElementsByClassName("mobileWrap");
    mobileWraps[0].classList.toggle("mobileSlide");
    mobileWraps[1].classList.toggle("mobileSlide");

    for(i = 0; i < elements.length; i++){
        elements[i].classList.toggle("toggleOn");
    }
}

const mobileSlideHide = (e, className) => {
    e.parentElement.classList.toggle("mobileSlideHide");
}