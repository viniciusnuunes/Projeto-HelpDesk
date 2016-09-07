/*jslint node:true*/
/*jshint esversion:6*/

module.exports = function(app){

  var api = app.api.apiCadastro;

  app.route('/api/cadastro')
    .post(api.cadastraAtendimento)
    .get(api.buscaAtendimento);


  app.route('/api/cadastro/:id')
    .get(api.buscaAtendimentoPorId);

};



//app.post("/api/cadastro", cadastraAtendimento);
//app.get("/api/buscaAtendimento", buscaAtendimento);
//app.get("/api/buscaAtendimento/:id", buscaAtendimentoPorId);
//app.put();
