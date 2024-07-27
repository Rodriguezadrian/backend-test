const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkRole = require("../middlewares/permissionRequired");
const runAllSeeders = require("../seeders/runAllSeeders");
const createTables = require("../createTables");

// router.use(checkJwt({ secret: process.env.SECRET_JWT, algorithms: ["HS256"] }));
// router.use(checkRole.admin);
router.delete("/destroy", productController.destroyDB);
router.post("/run-seeders", async (req, res) => {
  try {
    await createTables();
    await runAllSeeders();
    res.status(200).json({ msg: "Seeders executed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error executing seeders", error });
  }
});

module.exports = router;
