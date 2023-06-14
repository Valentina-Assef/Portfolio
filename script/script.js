/* Project Popup Section */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project-button")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})

function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
}

document.querySelector(".project-popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem){
    document.querySelector(".pp-thumbnail img").src = projectItem.querySelector(".project-img").src;
    document.querySelector(".project-popup-body").innerHTML = projectItem.querySelector(".project-item-details").innerHTML;
}

/* Typing Animation */
let typed = new Typed(".typing",{
    strings:["Web Developer", "Front End Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})