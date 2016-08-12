//Conexão com o express
var express = require('express'),
app = express(),
engines = require('Consolidate'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert'),
bodyParser = require('body-parser'),
mongojs = require('mongojs'),
db = mongojs('teste', ['cadastro']),
mongoose = require('mongoose'),
fs = require('fs');

fs.readdirSync(__dirname + '/models'). forEach(function(filename){
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename
);
});

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('HelpDesk', __dirname + '/views');



// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/Helpdata', function(err, db) {
  assert.equal(null, err);

  console.log("Successfully connected to MongoDB.");
});
app.get('/', function(req, res){
  console.log('I received a GET request');
  res.render('index', function(err, html) {
    res.send(html);
  });
});
});
});
app.post('/', function(req, res){
  db.cadastro.insert(req.body, function(err, doc){
    res.json(doc);
  });
});
/*    app.post( '/' , function(req, res, next){
var colaborador = req.body.colaborador;

});*/

/*db.collection('cadastro').insertOne(
{'colaborador': colaborador},
function (err, r) {
assert.equal(null, err);
res.send("Document inserted with _id: " + r.insertedId);
}
);
});*/
app.use(function(req, res){
  res.sendStatus(404);
});
//se funcionar
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express server listening on port %s.', port);
});