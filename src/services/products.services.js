import { Product } from "../sequelize_models/product_model.js";

class ProductsService {
  async getAllProducts() {
    try {
      // Filtramos productos eliminados, solo traemos los no eliminados
      const products = await Product.findAll({ where: { is_deleted: false } });
      return products;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      // Filtramos también por is_deleted para no devolver productos eliminados
      const product = await Product.findOne({
        where: { product_id: id, is_deleted: false },
      });
      return product;
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error);
      throw error;
    }
  }

  async createProduct(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      console.error("Error al crear producto:", error);
      throw error;
    }
  }

  async updateProduct(id, data) {
    try {
      const product = await Product.findByPk(id);
      if (!product) return null;
      await product.update(data);
      return product;
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) return null;

      // Soft delete: actualiza el campo is_deleted a true
      await product.update({ is_deleted: true });
      return product;
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      throw error;
    }
  }
}

export default new ProductsService();
