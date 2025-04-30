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
        endpoint: '/product',
        method: 'POST',
        handler: asyncHandler(ProductController.createProduct)
    },
    {
        endpoint: '/product/:id',
        method: 'PUT',
        handler: asyncHandler(ProductController.updateProduct)
    },
    {
        endpoint: '/product/:id',
        method: 'DELETE',
        handler: asyncHandler(ProductController.deleteProduct)
    },
]