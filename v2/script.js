
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
    if (window.location.hash === "") {
        window.scrollTo(0, 0);
    }
});
