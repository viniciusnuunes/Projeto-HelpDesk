var mongoose = require('mongoose');
var schema = mongoose.Schema({

colaborador : {
  type: String,
  require:true
},
data : {
  type:Date,
  default: new Date()
},
idAluno : {
  type:Number,
  require:true
},
entrada : {
  type:String,
},
idFreshdesk : {
  type:Number
},
aplicacao : {
  type:String
},
device : {
  type:Object
},
problema : {
  type:String
},
recorrente : {
  type:Boolean
},
origem : {
  type:String,
  require:true
},
abriuDemanda : {
  type:Boolean
},
status : {
  type:String,
  require:true
},
diagnostico : {
  type:String,
  require:true
},
resposta : {
  type:String,
  require:true
},
observacao : {
  type:String,
}
});

mongoose.model('Cadastro', schema);
