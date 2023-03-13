const campoCPF = document.querySelector("#cpf");
formataCPF()

const botaoSubmit = document.querySelector("formulario-ingresso__botao-submit");
botaoSubmit.addEventListener("click", () => {
    validaCPF();
    validaEmail();
})

function formataCPF() {
    campoCPF.addEventListener("keypress", (evento) => {
        if(isNaN(evento.key)) evento.preventDefault();

        if((campoCPF.value.length) == 3 || (campoCPF.value.length) == 7) campoCPF.value += '.';

        if((campoCPF.value.length) == 11) campoCPF.value += '-';
    })
}

function validaCPF() {
    let cpf = campoCPF.value;

    if(cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;

    /* Valida o primeiro dígito verificador */
    let soma = 0;
    for(let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * 10 - i;
    
    let resto = (soma*10) % 11;
    if(resto == 10 || resto == 11) resto = 0;

    if(resto != parseInt(cpf.charAt(9))) return false;

    /* Valida o segundo dígito verificador */
    soma = 0
    for(let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * 11 - i;
    
    resto = (soma*10) % 11;
    if(resto == 10 || resto == 11) resto = 0;

    if(resto != parseInt(cpf.charAt(10))) return false;

    return true;
}

function validaEmail() {
    let email = document.querySelector("#email").value;
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

    return false;
}



