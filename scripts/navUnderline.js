function sublinhaLink() {
    let linksNav = document.querySelectorAll(".menu__lista a");
    let linksPaginaInicial = document.querySelectorAll(".logo");
    let pagina = window.location.href;

    linksNav.forEach(link => {
        if(link.href == pagina) {
            link.parentNode.classList.add("atual");
            link.parentNode.setAttribute("aria-current", "true");
        } 
        else link.parentNode.setAttribute("aria-current", "false");
    });

    linksPaginaInicial.forEach(link => {
        if(link.parentNode.href == pagina) link.parentNode.setAttribute("aria-current", "true");
        else link.parentNode.setAttribute("aria-current", "false");
    });
}