require("dotenv").config();
const { sequelize } = require("./models");

async function createTables() {
  try {
    await sequelize.sync({ force: true });
    console.log("¡Tables created successfully!");
  } catch (error) {
    console.error("Error in tables:", error);
  }
}

if (require.main === module) {
  createTables().then(() => process.exit());
}

module.exports = createTables;
