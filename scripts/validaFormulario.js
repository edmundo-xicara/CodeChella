const campoNome = document.getElementById("nome-completo");
const campoEmail = document.getElementById("email");
const campoCPF = document.getElementById("cpf");
const campoSetor = document.getElementById("setor");
const campoDataNascimento = document.getElementById("data-nascimento");
const campoTipoIngresso = document.getElementById("tipo-ingresso");

campoNome.setCustomValidity("Por favor, informe seu nome completo");
campoEmail.setCustomValidity("Por favor, digite seu email");
campoSetor.setCustomValidity("Por favor, escolha o setor que deseja ir");
campoDataNascimento.setCustomValidity("Por favor, informe sua data de nascimento");
campoTipoIngresso.setCustomValidity("Por favor, escolha o tipo de ingresso que deseja");

formataCPF()

campoNome.addEventListener("blur", () => {if(!validaNome()) mostraMsgErro(campoNome, "O nome é obrigatório*");});
campoEmail.addEventListener("blur", () => {if(!validaEmail()) mostraMsgErro(campoEmail, "O email digitado é inválido*");});
campoCPF.addEventListener("blur", () => {if(!validaCPF()) mostraMsgErro(campoCPF, "O CPF informado não existe*");});
campoSetor.addEventListener("blur", () => {if(!validaSetor()) mostraMsgErro(campoSetor, "É preciso escolher algum setor*");});
campoDataNascimento.addEventListener("blur", () => {if(!validaDataNascimento()) mostraMsgErro(campoDataNascimento, "Você deve ter pelo menos 10 anos de idade*");});
campoTipoIngresso.addEventListener("blur", () => {if(!validaTipoIngresso()) mostraMsgErro(campoTipoIngresso, "Escolha o tipo de ingresso desejado*");});

const botaoSubmit = document.getElementById("botao-submit");
botaoSubmit.addEventListener("click", () => {
    if(!validaNome()) mostraMsgErro(campoNome, "O nome é obrigatório*");
    if(!validaEmail()) mostraMsgErro(campoEmail, "O email digitado é inválido*");
    if(!validaCPF()) mostraMsgErro(campoCPF, "O CPF informado não existe*");
    if(!validaSetor()) mostraMsgErro(campoSetor, "É preciso escolher algum setor*");
    if(!validaDataNascimento()) mostraMsgErro(campoDataNascimento, "Você deve ter pelo menos 10 anos de idade*");
    if(!validaTipoIngresso()) mostraMsgErro(campoTipoIngresso, "Escolha o tipo de ingresso desejado*");
});


let campos = [campoNome, campoEmail, campoCPF, campoDataNascimento];
let camposSelect = [campoSetor, campoTipoIngresso];
campos.forEach(campo => campo.addEventListener("keydown", () => resetaMsgValidacao(campo)));
camposSelect.forEach(campo => campo.addEventListener("click", () => resetaMsgValidacao(campo)));

const formulario = document.getElementById("formulario-ingresso");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let campos = ["nome-completo", "setor", "tipo-ingresso"]; 
    campos.forEach(campo => localStorage.setItem(campo, evento.target.elements[campo].value));

    window.location.assign("ingresso.html");
});


function validaNome() {
    let nome = campoNome.value;
    if(!nome) {
        return false;
    }

    return true;
}

function validaEmail() {
    let email = campoEmail.value;
    let indexArroba = email.indexOf('@');
    let usuario = email.substring(0, indexArroba);
    let dominio = email.substring(indexArroba+1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length-1)) {
            return true;
    }

    campoEmail.setCustomValidity("O email digitado é inválido");
    return false;
}

function formataCPF() {
    campoCPF.addEventListener("keypress", (evento) => {
        if(isNaN(evento.key)) evento.preventDefault();
        if(campoCPF.value.length == 3 || campoCPF.value.length == 7) campoCPF.value += '.';
        if(campoCPF.value.length == 11) campoCPF.value += '-';
    })
}

function validaCPF() {
    let cpf = campoCPF.value.replace(/[.-]/g, "");

    if(!cpf) {
        return true;
    }

    if(cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999") {
            campoCPF.setCustomValidity("O CPF informado é inválido");
            return false;
        }

    /* Valida o primeiro dígito verificador */
    let soma = 0;
    for(let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10-i);
    
    let resto = (soma*10) % 11;
    if(resto > 9) resto = 0;

    if(resto != parseInt(cpf.charAt(9))) {
        campoCPF.setCustomValidity("O CPF informado é inválido");
        return false;
    }

    /* Valida o segundo dígito verificador */
    soma = 0
    for(let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11-i);
    
    resto = (soma*10) % 11;
    if(resto > 9) resto = 0;

    if(resto != parseInt(cpf.charAt(10))) {
        campoCPF.setCustomValidity("O CPF informado é inválido");
        return false;
    }

    return true;
}

function validaSetor() {
    if(!validaLista(campoSetor)) {
        campoSetor.setCustomValidity("Por favor, escolha o setor que deseja ir");
        return false;
    }

    return true;
}

function validaDataNascimento() {
    if(!campoDataNascimento.value) {
        mostraMsgErro(campoDataNascimento, "Informe a sua data de nascimento*");
        return true;
    }

    let dataNascimento = new Date(campoDataNascimento.value);
    let dataAtual = new Date();

    /* Converte a diferença em milisegundos para anos */
    let diferenca = Math.floor((dataAtual-dataNascimento) / (1000*3600*24*365))
    
    if(diferenca < 10) {
        campoDataNascimento.setCustomValidity("Você precisa ter pelo menos 10 anos de idade para comprar um ingresso");
        return false;
    } else if(diferenca < 16) {
        campoDataNascimento.parentNode.querySelector(".campo__msg-erro").innerHTML = "Você só poderá entrar acompanhado de um responsável*";
    }

    return true;
}

function validaTipoIngresso() {
    if(!validaLista(campoTipoIngresso)) {
        campoTipoIngresso.setCustomValidity("Por favor, escolha o tipo de ingresso que deseja");
        return false;
    }

    return true;
}

function validaLista(campo) {
    return !campo.value == '';
}

function mostraMsgErro(campo, msg) {
    campo.style.backgroundColor = "#de5151";
    campo.setAttribute("placeholder", '');
    campo.parentNode.querySelector(".campo__msg-erro").innerHTML = msg;
    campo.parentNode.querySelector(".campo__msg-erro").setAttribute("role", "alert");
}

function resetaMsgValidacao(campo) {
    campo.setCustomValidity('');
    campo.style.backgroundColor = '';
    campo.parentNode.querySelector(".campo__msg-erro").innerHTML = '';
    campo.parentNode.querySelector(".campo__msg-erro").removeAttribute("role");
} 
