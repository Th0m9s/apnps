const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Ola thomas")
})

app.get('/mensagem',function(req,res){
    res.send("Essa mensagem e automatica!!")
})

app.get('/sobre',function(req,res){
    res.send("Esta pagina esta sendo desenvolvida por thomas")
})

app.listen(3000,function(){
    console.log("Conexao inicializada")
})