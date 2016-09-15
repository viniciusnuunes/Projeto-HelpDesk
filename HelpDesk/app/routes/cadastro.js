module.exports = function(app) {

  var api = app.api.cadastro;

  app.route('/v1/cadastros')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/v1/cadastros/:id')
    .get(api.buscaPorId)
    .delete(api.removePorId)
    .put(api.atualiza);
};
