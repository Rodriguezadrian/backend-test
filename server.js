require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const YAML = require("yamljs");
const path = require("path");

const app = express();

const swaggerDocument = YAML.load(
  path.join(__dirname, "documentation.yaml")
);

const allowedOrigins = ["https://frontend-test-delta-sooty.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req, res) => res.json({ msg: "Welcome to Cellphone API!" }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running`);
});
