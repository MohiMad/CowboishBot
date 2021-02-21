const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
const navbar = document.getElementById("navbar");

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarToggler.addEventListener("click", navbarTogglerClick);


function navbarLinkClick() {
    if (navbarMenu.classList.contains("open")) {
        navbarToggler.click();
    }
}

navbarLinks.forEach(elem => {
    elem.addEventListener("click", navbarLinkClick)
});

