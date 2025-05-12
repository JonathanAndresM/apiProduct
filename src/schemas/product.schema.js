import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Nombre del producto es requerido").max(20, "Nombre del producto no puede exceder 20 caracteres"),
  description: z.string().min(1, "Descripción del producto es requerida").max(150, "Descripción del producto no puede exceder 150 caracteres"),
  stock: z.number().int().nonnegative("Stock no puede ser negativo"),
});

export const productUpdateSchema = z.object({
  name: z.string().max(20, "Nombre del producto no puede exceder 20 caracteres").optional(),
  description: z.string().max(150, "Descripción del producto no puede exceder 150 caracteres").optional(),
  stock: z.number().int().nonnegative("Stock no puede ser negativo").optional(),
});