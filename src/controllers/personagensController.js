import personagens from '../models/personagens.js';

class personagensController {
    static async listarPersonagens(req, res) {
        try {
            const listaDePersonagens = await personagens.find();
            res.status(200).json(listaDePersonagens);
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao buscar database`});
        }
    }

    static async listarPersonagensPorID(req, res) {
        try {
            const id = req.params.id;
            const listaDePersonagens = await personagens.findById(id);
            res.status(200).json(listaDePersonagens);
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao buscar ID na dabatase`});
        }
    }

    static async addPersonagens(req, res) {
        try {
            const personagem = new personagens(req.body);
            await personagem.save();
            res.status(201).send(personagem.toJSON());
        }
        catch (err) {
            res.status(500).send({message: `${err.message} falha ao adicionar novo personagem`});
        }
    }

    static async editaPersonagens(req, res) {
        try {
            const id = req.params.id;
            await personagens.findByIdAndUpdate(id, {$set: req.body});
            restart.status(200).send({message: "Personagem atualizado com sucesso"});            
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao editar personagem`});
        }
    }

    static async deletaPersonagens(req, res) {
        try {
            const id = req.params.id;
            await personagens.findByIdAndRemove(id, {$set: req.body});
            res.status(200).send({message: "Personagem deletado com sucesso"});
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao deletar personagem`});
        }        
    }
}

export default personagensController;