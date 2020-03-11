const titulo = "Generation - NodeJs"



function maiusculo(nome) {

    return nome.toUpperCase()
}


// ______________________________________________________________


function minusculo(nome) {

   return nome.toLowerCase()
}


// _______________________________________________________________


function totalLetras(nome) {
    var total = nome.length
     return "Total de letras: " + total
}

// para que essas funções fiquem acessiveis para outro codigo
// vamos ter que exportar as funções
// module = é um comando donode

module.exports = {
    maiusculo, 
    minusculo,
    totalLetras, 
    titulo
}