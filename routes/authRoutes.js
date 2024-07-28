const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.post("/user", authController.getToken);
router.post("/admin", authController.getAdminToken);

module.exports = router;
