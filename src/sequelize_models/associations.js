import Product from './product_model.js';
import Product_price from './product_price.js';

Product.hasMany(Product_price, { foreignKey: 'product_id' });
Product_price.belongsTo(Product, { foreignKey: 'product_id' });

export default function setupAssociations() {
	// Puedes usar esta función para llamarla desde el server.js si querés
}