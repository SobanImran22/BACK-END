import express from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controller/taskController.js';

const router = express.Router();

// Define routes
router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
