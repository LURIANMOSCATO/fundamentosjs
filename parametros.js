// parâmetros de função


function soma(numero1, numero2) {
    return numero1 + numero2;
}

//console.log(soma(2, 2))
//console.log(soma(24, 42))
//console.log(soma(-500, 2))

//parâmetros x argumentos
// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é 
    ${idade}`;
}

//console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))