const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(checkJwt({ secret: process.env.SECRET_JWT, algorithms: ["HS256"] }));
router.get("/", clientController.index);
router.post("/add", clientController.store);
router.get("/:id", clientController.show);
router.patch("/:id", clientController.update);
router.delete("/:id", clientController.destroy);

module.exports = router;
