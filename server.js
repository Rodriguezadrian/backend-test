require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.get("/", (req, res) => res.json({ msg: "Welcome to Cellphone API!" }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running`);
});