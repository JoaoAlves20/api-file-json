import ProductService from '../service/productService.js'

class ProductController {
    async findAll(request, response) {
        const products = await ProductService.findAll();

        if (!products) {
            response.send(404, { error: 'Products not found' });
            return;
        }

        response.send(200, products);
    }

    async findById(request, response) {
        const { id } = request.params;

        const findProduct = await ProductService.findById(id);

        if (!findProduct) {
            response.send(404, { error: 'Product not found' });
            return;
        }

        response.send(200, findProduct);
    }

    async create(request, response) {
        let { body } = request;

        if (!body.product || !body.price || !body.category) {
            response.send(400, { error: 'Product, price and category are requireds' });
            return;
        }

        await ProductService.create(body);

        const findProduct = await ProductService.findAll();

        if (!findProduct) {
            response.send(404, { error: 'Products not found' });
            return;
        }

        const product = findProduct[findProduct.length - 1];
        response.send(200, product);
    }
}

export default new ProductController()