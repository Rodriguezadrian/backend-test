const express = require("express");
const router = express.Router();
const productRoutes = require("./productRoutes");
const clientRoutes = require("./clientRoutes");
const authRoutes = require("./authRoutes");
const dbRoutes = require("./dbRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/cellphones", productRoutes);
router.use("/client", clientRoutes);
router.use("/database", dbRoutes);
router.use("/admins", adminRoutes);
router.use("/token", authRoutes);

module.exports = router;
