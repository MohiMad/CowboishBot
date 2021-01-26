function switchPage(id) {
    const features = document.getElementById("features");
    const commands = document.getElementById("commands");
    const mohi = document.getElementById("mohi");

    const page = document.getElementById(id.replace("#", ""));

    if (page != null) {
        page.addEventListener("click", function (event) {
            event.preventDefault();

        });
    }


    if (id === "#") {
        features.style.display = "block";


        commands.style.display = "none";
        mohi.style.display = "none";
    }
    if (id === "#features") {
        page.style.display = "block";


        commands.style.display = "none";
        mohi.style.display = "none";
    }
    if (id === "#commands") {
        page.style.display = "block";

        features.style.display = "none";
        mohi.style.display = "none";
    }
    if (id === "#mohi") {

        page.style.display = "block";
        commands.style.display = "none";
        features.style.display = "none";

    }

    if (id !== "#") {
        const targetPosition = page.offsetTop ? page.offsetTop : 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;

            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);

        }
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };
}