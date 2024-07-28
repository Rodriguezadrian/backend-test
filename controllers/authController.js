const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");
const bcrypt = require("bcryptjs");

async function getToken(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.json({ msg: "Check your credentials..." });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.json({ msg: "Check your credentials..." });

    // Aquí puedes agregar la validación de permisos para usuarios
    if (!user.hasUserPermission) {
      return res
        .status(403)
        .json({ msg: "User doesn't have the required permission" });
    }

    const token = jwt.sign(
      { sub: user.id, email: user.email, isAdmin: false, permission: "user" },
      process.env.SECRET_JWT
    );
    const { id, email, firstname, lastname } = user;
    res.json({ token, id, email, firstname, lastname });
  } catch (error) {
    res.json({ msg: "There was an error in the token", error });
  }
}

async function getAdminToken(req, res) {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });
    if (!admin) return res.json({ msg: "Check your credentials" });

    const match = await bcrypt.compare(req.body.password, admin.password);
    if (!match) return res.json({ msg: "Check your credentials" });

    if (!admin.hasAdminPermission) {
      return res
        .status(403)
        .json({ msg: "Admin doesn't have the required permission" });
    }

    const token = jwt.sign(
      { sub: admin.id, isAdmin: true, permission: "admin" },
      process.env.SECRET_JWT
    );
    const { email, id } = admin;
    res.json({ token, email, id });
  } catch (error) {
    res.json({ msg: "There was an error in the token", error });
  }
}

module.exports = { getToken, getAdminToken };
