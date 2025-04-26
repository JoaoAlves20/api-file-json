import ProductController from './controller/productController.js'

export const router = [
    {
        endpoint: '/products',
        method: 'GET',
        handler: ProductController.findAll
    }
]