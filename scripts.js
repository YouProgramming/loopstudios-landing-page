const togglerIcon = document.querySelector(".custom-toggler-icon");
const navToggler = document.querySelector(".navbar-toggler");
const imagesDesk = document.querySelectorAll(".image-desk");
const imagesMobile = document.querySelectorAll(".image-mobile");
let isExpanded = true;
navToggler.addEventListener("click", () => {
    if(isExpanded){
        togglerIcon.src = "images/icon-close.svg";
        isExpanded = false;
    }else{
        togglerIcon.src = "images/icon-hamburger.svg";
        isExpanded = true;
    }
});

function changeMobileImages() {
    imagesDesk.forEach(e => {
        e.classList.add("d-none");
    });

    imagesMobile.forEach(e => {
        e.classList.remove("d-none");
    });

    document.querySelector('.featurs-image').src = "images/mobile/image-interactive.jpg";
}

const screen = window.matchMedia('(max-width: 375px)');

if(screen.matches){
    changeMobileImages();
}