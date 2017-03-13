var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', '9?G&;d#vhO'); //Palavra secreta que é utilizada para que a api de autenticacao assine o token
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd: 'app' })
  .include('models')
  .then('api')
  .then('routes/autenticacao.js')
  .then('routes')
  .into(app);

module.exports = app;
