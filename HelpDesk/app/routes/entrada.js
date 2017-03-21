module.exports = function(app){

  var api = app.api.entrada;

  app.get('/v1/entradas', api.lista);
};
