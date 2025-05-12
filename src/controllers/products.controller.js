import ProductsService from "../services/products.service.js";
import { productSchema, productUpdateSchema } from "../schemas/product.schema.js";


class ProductsController {

  // Se obtienen todos los productos
  async getAllProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts(); // Llamar al servicio
      res.status(200).json(products);
    } catch (error) {
      console.error("Error al obtener los productos:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  // Se obtiene un producto por id
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductsService.getProductById(id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      res.status(200).json(product); // Devuelve el producto encontrado
    } catch (error) {
      console.error("Error al obtener el producto por ID:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  // Se crea un nuevo producto
  async createProduct(req, res) {
    const validatedData = productSchema.safeParse(req.body);

    if (!validatedData.success) {
      return res.status(400).json({
        error: "Datos inválidos",
        issues: validatedData.error.errors.map(e => ({ path: e.path, message: e.message }))
      });
    }

    try {
      const newProduct = await ProductsService.createProduct(validatedData.data);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  // Se actualiza un producto
  async updateProduct(req, res) {
    const result = productUpdateSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: "Datos inválidos",
        issues: result.error.errors.map(e => ({ path: e.path, message: e.message }))
      });
    }

    try {
      const { id } = req.params;
      const updated = await ProductsService.updateProduct(id, result.data);
      if (!updated) return res.status(404).json({ error: "Producto no encontrado" });
      res.status(200).json(updated);
    } catch (error) {
      console.error("Error al actualizar el producto:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  // Se elimina un producto
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
