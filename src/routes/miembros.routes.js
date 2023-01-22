import { Router } from 'express';
import { createMiembros, getMiembrosByIdorName } from '../controllers/miembros.controller.js';

const router = Router();

router.get('/miembros', getMiembrosByIdorName)
router.post('/miembros', createMiembros)

export default router