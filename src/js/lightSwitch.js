const lightSwitch = document.querySelector("input[type=checkbox]");

const toChange = [
    {
        var: "--background-color",
        light: "#ff58583d",
        default: "#343A40"
    },
    {
        var: "--title-color",
        light: "#2C2525",
        default: "#FAEBD7"
    },
    {
        var: "--paragraph-color",
        light: "#000",
        default: "#fff"
    },
    {
        var: "--span-marked",
        light: "#FF2626",
        default: "#F72A2A"
    },
    {
        var: "--navbar-border-color",
        light: "#1E1111",
        default: "#ff6868"
    },
    {
        var: "--footer-color",
        light: "#bd493747",
        default: "#abaaaa1c"
    },
    {
        var: "--footerlinks-color",
        light: "#FE4949",
        default: "#716E6E"
    },
    {
        var: "--mohi-href-color",
        light: "#1D1917",
        default: "thistle"
    },
    {
        var: "--nav-color",
        light: "#ff5858",
        default: "#343a40"
    }
]

lightSwitch.addEventListener("click", function () {
    lightSwitch.classList.toggle("click");

    let theme = lightSwitch.classList.contains("click") ? "light" : "default";

    for (element of toChange) {
        document.documentElement.style.setProperty(element.var, element[theme]);
    }

});