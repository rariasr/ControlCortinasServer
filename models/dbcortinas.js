exports = module.exports = function(app, mongoose) {


    var dispositivoSchema = new mongoose.Schema({

        id_dispositivo: { type: String },
        token_gcm: { type: String }


    });

    mongoose.model('Dispositivos', dispositivoSchema);

};