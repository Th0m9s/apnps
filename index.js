const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Ola thomas")
})

app.get('/mensagem',function(req,res){
    res.send("Essa mensagem e automatica!!")
})

app.listen(3000,function(){
    console.log("Conexao inicializada")
})