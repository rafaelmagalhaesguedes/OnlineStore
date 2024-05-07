// index.ts
import { Router } from 'express';
import productRoutes from './ProductRoutes';

const router = Router();

router.use('/product', productRoutes);

export default router;