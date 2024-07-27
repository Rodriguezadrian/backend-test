const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");
const checkRole = require("../middlewares/permissionRequired");

router.get("/", adminController.index);
router.post("/", adminController.store);
router.use(checkJwt({ secret: process.env.SECRET_JWT, algorithms: ["HS256"] }));
router.use(checkRole.admin);
router.get("/:id", adminController.show);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);

module.exports = router;
