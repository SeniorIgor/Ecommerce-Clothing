import { Router } from 'express';

import { makePayment } from '../controllers/payment';

const router = Router();

router.post('/', makePayment);

export default router;
