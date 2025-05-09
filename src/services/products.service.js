import { Product } from "../models/product.model.js";

class ProductsService {
  async getAllProducts() {
    try {
      // Filtramos productos eliminados, solo traemos los no eliminados
      const products = await Product.findAll();
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
        where: { id },
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

      await product.destroy();

      return product;
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      throw error;
    }
  }
}

export default new ProductsService();
