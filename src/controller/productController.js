import UserService from '../service/productService.js'

class ProductController {
    async findAll(request, response) {
        const users = await UserService.findAll()

        response.writeHead(200, { 'content-type': 'application/json' })
        response.end(JSON.stringify(users));
    } 
}

export default new ProductController()