function switchPage(id) {

    const page = document.getElementById(id.replace("#", ""));

    if (!page) {
        return document.getElementById("features").style.display = "block";
    }

    if (page != null) {
        page.addEventListener("click", function (event) {
            event.preventDefault();

        });
    }
    const divs = document.querySelectorAll(`div[id]:not(#${page.id}, #getCommands)`);

    if (page) {
        for (const div of divs) {
            const section = document.getElementById(div.id);
            section.style.display = "none";
        }
        page.style.display = "block";
    }


    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t * t + b;
        }
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    if (id !== "#") {
        const targetPosition = page.offsetTop ? page.offsetTop : 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }
            const progress = timestamp - start;

            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }

        }

        window.requestAnimationFrame(step);

    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}