let campoNome = document.getElementById("nome");
let campoTipoIngresso = document.getElementById("tipo");
let campoSetor = document.getElementById("setor");

campoNome.innerHTML = toTitleCase(localStorage["nome-completo"]);
campoTipoIngresso.innerHTML = "Ingresso: " + toTitleCase(localStorage["tipo-ingresso"]);
campoSetor.innerHTML = "Setor: " + toTitleCase(localStorage["setor"]);

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }