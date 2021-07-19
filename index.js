const scrollTopButton = document.querySelector(".scroll-top");
const menu = document.querySelector(".menu-toggle");
const menuContent = document.querySelector(".menu-content");
const closeNavigation = document.querySelectorAll(".menu-content ul a");
const closeMenu = document.querySelector(".close-menu");
const heart = document.querySelectorAll("#work .work-img .img-box .img-text .fas");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        scrollTopButton.style.display = "block";
    }
    else{
        scrollTopButton.style.display = "none";

    }
}

scrollTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
})

menu.addEventListener("click", Show);
closeMenu.addEventListener("click", Hide);
closeNavigation.forEach((element) => {
    element.addEventListener("click", (ev) =>{
        Hide()
    })
})

heart.forEach((element) => {
    element.addEventListener("click", (ev) =>{
        ev.currentTarget.classList.toggle("like");
    });
})


function Show(){
    menuContent.style.transform = "translateY(0%)";
    

}

function Hide(){
    menuContent.style.transform = "translateY(-100%)";
}
