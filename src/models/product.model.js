import sequelize from "../db/sequelize_conn.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    deletedAt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Product;
