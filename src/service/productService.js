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

    async create(body) {
        const data = await this.findAll();

        const newProduct = {
            id: data.length + 1,
            ...body
        }

        data.push(newProduct);
        return await fs.writeFile(caminho, JSON.stringify(data), 'utf-8')
    }

    async update(id, body) {
        const data = await this.findAll();

        const newData = data.map((item) => item.id === id ? {
            id: item.id, ...body
        } : item);
        return await fs.writeFile(caminho, JSON.stringify(newData), 'utf-8');
    }

    async delete(id) {
        const data = await this.findAll();
        const findProduct = await this.findById(id)

        const newData = data.filter((item) => item.id !== id);
        await fs.writeFile(caminho, JSON.stringify(newData), 'utf-8');

        return findProduct;
    }
}

export default new ProductService();