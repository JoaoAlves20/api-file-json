import assert from 'assert'

import ProductService from '../src/service/productService.js'

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

describe('Testando os services', function () {
    it('mostrando todos os produtos', async function () {
        const expect = DEFAULT_PRODUCTS;
        const data = await ProductService.findAll()

        const result = data.filter(product => product.id <= DEFAULT_PRODUCTS.length)

        assert.deepEqual(result, expect)
    })
})