// Importar los modelos de producto y precio desde models
// Importar sequelize
// import { sequelize } from '../db/sequelize_conn'

class ProductsController {

    async getAllProducts(req, res) {
        try {
            res.status(200).json({ msg: 'Listado de todos los productos' })
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' })
        }
    }

    async getProductById(req, res) {
        try {
            const { product_id } = req.params

            res.status(200).json({ msg: `Detalle del producto con ID: ${product_id}` })
        } catch (error) {
            console.error('Error al obtener el producto por ID:', error);
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