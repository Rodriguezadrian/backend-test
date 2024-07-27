require("dotenv").config();

const runAllSeeders = async () => {
  await require("./categoriesSeeder.js")();
  await require("./productsSeeder.js")();
  await require("./userSeeder.js")();
  await require("./adminSeeder.js")();

  console.log("[Database] ¡Data inserted succesfully!");
};

module.exports = runAllSeeders;
