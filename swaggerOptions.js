const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000", // La URL base de tu API
      },
    ],
  },
  apis: ["./routes/*.js"], // Ruta a los archivos donde están los comentarios Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
