import express from 'express';
import { testController } from '../controllers/testController.js';

const router = express.Router();

router.get('/data',testController);

export default router;