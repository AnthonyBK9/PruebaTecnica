import { Router } from 'express';
import { connect } from '../controllers/index.controller.js';

const router = Router();

router.get('/connect', connect);

export default router