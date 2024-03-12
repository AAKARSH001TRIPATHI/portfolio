const styleswitchertoggle = document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click",()=>
{
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log("clicked")
})

window.addEventListener("scroll",()=>
{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternate= document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternate.forEach((style)=>
    {
        if(color=== style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}