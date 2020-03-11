

// function maiusculo(nome){

//     console.log(nome.toUpperCase())
// }

// invocando a função maiusculo
// maiusculo("pricilla souza")


// ______________________________________________________________


// function minusculo(nome){

//     console.log(nome.toLowerCase())
// }

// invocando a função minusculo
// minusculo("PRICILLA SOUZA")

// _______________________________________________________________


// function totalLetras(nome){
//     var total = nome.length
//     console.log("Total de letras: " + total)
// }

// invocando a função minusculo
// totalLetras("PRICILLA SOUZA VAI APRENDER TUDO")



// importando funções
var funcoes = require ("./js/funcoes")
var resposta = funcoes.maiusculo("está aula é legal")

console.log(resposta)
console.log(funcoes.totalLetras("Estamos com vontade de tomar cafe"))
console.log(funcoes.minusculo("VAI FICAR MENOR AGORA"))
console.log(funcoes.titulo)