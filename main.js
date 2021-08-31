const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event)
{
    if(event.code === "Enter")
    {
        search();
    }


})

function search(){
    const input = searchInput.value;

    window.location.href= "https://www.google.com/search?q=" + input + "&sxsrf=AOaemvJsgSJvz9ypfxxLaFmzkGcQkMo7Dw%3A1630424267972&source=hp&ei=y0wuYd2OOM-koAT43ImIBg&iflsig=ALs-wAMAAAAAYS5a213xDSY23kvoeIfvCWXFIHqess7m&oq="+ input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgUILhDLATIICAAQgAQQsQMyCAgAEIAEELEDMggILhCABBCxAzILCC4QgAQQxwEQrwEyCwgAEIAEELEDEIMBMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEOgcIIxDqAhAnOhQILhCABBCxAxCDARDHARCjAhCTAjoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOgQIIxAnOggILhCxAxCDAToFCC4QgAQ6EQguEIAEELEDEMcBEKMCEJMCUOuMoQJYyJKhAmCqlKECaARwAHgAgAG5AYgBqQaSAQMwLjWYAQCgAQGwAQo&sclient=gws-wiz&ved=0ahUKEwidoMray9vyAhVPEogKHXhuAmEQ4dUDCAg&uact=5";
}