var express = require('express');
var app = express();

//configurando o servidor para usar EJS

app.set('view engine', 'ejs');

//passando o caminho da pasta view

app.set('views', 'src/views');

//configurando pasta publica para arquivo estatico

app.use(express.static('src/public'));

//mostrando a pagina index.ejs

app.get('/', function(request, response){
    response.render('index');
});

//iniciando o servidor

app.listen(3003, function(){
    console.log('Servidor rodando com sucesso na porta 3003');
});