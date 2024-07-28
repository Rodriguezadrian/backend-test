require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerOptions");
const routes = require("./routes");
const YAML = require("yamljs");

const app = express();

const swaggerDocument = YAML.load("./documentation.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get("/", (req, res) => res.json({ msg: "Welcome to Cellphone API!" }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running`);
});
