var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var cadastroSchema = new Schema({
  colaborador: String,
  entrada: String,
  origem: String,
  aplicacao: String,
  device: String,
  status: String,
  problema: String,
  idFreshdesk: Number,
  idAluno: Number,
  data: Number,
  diagnostico: String,
  resposta: String,
  observacao: String,
});

mongoose.model('cadastro', cadastroSchema);
