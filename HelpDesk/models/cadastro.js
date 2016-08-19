var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var cadastroSchema = new Schema({
  colaborador: String,
  data: Date,
  idAluno: Number,
  entrada: String,
  idFreshdesk: Number,
  aplicacao: String,
  device: String,
  problema: String,
  recorrente: Boolean,
  origem: String,
  abriuDemanda: Boolean,
  status: String,
  diagnostico: String,
  resposta: String,
  observacao: String,
});

mongoose.model('cadastro', cadastroSchema);

var salvarDados = mongoose.model('cadastro', cadastroSchema);
