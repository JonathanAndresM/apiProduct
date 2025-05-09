import { Router } from "express";
import productsRouter from "./products.route.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API v1" });
});

router.use("/products", productsRouter);

export default router;
