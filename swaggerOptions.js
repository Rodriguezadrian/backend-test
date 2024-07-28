const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cellphone API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "https://backend-test-tawny.vercel.app/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
