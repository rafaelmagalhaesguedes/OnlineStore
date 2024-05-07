// index.ts
import { Router } from 'express';
import productRoutes from './ProductRoutes';
import checkoutRoutes from './CheckOutRoutes';

const router = Router();

router.use('/product', productRoutes);
router.use('/checkout', checkoutRoutes);

export default router;