const cowboish = document.querySelector(".clickable");
function number() {
    const number = Math.floor(Math.random() * 2);
    
    return number;
}

const audio = document.getElementById(`yeehaw${number()}`);
const set = new Set();

cowboish.addEventListener("click", function () {
    if (set.has("x")) return;

    set.add("x");
    audio.play();
    setTimeout(function () {
        set.delete("x");
    }, 5000);
});

