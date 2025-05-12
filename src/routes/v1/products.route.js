import { Router } from "express";
import productsController from "../../controllers/products.controller.js";
import { validateSchema } from "../../middlewares/validateSchema.js";
import { productSchema, productUpdateSchema } from "../../schemas/product.schema.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:id", productsController.getProductById);
productsRouter.post("/",validateSchema(productSchema), productsController.createProduct);
productsRouter.put("/:id", validateSchema(productUpdateSchema), productsController.updateProduct);
productsRouter.delete("/:id", productsController.deleteProduct);

export default productsRouter;
