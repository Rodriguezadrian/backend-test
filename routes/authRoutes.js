const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API endpoints related to admins
 */

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get admin token
 *     description: Returns a token for an admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Token
 *         content:
 *             schema:
 *               type: string
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID
 *                   name:
 *                     type: string
 *                     description: The user name
 */
router.post("/user", authController.getToken);
router.post("/admin", authController.getAdminToken);

module.exports = router;
