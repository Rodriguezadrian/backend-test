const { Sequelize } = require("sequelize");
const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");
const Admin = require("./Admin");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};

if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions
);

Product.initModel(sequelize);
Category.initModel(sequelize);
User.initModel(sequelize);
Admin.initModel(sequelize);

Product.hasMany(Category, { foreignKey: "CategoryId" });
Category.belongsTo(Product);

module.exports = {
  sequelize,
  Product,
  Category,
  User,
  Admin,
};
