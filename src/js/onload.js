function onload() {
    const matches = window.location.href.match(/(?<=#).*/i);

    if (matches) {
        switchPage(matches[0]);
    }

}