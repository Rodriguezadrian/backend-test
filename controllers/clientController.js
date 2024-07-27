const { Product, Sequelize, Category } = require("../models");

const clientController = {
  index: async (req, res) => {
    try {
      // const { sortBy, order } = req.query;
      const products = await Product.findAll({
        // order: [[sortBy || "name", order || "ASC"]],
      });
      res.json(products);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "There was a problem trying to get the products" });
    }
  },
  store: async (req, res) => {
    const {
      name,
      description,
      operating_system,
      image,
      brand,
      price,
      processor,
      ram,
      stock,
      storage,
      weight,
      display,
      resolution,
      cameras,
      battery,
      CategoryId,
    } = req.body;
    try {
      const newProduct = await Product.create({
        name,
        description,
        operating_system,
        image,
        brand,
        price,
        processor,
        ram,
        stock,
        storage,
        weight,
        display,
        resolution,
        cameras,
        battery,
        CategoryId,
      });
      res.json({ msg: `The cellphone was created succesfully` });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "There was a problem trying to create the cellphone",
      });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: { id },
        include: [
          {
            model: Category,
            include: [
              {
                model: Product,
              },
            ],
          },
        ],
      });
      res.json(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "There was a problem trying to get the product" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      await Product.update(req.body, { where: { id } });
      const product = await Product.findByPk(id);
      res.json({ msg: "The cellphone was updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "There was a problem trying to update the cellphone",
      });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.destroy({ where: { id } });
      res.json({ msg: "Cellphone deleted", product: product });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: "There was a problem trying to delete the cellphone",
      });
    }
  },
};

module.exports = clientController;
