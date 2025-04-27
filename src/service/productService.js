import path from 'path';
import url from 'url';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminho = path.join(__dirname, '../mocks', 'products.json');

class ProductService {
    async findAll() {
        const data = await fs.readFile(caminho, 'utf-8');
        return JSON.parse(data);
    }

    async findById(id_product) {
        const data = await this.findAll();

        return data.find(product => product.id === id_product);
    }

    async create({ product, price, category }) {
        const data = await this.findAll();

        const newProduct = {
            id: data.length + 1,
            product, price, category
        }

        data.push(newProduct);
        return await fs.writeFile(caminho, JSON.stringify(data), 'utf-8')
    }
}

export default new ProductService();