import ProductsService from "../services/products.service.js";

class ProductsController {
  async getAllProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts(); // Llamar al servicio
      res.status(200).json(products);
    } catch (error) {
      console.error("Error al obtener los productos:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductsService.getProductById(id); // Llamar al servicio
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      res.status(200).json(product); // Devuelve el producto encontrado
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async createProduct(req, res) {
    try {
      const newProduct = await ProductsService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updated = await ProductsService.updateProduct(id, req.body);
      if (!updated)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.status(200).json(updated);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ProductsService.deleteProduct(id);
      if (!deleted)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.status(200).json({ msg: "Producto eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar el producto", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}

export default new ProductsController();
