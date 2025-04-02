/* MOBILE PART */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-mobile");
    const linksContainer = document.querySelector("#linksLEFT"); // Il contenitore con i link

    // Mostra/Nasconde il menu quando si clicca sull'icona
    menuToggle.addEventListener("click", function (event) {
        linksContainer.classList.toggle("menu-open");
        event.stopPropagation(); // Evita che il click venga rilevato dal documento
    });

    // Chiude il menu se si clicca fuori
    document.addEventListener("click", function (event) {
        if (!linksContainer.contains(event.target) && !menuToggle.contains(event.target)) {
            linksContainer.classList.remove("menu-open");
        }
    });
});