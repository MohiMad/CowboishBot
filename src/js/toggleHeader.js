function navSlide() {
    const navbarToggler = document.querySelector(".navbar-toggler");

    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar li");
    const ul = document.querySelector(".navbar ul");

    navbarToggler.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        if (ul.style.visibility === "visible") {
            navbarToggler.style.position = "absolute";
            ul.style.visibility = "hidden";
        }
        else {
            navbarToggler.style.position = "relative";
            ul.style.visibility = "visible";
        }
        navbarToggler.classList.toggle("toggle");
        
    });

}

navSlide();