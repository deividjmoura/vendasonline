const mongoose = require('mongoose');

const tabelaSchema = new mongoose.Schema({
    _id: {
       type: String,
       required: true,  
    },
    pedido: {
        type:  String,
        required: true,
    },
    nota: {
        type: String,
        required: true,
    },
    volumes: {
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    trans: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Tabela', tabelaSchema);
