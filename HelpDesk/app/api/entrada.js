var api = {};

api.lista = function(req, res) {
    var entradas = [
        { valor: 'Demanda', nome: 'Demanda'},
        { valor: 'E-Mail', nome: 'E-Mail'},
        { valor: 'Freshdesk', nome: 'Freshdesk'},
        { valor: 'Spark', nome: 'Spark'},
        { valor: 'Telefone', nome: 'Telefone'}
    ];
    res.json(entradas);
};

module.exports = api;
