window.onload = () => {
    let linksNav = document.querySelectorAll(".menu__lista a");
    let pagina = window.location.href;

    linksNav.forEach(link => {
        if(link.href == pagina) {
            link.parentNode.classList.add("atual");
        }
    })
}