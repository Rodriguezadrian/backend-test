const express = require("express");
const router = express.Router();
const productRoutes = require("./productRoutes");
const clientRoutes = require("./clientRoutes");
const authRoutes = require("./authRoutes");
const dbRoutes = require("./dbRoutes");

router.use("/cellphones", productRoutes);
router.use("/client", clientRoutes);
router.use("/token", authRoutes);
router.use("/database", dbRoutes);

module.exports = router;
