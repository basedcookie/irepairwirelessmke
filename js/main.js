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

const toggleForm = (e, formToggle) => {
    if(e.classList.contains('btnSelected')) return false;

    let btnToggle = {'contact': 'quote_btn', 'quote': 'contact_btn'};
    document.getElementById(btnToggle[formToggle]).classList.toggle('btnSelected');
    e.classList.toggle('btnSelected');

    let quoteFields = document.getElementById('quote_form');
    quoteFields.classList.toggle('formDisabled');
    if(formToggle == 'quote'){
        quoteFields.disabled = false;
    } else{
        quoteFields.disabled = true;
    }
}