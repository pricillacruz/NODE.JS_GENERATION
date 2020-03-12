
var funcoes = require('./js/funcoes')
var n1 = 2
var n2 = 2
// console.log (funcoes.somar(n1,n2))
// console.log(funcoes.subtrair(n1,n2))
// console.log(funcoes.multiplicar(n1,n2))
// console.log(funcoes.dividir(n1,n2))


const express = require("express") //importando o modulo express
const app = express () // criando uma instancia do express
let port = 8081

// rota principal
// send = função do express
// end = função do http

app.get('/', (req, res) => {
    res.send('<div style= "margin: 0 auto; width: 200px; heigth: 300px; border: 2px solid blue"><h1 style= "text-align: center; color:blue"; >Calculadora</h1></div>' + `<div style = "border: 2px solid blue; margin-left:692px; width: 30px; heigth: 50px"> ${funcoes.somar(n1,n2)} </div>`)

})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c')
})