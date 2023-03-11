const menuBotao = document.querySelector(".menu__botao");

menuBotao.addEventListener("click", () => {
    const linhasMenuBota = menuBotao.querySelectorAll("span");
    const menu = document.querySelector(".menu__lista");
    const itemsMenu = menu.querySelectorAll("li");

    if(menu.classList.toggle("ativo")) {
        menuBotao.setAttribute("aria-expanded", true);
    } else {
        menuBotao.setAttribute("aria-expanded", false);
    }
    
    itemsMenu.forEach(item => item.classList.toggle("ativo"));
    linhasMenuBota.forEach(linha => linha.classList.toggle("ativo"));
})