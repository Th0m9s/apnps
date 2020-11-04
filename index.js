const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
    res.render('index.ejs',{})
})

app.get('/usuarios',function(req,res){
    res.render('usuarios.ejs',{ usuarios:[
        {nome:'Thomas',email:'thomaspolvorars@hotmail.com'},
        {nome:'Matheus',email:'matheus@hotmail.com'},
        {nome:'Jose',email:'jose@hotmail.com'},
        {nome:'Joao',email:'joao@hotmail.com'}
    ]})
})

app.listen(3000,function(){
    console.log("Conexao inicializada")
})