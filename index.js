const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Ola thomas")
})

app.get('/mensagem',function(req,res){
    res.send("Essa mensagem e automatica!!")
})

app.get('/layout',function(req,res){
    res.send("Esse é o novo layout!")
})

app.listen(3000,function(){
    console.log("Conexao inicializada")
})