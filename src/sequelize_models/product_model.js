import sequelize from "../db/sequelize_conn.js";
import { DataTypes } from "@sequelize/core";

export const Product = sequelize.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 100],
        msg: "El nombre del producto debe tener entre 3 y 100 caracteres",
      },
    },
  },
  product_description: {
    type: DataTypes.STRING,
  },
  product_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: "El stock no puede ser negativo",
      },
    },
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Product;
