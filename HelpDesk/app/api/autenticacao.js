module.exports = function(app) {
    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');
    var api = {};
    var model = mongoose.model('Usuario');

    api.autentica = function(req, res) {
        model
            .findOne({
                login: req.body.login,
                senha: req.body.senha
            })
            .then(function(usuario) {
                if (!usuario) {
                    console.log('Login ou senha inválidos');
                    res.sendStatus(401);
                } else {
                    //criar o token
                    var token = jwt.sign({
                        login: usuario.login
                    }, app.get('secret'), {
                        expiresIn: 86400 //valor em segundos (24 horas)
                    });

                    console.log('Token criado e sendo enviado no header de resposta');
                    res.set('x-access-token', token);
                    res.end();
                }
            }, function(error) {
                console.log('Login ou senha inválidos');
                res.sendStatus(401);
            });
    };

    api.verificaToken = function(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            console.log('Verificando token...');
            jwt.verify(token, app.get('secret'), function(err, decoded) {
                if (err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next();
            });
        } else {
            console.log('Token não foi enviado');
            res.sendStatus(401);
        }
    };

    return api;
};
