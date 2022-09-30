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
            const { pedido, nota, volumes, hora, descricao, trans } = request.body;

        if(!pedido || !nota || !volumes || !hora || !descricao || !trans) {
                return response.status(400).json({ error: "Você precisa informar os dados! "})
            } else if (pedido && nota && volumes && hora && descricao && trans) {
                request.Tabela.pedido = pedido,
                request.Tabela.nota = nota,
                request.Tabela.volumes = volumes,
                request.Tabela.hora = hora,
                request.Tabela.descricao = descricao,
                request.Tabela.trans = trans
            };

       /* if (pedido) request.Tabela.pedido = pedido;
        if (nota) request.Tabela.nota = nota;
        if (volumes) request.Tabela.volumes = volumes;
        if (hora) request.Tabela.hora = hora;
        if (descricao) request.Tabela.descricao = descricao;
        if (trans) request.Tabela.trans = trans;*/
        
        try {
                await response.Tabela.save();
                return response.status(200).json({ message: "Tabela atualizada com sucesso! "})
        } catch (err) {
                response.status(500).json({ error: err.message });
            }
        },
};
