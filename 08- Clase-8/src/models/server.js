const express = require("express");
const CORS = require("cors");
const productsRouter = require("../routes/products.route");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.apiProductsPath = "/api/products";

 
    this.middlewares();


    this.routes();
  }

  middlewares() {
    this.app.use(CORS());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiProductsPath, productsRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
