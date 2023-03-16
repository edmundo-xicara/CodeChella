window.onload = () => {
    sublinhaLink();

    let tema = localStorage["tema"];
    let botaoTrocaTema = document.querySelector(".troca-tema input");

    if(tema == "verao") {
        botaoTrocaTema.checked = true;
        mudaTemaVerao();
    } 

    mudaFavicon();
}

function mudaFavicon() {
    const favicon = document.getElementById("favicon");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if(mediaQuery.matches) {
        favicon.setAttribute("href", "assets/img/favicon_branco.png");
    } else {
        favicon.setAttribute("href", "assets/img/favicon.png");
    }

    mediaQuery.addEventListener("change", (evento) => {
        if(evento.matches) {
            favicon.setAttribute("href", "assets/img/favicon_branco.png");
        } else {
            favicon.setAttribute("href", "assets/img/favicon.png");
        }
    });
}
