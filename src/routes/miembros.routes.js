import { Router } from 'express';
import { createMiembros, getMiembroByIdorName } from '../controllers/miembros.controller.js';

const router = Router();

router.get('/miembros', getMiembroByIdorName)
router.post('/miembros', createMiembros)

export default router