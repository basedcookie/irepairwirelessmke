function toggleMobileMenu(className)
{
    var elements = document.getElementsByClassName(className);
    var mobileWraps = document.getElementsByClassName("mobileWrap");
    mobileWraps[0].classList.toggle("mobileSlide");
    mobileWraps[1].classList.toggle("mobileSlide");

    for(i = 0; i < elements.length; i++)
    {
        elements[i].classList.toggle("toggleOn");
    }
}

function tiktokFix()
{
    /*var tiktokEmbedList = document.getElementsByClassName('tiktok-embed');
    alert('test');
    console.log(tiktokEmbedList);
    for(i = 0; i < tiktokEmbedList.length; i++)
    {
        var iframe = tiktokEmbedList[i].getElementsByTagName('iframe');
        console.log(iframe);
        var embedPlayerPopup = iframe.contentWindow.document.getElementsByClassName('._embed_player_embed-recommendation');
        embedPlayerPopup.style.display = 'none';
    }*/
}