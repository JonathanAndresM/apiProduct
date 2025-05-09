import { Router } from "express";
import productsController from "../../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:id", productsController.getProductById);
productsRouter.post("/", productsController.createProduct);
productsRouter.put("/:id", productsController.updateProduct);
productsRouter.delete("/:id", productsController.deleteProduct);

export default productsRouter;
