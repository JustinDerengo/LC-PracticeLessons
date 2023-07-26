function init () {
    const button = document.getElementById("buttonCounter");

    button.addEventListener("click", event => {
        paragraph.innerHTML += 1
    });
}