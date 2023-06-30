/* Toggle style switcher */
let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/* Hide style - switcher on scroll */
function handleScroll() {
    const colorsContainer = document.querySelector(".colors");
    const themeTitle = document.getElementById("theme-colors");
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
    colorsContainer.classList.add("hidden");
    themeTitle.classList.add("hidden");
    clearTimeout(window.isScrolling);
    window.isScrolling = setTimeout(function () {
        colorsContainer.classList.remove("hidden");
        themeTitle.classList.remove("hidden");
    }, 200);
}

window.addEventListener("wheel", handleScroll);
window.addEventListener("touchmove", handleScroll);

/* Theme Color */
let alternateStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

/* Theme light and dark mode */
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})