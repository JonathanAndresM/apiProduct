import { Product } from "../sequelize_models/product_model.js"; // Importar el modelo de producto
import sequelize from "../sequelize_conn.js"; // Importar la conexión a la base de datos
// Importar los modelos de producto y precio desde models
// Importar sequelize
// import { sequelize } from '../db/sequelize_conn'

class ProductsController {

    async getAllProducts(req, res) {
        try {
            const products = await Product.findAll(); // Trae todos los productos de la tabla
            res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener los productos:', error.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async getProductById(req, res) {
        try {
            const { product_id } = req.params

            const product = await Product.findByPk(product_id); // Busca el producto por ID
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.status(200).json(product); // Devuelve el producto encontrado

        } catch (error) {
            console.error('Error al obtener el producto por ID:', error.message);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;

            res.status(201).json({ msg: 'Producto creado exitosamente (sin implementar)', data: productData });
        } catch (error) {
            console.error('Error al crear el producto:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }

    async updateProduct(req, res) {
        try {
            const { product_id } = req.params
            res.status(200).json({ msg: `Producto con ID: ${product_id} actualizado correctamente` })
        } catch (error) {
            console.error('Error al actualzar el producto:', error)
            res.status(500).json({ error: 'Error interno del servidor' })
        }
    }

    async deleteProduct(req, res) {
        try {
            const { product_id } = req.params
            res.status(200).json({ msg: `Producto con ID: ${product_id} "eliminado" exitosamente` })
        } catch (error) {
            console.error('Error al eliminar el producto', error)
            res.status(500).json({ error: 'Error interno del server' })
        }
    }
}

export default new ProductsController();