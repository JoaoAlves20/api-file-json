import path from 'path'
import url from 'url'
import fs from 'fs/promises'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const caminho = path.join(__dirname, '../mocks', 'products.json')

class ProductService {
    async findAll() {
        const data = await fs.readFile(caminho, 'utf-8')
        return JSON.parse(data);
    }
}

export default new ProductService()