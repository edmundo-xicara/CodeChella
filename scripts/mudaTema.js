const botaoTrocaTema = document.querySelector(".troca-tema input");

const root = document.querySelector(":root");
const corpo = document.querySelector(".corpo");
const banner = corpo.querySelector(".banner");

const whatsappIcon = document.getElementById("whatsapp-icon");
const twitchIcon = document.getElementById("twitch-icon");
const instagramIcon = document.getElementById("instagram-icon");
const twitterIcon = document.getElementById("twitter-icon");

const imgSobre = corpo.querySelector(".corpo-principal .secao__img");
const atracoes = corpo.querySelector(".corpo-principal .atracoes");

const logoIngresso = document.getElementById("logo-ingresso");
const faviconIngresso = document.getElementById("favicon-ingresso");

botaoTrocaTema.addEventListener("click", (evento) => {
    if(evento.target.checked) {
        mudaTemaVerao();
    } else {
        mudaTemaBoreal();
    }
});


function mudaTemaVerao() {
    botaoTrocaTema.setAttribute("aria-label", "trocar para tema boreal");
    
    root.style.setProperty("--cor-primaria", "#2E7BA2");
    root.style.setProperty("--cor-primaria-hover", "#519EC5");
    root.style.setProperty("--cor-secundaria", "#DF9010");
    root.style.setProperty("--cor-rodape", "#FACF9D");
    root.style.setProperty("--cor-gradiente", "linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%)");
    root.style.setProperty("--fonte-cor", "#444444");
    
    banner.classList.add("verao");

    whatsappIcon.setAttribute("src", "assets/img/dark_whatsapp_icon.png");
    twitchIcon.setAttribute("src", "assets/img/dark_twitch_icon.png");
    instagramIcon.setAttribute("src", "assets/img/dark_instagram_icon.png");
    twitterIcon.setAttribute("src", "assets/img/dark_twitter_icon.png");

    if(imgSobre != null) {
        imgSobre.setAttribute("src", "../assets/img/img_sobre_verao.png");
        imgSobre.setAttribute("alt", "Plateia feliz e sorrindo enquanto assiste ao show");

        atracoes.classList.add("verao");
    }

    if(logoIngresso != null) {
        logoIngresso.setAttribute("src", "assets/img/dark_logo.png");
        faviconIngresso.setAttribute("src", "assets/img/favicon.png");
    }

    localStorage.setItem("tema", "verao");
}


function mudaTemaBoreal() {
    botaoTrocaTema.setAttribute("aria-label", "trocar para tema verão");

    root.style.setProperty("--cor-primaria", "#4650BD");
    root.style.setProperty("--cor-primaria-hover", "#606ADA");
    root.style.setProperty("--cor-secundaria", "#008364");
    root.style.setProperty("--cor-rodape", "#4650BD");
    root.style.setProperty("--cor-gradiente", "linear-gradient(180deg, #304968 0%, #36C1A0 52.6%, #4650BD 100%)");
    root.style.setProperty("--fonte-cor", "white");

    corpo.classList.remove("verao");
    
    banner.classList.remove("verao");

    whatsappIcon.setAttribute("src", "assets/img/whatsapp_icon.png");
    twitchIcon.setAttribute("src", "assets/img/twitch_icon.png");
    instagramIcon.setAttribute("src", "assets/img/instagram_icon.png");
    twitterIcon.setAttribute("src", "assets/img/twitter_icon.png");

    if(imgSobre != null) {
        imgSobre.setAttribute("src", "../assets/img/img_sobre.png");
        imgSobre.setAttribute("alt", "Banda de Rock tocando guitarra e baixo");

        atracoes.classList.remove("verao");
    }

    if(logoIngresso != null) {
        logoIngresso.setAttribute("src", "assets/img/logo.png");
        faviconIngresso.setAttribute("src", "assets/img/favicon_branco.png");
    }

    localStorage.setItem("tema", "boreal");
}
