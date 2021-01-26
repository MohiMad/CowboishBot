function switchPage(id) {
    const features = document.getElementById("features");
    const commands = document.getElementById("commands");
    const mohi = document.getElementById("mohi");

    const page = document.getElementById(id.replace("#", ""));

    if (id !== "#") {
        page.addEventListener("click", function (event) {

            event.preventDefault()
            window.scroll({
                top: document.getElementById(id.slice(1)).offsetTop,
                behavior: "smooth"
            });
        });

    } else {

        window.scroll({
            top: 0,
            behavior: "smooth"
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
}