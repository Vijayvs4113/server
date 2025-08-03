// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MERN Auth API",
      version: "1.0.0",
      description: "API documentation for your MERN Auth backend",
    },
    servers: [
      {
        url: "https://server-gpjz.onrender.com", // Change this to your deployed URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Or wherever your route files are
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
