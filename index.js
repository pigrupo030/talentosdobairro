const express = require("express"); //importando o express
const app = express(); //iniciando o express
const Sequelize = require('sequelize');
const bodyParser = require("body-parser"); // extensão para receber dados do formulário cadastro
const cadastroteste = require("./models/Cadastroteste");
const formulario = require("./models/Cadastro");
const connection = require("./models/db");
const { format } = require("express/lib/response");
const port =  process.env.PORT || 3000

//dizendo para o express usar o EJS como View engine
app.set('view engine','ejs'); 
app.use(express.static('public'));
//body parser - extensão para enviar arquivos para o banco de dados
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// rotas 
app.get("/",function(req,res){
    res.render("home");
});

app.get("/cadastro",function(req,res){
    res.render("cadastro");
})

app.get("/informacoes",function(req,res){
  res.render("informacoes");
})

app.get("/mural",function(req,res){
  res.render("mural")  
})

app.get("/login",function(req,res){
    res.render("login");
})

app.get("/testecadastro",function(req,res){
    res.render("testecadastro");
})

app.post("/add-salvarFormulario", function(req, res){
    formulario.create({
      name: req.body.name,
      lastname: req.body.lastname,
      cpf: req.body.cpf,
      email: req.body.email,
      address: req.body.address,
      numero: req.body.numero,
      cep: req.body.cep,
      complemento: req.body.complemento,
      city: req.body.city,
      state: req.body.state,
      password: req.body.password,
    }).then(function(){
      res.send("Cadastro com sucesso total!!!!")
    }).catch(function(errp){
      res.send("Informações não cadastradas - Reveja se seus dados estão OK")
    })
       
});

app.listen(port,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("servidor iniciado com sucesso!");
    }

})
