import ProductController from './controller/productController.js';
import { asyncHandler } from './utils/asyncHandler.js';

export const router = [
    {
        endpoint: '/products',
        method: 'GET',
        handler: asyncHandler(ProductController.findAll)
    },
    {
        endpoint: '/product/:id',
        method: 'GET',
        handler: asyncHandler(ProductController.findById)
    },
    {
        endpoint: '/products',
        method: 'POST',
        handler: asyncHandler(ProductController.create)
    },
]