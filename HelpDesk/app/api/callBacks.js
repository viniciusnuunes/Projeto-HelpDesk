/*jshint esversion:6*/

var erroApi = {

  callbackFind: (err,element,res) => {
    if(!err) {
      return res.send(element);
    }else {
      res.statusCode = 500;
      console.log("Erro interno!",res.statusCode,err.message);
      return res.send({error:"Erro ao tentar buscar o Cadastro!"});
    }
  },

  callbackFindById: (err,element,res) => {
    if(!element) {
      res.statusCode = 404;
      return res.send({error:"Atendimento não Encontrado"});
    }
    if(!err) {
      return res.send({status:"OK"});
    }
    else {
      res.statusCode = 500;
      console.log("Erro interno!",res.statusCode,err.message);
      return res.send({error:"Erro ao Buscar"});
    }
  },

  callbackRemove: (err,res) => {
    if(!err) {
      console.log("Atendimento removido com sucesso");
      return res.send({status:"OK"});
    }
    else {
      res.statusCode = 500;
      console.log("Erro ao tentar remover atendimento",res.statusCode,err.message);
      return res.send({error:"Erro no Servidor"});
    }
  },

  callbackSave: (err,res) => {
    if(err) {
      console.log("Erro ao tentar salvar "+err);
      res.send({error:err});
    }
    else {
      console.log("Atendimento cadastrado com sucesso!");
      res.send({status:"OK"});
    }
  },

  callbackUpdate: (err,res) => {
    if(!err) {
      console.log("Atendimento alterado com sucesso");
      return res.send({status:"OK"});
    }
    else {
      res.statusCode = 500;
      console.log("Erro ao tentar atualizar atendimento",res.statusCode,err.message);
      return res.send({error:"Erro no Servidor"});
    }
  },

};

module.exports = erroApi;
