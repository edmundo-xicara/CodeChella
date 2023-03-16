window.onload = () => {
    sublinhaLink();

    let tema = localStorage["tema"];
    let botaoTrocaTema = document.querySelector(".troca-tema input");

    if(tema == "verao") {
        botaoTrocaTema.checked = true;
        mudaTemaVerao();
    } 
}


