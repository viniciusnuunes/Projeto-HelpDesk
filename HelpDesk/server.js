//Conexão com o express
var http = require('http');
var app = require('./config/express');
var assert = require('assert');
var mongoose = require('mongoose');


// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/bancoVinicius', function(err, db) {
  assert.equal(null, err);
  console.log("Successfully connected to MongoDB.");
});

app.use(function(req, res){
  res.sendStatus(404);
});
//se funcionar

http.createServer(app)
  .listen(3000, function() {
  console.log('Servidor iniciado');
});
