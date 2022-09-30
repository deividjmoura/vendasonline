const { response, request } = require('express');
const Tabela = require('../models/Tabela');
const {v4: uuid} = require('uuid');

module.exports = {
    async Index(request, response) {
        try {
            const tabela = await Tabela.find();
            return response.status(200).json({ tabela }); 
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    },
    async store(request, response) {
        const { pedido, nota, volumes, hora, descricao, trans } = request.body;

        if(!pedido || !nota || !volumes || !hora || !descricao || !trans) {
            return response.status(400).json({ error: "Falta o pedido ou nota." });
        }

        const tabela = new Tabela({
            _id: uuid(),
            pedido,
            nota,
            volumes,
            hora,
            descricao,
            trans
        });
        try {
            await tabela.save();
            return response.status(201).json({ message: "Dados adicionados com sucesso!" });
        } catch (err) {
            response.status(400).json({ error: err.message });
        }
    },

    async update(request, response) {
        const { pedido, nota } = request.body;

        if (!pedido && !nota) {
            return response.status(400)
            .json({ error: "Vocẽ precisa informar o pedido ou nota"});
        }
        if (pedido) response.tabela.pedido = pedido;
        if (nota) response.tabela.nota = nota;
        
        try {
            await response.tabela.save();
            return response.status(200).json({ message: "Dados alterados com sucesso!" });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
        },
};
