require("dotenv").config();

const runAllSeeders = async () => {
  await require("./categoriesSeeder.js")();
  await require("./productsSeeder.js")();
  await require("./userSeeder.js")();
  await require("./adminSeeder.js")();

  console.log("[Database] ¡Data inserted successfully!");
};

module.exports = runAllSeeders;

if (require.main === module) {
  runAllSeeders().catch((err) => {
    console.error("Error running seeders:", err);
  });
}
