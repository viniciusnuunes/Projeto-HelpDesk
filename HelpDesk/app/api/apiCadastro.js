/*jslint node:true*/
/*jshint esversion:6*/
var api = {};
var Cadastro = require('../../models/cadastro');
var callback = require('../routes/rotaCallBacks-express');


api.cadastraAtendimento = (req,res) =>{
  console.log('PUT - /api/cadastro');

  var atendimento = new atendimento(req.body);
    atendimento.save((err,atendimento) => {
    callback.callbackSave(err,res);
  });
};

  api.buscaAtendimento = (req,res) => {
    console.log('GET - /api/buscaAtendimento');

    return Cadastro.find((err,cadastro) => {
      callback.callbackFind(err,cadastro,res);

    });
  };

  api.buscaAtendimentoPorId = (req,res) => {
    console.log('GET - api/buscaAtendimento/:id');

    var id = req.params.id;
    return Cadastro.findById({_id:id},(err,cadastro) => {
      callbacck.callbackFindById(err,cadastro,res);
    });
  };

module.exportes = api;
