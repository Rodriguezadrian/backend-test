const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.index);
/**
 * @swagger
 * /cellphones:
 *   get:
 *     summary: Obtener lista de teléfonos celulares
 *     responses:
 *       200:
 *         description: Lista de teléfonos celulares
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "iPhone 12"
 *                   price:
 *                     type: number
 *                     format: float
 *                     example: 999.99
 */
router.get("/:id", productController.show);
// router.post("/add", productController.store);
// router.patch("/:id", productController.update);
// router.delete("/:id", productController.destroy);

module.exports = router;
