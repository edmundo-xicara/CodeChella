const campoNome = document.querySelector("#nome-completo");
const campoEmail = document.querySelector("#email");
const campoCPF = document.querySelector("#cpf");
const campoDataNascimento = document.querySelector("#data-nascimento");

campoNome.setCustomValidity("Por favor, informe seu nome completo.");
campoEmail.setCustomValidity("Por favor, digite seu email.");
campoCPF.setCustomValidity("Por favor, informe seu CPF.");
campoDataNascimento.setCustomValidity("Por favor, informe sua data de nascimento.");

formataCPF()

campoNome.addEventListener("blur", () => validaNome());
campoCPF.addEventListener("blur", () => validaCPF());
campoEmail.addEventListener("blur", () => validaEmail());
campoDataNascimento.addEventListener("blur", () => validaDataNascimento());

campos = [campoNome, campoCPF, campoEmail, campoDataNascimento];

campos.forEach(campo => campo.addEventListener("keydown", () => resetaMsgValidacao(campo)));


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

    campoEmail.setCustomValidity("O email digitado é inválido.");
    return false;
}

function formataCPF() {
    campoCPF.addEventListener("keypress", (evento) => {
        if(isNaN(evento.key)) evento.preventDefault();

        if((campoCPF.value.length) == 3 || (campoCPF.value.length) == 7) campoCPF.value += '.';

        if((campoCPF.value.length) == 11) campoCPF.value += '-';
    })
}

function validaCPF() {
    let cpf = campoCPF.value.replace(/[.-]/g, "");

    if(!cpf) {
        return false;
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
            campoCPF.setCustomValidity("O CPF informado é inválido.");
            return false;
        }

    /* Valida o primeiro dígito verificador */
    let soma = 0;
    for(let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10-i);
    
    let resto = (soma*10) % 11;
    if(resto > 9) resto = 0;

    if(resto != parseInt(cpf.charAt(9))) {
        campoCPF.setCustomValidity("O CPF informado é inválido.");
        return false;
    }

    /* Valida o segundo dígito verificador */
    soma = 0
    for(let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11-i);
    
    resto = (soma*10) % 11;
    if(resto > 9) resto = 0;

    if(resto != parseInt(cpf.charAt(10))) {
        campoCPF.setCustomValidity("O CPF informado é inválido.");
        return false;
    }

    return true;
}

function validaDataNascimento() {
    let dataNascimento = new Date(campoDataNascimento.value);
    let dataAtual = new Date();

    /* Converte a diferença em milisegundos para anos */
    let diferenca = Math.floor((dataAtual-dataNascimento) / (1000*3600*24*365))
    
    if(diferenca < 10) {
        campoDataNascimento.setCustomValidity("Você precisa ter pelo menos 10 anos de idade para comprar um ingresso");
        return false;
    }

    return true;
}

function resetaMsgValidacao(campo) {
    campo.setCustomValidity('');
}
