var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Cadastro');

var erroApi = require('./callBacks');

api.lista = function(req, res) {
  model
    .find({})
    .then(function(cadastros) {
      res.json(cadastros);
    }, erroApi.callbackFind
  );
};

api.buscaPorId = function(req, res) {
  model
    .find({'idAluno' : vm.cadastro.idALuno})
    .then(function(cadastro) {
      if(!cadastro) throw Error('Cadastro não encontrado');
      res.json(cadastro);
    }, erroApi.callbackFindById
  );
};

api.removePorId = function(req, res) {
  model
    .remove({_id: req.params.id})
    .then(function() {
      res.sendStatus(204);
    }, erroApi.callbackRemove
  );
};

api.adiciona = function(req, res) {
  model
    .create(req.body)
    .then(function(cadastro) {
      res.json(cadastro);
    }, erroApi.callbackSave
  );
};

api.atualiza = function (req, res) {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json(cadastro);
    }, erroApi.callbackUpdate
  );
};

module.exports = api;
