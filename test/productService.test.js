import assert from 'assert';

import ProductService from '../src/service/productService.js';

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        product: "apple",
        price: 23.5,
        category: "fruit"
    },
    {
        id: 2,
        product: "eat",
        price: 50.56,
        category: "food"
    }
]

const CREATE_DEFAULT_PRODUCT = {
    product: 'teste',
    price: 12.4,
    category: 'testando'
}

describe('Testando os services', function () {
    it('mostrando todos os produtos', async function () {
        const expect = DEFAULT_PRODUCTS;
        const data = await ProductService.findAll();

        const result = data.filter(product => product.id <= DEFAULT_PRODUCTS.length);

        assert.deepEqual(result, expect);
    })

    it('mostrando apenas um produto', async function () {
        const expect = DEFAULT_PRODUCTS[0];
        const data = await ProductService.findById(1);

        assert.deepEqual(expect, data);
    })

    it('criando um produto', async function () {
        const expect = CREATE_DEFAULT_PRODUCT;
        await ProductService.create(CREATE_DEFAULT_PRODUCT);

        const result = await ProductService.findById(3);
        delete result.id;

        assert.deepEqual(result, expect);
    })
})