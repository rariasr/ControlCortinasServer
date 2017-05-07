var express = require("express"), //servidor web
    app = express(),
    bodyParser = require("body-parser"), //biblioteca para parsear JSON
    methodOverride = require("method-override"), //personaliza los metodos HTTP
    mongoose = require("mongoose"), //biblioteca de conexion a mongodb
    gcm = require('node-gcm'); //biblioteca de conexion a firebase cloud messages

app.use(bodyParser.urlencoded({ ectended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(request, response) {

    response.send("Hola Mundo");

});

app.use(router);

app.listen(3000, function() {

    console.log("Servidor iniciado --- Corriendo en el puerto 3000");

})