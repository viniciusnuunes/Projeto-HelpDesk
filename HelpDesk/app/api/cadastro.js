var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Cadastro');

api.lista = function(req, res) {

  model
    .find({})
    .then(function(cadastros) {
        res.json(cadastros);
    }, function(error) {
          console.log(error);
          res.status(500).json(error);
    });
};

api.buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
    .then(function(cadastro) {
      if(!cadastro) throw Error('Foto não encontrada');
      res.json(cadastro);

    }, function(error) {
          console.log(error);
          res.status(404).json(error);
    });
};

api.removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
    .then(function() {
        res.sendStatus(204);

    }, function(error) {
          console.log(error);
          res.status(500).json(error);
    });
};

api.adiciona = function(req, res) {

        model.create(req.body)
        .then(function(cadastro) {
            res.json(cadastro);
        }, function(error) {
            console.log(error);
            res.sendStatus(500);
        });
    };

api.atualiza = function (req, res) {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
        res.json(cadastro);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    });
};

module.exports = api;
