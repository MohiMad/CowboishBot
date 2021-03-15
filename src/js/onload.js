function onload() {
    const matches = window.location.href.match(/(?<=#).*/i);

    (matches) ? switchPage(matches[0]) : document.getElementById("features").style.display = "block";


}