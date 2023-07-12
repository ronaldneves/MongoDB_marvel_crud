import express from 'express';
import personagensController from '../controllers/personagensController.js';
import personagens from '../models/personagens.js';

const router = express.Router();

router.get('/personagens', personagensController.listarPersonagens);
router.get('/personagens/:id', personagensController.buscarPersonagensPorID);
router.get('/personagens/busca', personagensController.buscarPersonagensPorNome);
router.post('/personagens/', personagensController.addPersonagens);
router.put('/personagens/:id', personagensController.editaPersonagens);
router.delete('/personagens/:id', personagensController.deletaPersonagens);

export default router; 