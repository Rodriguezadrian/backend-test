require('dotenv').config();
const { sequelize, Product, Category, User, Admin } = require('./models');

async function createTables() {
  try {
    await sequelize.sync({ force: true });
    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

if (require.main === module) {
  createTables().then(() => process.exit());
}

module.exports = createTables;
