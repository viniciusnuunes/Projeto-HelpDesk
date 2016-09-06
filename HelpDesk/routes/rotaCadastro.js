/*jslint node:true*/
/*jshint esversion:6*/

var Cadastro = require('../models/cadastro.js');
var callback = require('./rotaCallBack-express.js');

module.exports = function(app){

  var cadastraAtendimento = (req,res) =>{
    console.log('PUT - /api/cadastro');

    var atendimento = new atendimento(req.body);
      atendimento.save((err,atendimento) => {
      callback.callbackSave(err,res);
    });

  };

  var buscaAtendimento = (req,res) => {
    console.log('GET - /api/buscaAtendimento');

    return Cadastro.find((err,cadastro) => {
      callback.callbackFind(err,cadastro,res);

    });
  };

  var buscaAtendimentoPorId = (req,res) => {
    console.log('GET - api/buscaAtendimento/:id');

    var id = req.params.id;
    return Cadastro.findById({_id:id},(err,cadastro) => {
      callbacck.callbackFindById(err,cadastro,res);
    });
  };
};












app.post("/api/cadastro", cadastraAtendimento);
app.get("/api/buscaAtendimento", buscaAtendimento);
app.get("/api/buscaAtendimento/:id", buscaAtendimentoPorId);
app.put();
