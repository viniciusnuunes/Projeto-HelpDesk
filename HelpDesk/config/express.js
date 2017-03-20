var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', '1$L)>[`cX}3X9h9DKO2{JVP_>R*m%1ELfF[$%;a;');
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd: 'app' })
  .include('models')
  .then('api')
  .then('routes/autenticacao.js')
  .then('routes')
  .into(app);

module.exports = app;
