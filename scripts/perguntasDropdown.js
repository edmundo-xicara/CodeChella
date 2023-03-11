let perguntas = document.querySelectorAll(".perguntas__pergunta");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        let iconeDropdown = pergunta.querySelector(".pergunta__icone-dropdown");
        let resposta = pergunta.querySelector(".pergunta__resposta");

        if(iconeDropdown.classList.toggle("ativo")) {
            resposta.classList.add("ativo");
            pergunta.setAttribute("aria-expanded", true);
            pergunta.style.marginBottom = "16px";
        } else {
            resposta.classList.remove("ativo");
            pergunta.setAttribute("aria-expanded", false);
            pergunta.style.marginBottom = "0";
        }
    })
})
