const { sql } = require("@vercel/postgres");

async function createTables() {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Pets (
        Name varchar(255),
        Owner varchar(255)
      );
    `;
    console.log("Tables created successfully!", result);
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

module.exports = createTables;
