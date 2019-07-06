const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.Database_URL || "postgres://localhost/acem_products_db"
);

const Product = db.define('product',{
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  }
})

module.exports = {
  db,
  models: {
    Product
  }
}
