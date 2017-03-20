module.exports = function(app) {

    var api = app.api.autenticacao;

    app.post('/autenticar', api.autentica);
    app.use('/*', api.verificaToken);

};
