var mongoose = require('mongoose');
//require('../models/dbcortinas.js');
var dbcortinas = mongoose.model('Dispositivos');

console.log("iniciado el controlador");

exports.addDispositivo = function(request, response) {
    console.log("POST");
    var dispositivo = new dbcortinas({
        id_dispositivo: request.body.id_dispositivo,
        token_gcm: request.body.token_gcm
    });
    console.log(dispositivo);

    dispositivo.save(function(err, dispositivo) {

        if (err) {
            return response.send(500, err.message);
        } else {

            dbcortinas.find(function(error, list) {
                if (error) return response.send(500, error.message);

                response.status(200).jsonp(list);
            });


        }

    })

};