const { validate: isUuid } = require('uuid');
const Tabela = require('../models/Tabela');

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;

        if(!isUuid(id)) {
            return response.status(400).json({ error: "Invalid ID. Tabela não encontrada." });
        }

        try {
            const tabela = await Tabela.findById(id);
            response.tabela = tabela;
            if(!tabela) {
                return response.status(404).json({ error: "Tabela não encontrada." });
            }
            } catch (err) {
            return response.status(500).json({ error: err.message  });
        }
        next();
    },
};