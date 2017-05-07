var express = require("express"), //servidor web
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"), //biblioteca de conexion a mongodb
    gcm = require('node-gcm'); //biblioteca de conexion a firebase cloud messages

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/dbcortinas')(app, mongoose);
var concortinas = require('./controllers/concortinas');

var router = express.Router();
app.get('/', function(request, response) {

    response.send("Hola Mundo");

});

app.use(router);

var dispositivos = express.Router();

dispositivos.route('/dispositivo')
    .post(concortinas.addDispositivo);

app.use('/api', dispositivos);

mongoose.connect('mongodb://localhost/cortinas', function(err, res) {

    if (err) {
        console.log('ERROR: conectando con la base de datos. ' + err);
    } else {
        console.log('Conectado a la base de datos');
    }

});
app.listen(3000, function() {

    console.log("Servidor iniciado --- Corriendo en el puerto 3000");

});