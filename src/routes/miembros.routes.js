import { Router } from 'express';
import { createMiembros, getMiembros } from '../controllers/miembros.controller.js';

const router = Router();

router.get('/miembros', getMiembros)
router.post('/miembros', createMiembros)

export default router