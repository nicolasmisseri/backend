import express from "express";
import { io } from "./server.js";

const { Router } = express;
const router = Router();

let products = [];
let productList = () => products;

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  if (!products.length) {
    products.push(Object.assign({}, req.body, { id: 1 }));
  } else {
    products.push(
      Object.assign({}, req.body, {
        id: products[products.length - 1].id + 1,
      })
    );
  }

  // // emitir producto nuevo

  // io.emit("new_product", products[products.length - 1]);

  res.render("home", {
    newProductSaved: true,
    id: products[products.length - 1].id,
    title: products[products.length - 1].title,
  });
});

router.get("/productos", (req, res) => {
    io.on("new_products", (products) => res.render({products}))
  res.render("list", {
    productsExist: products.length,
    products: productList(),
  });

});

//otros metodos
router.get("/:id", (req, res) => {
  let productSelected = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!productSelected)
    res.send(`There is no product with id ${req.params.id}`);

  res.send(productSelected);
});

router.put("/:id", (req, res) => {
  let indexOfProductSelected = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!indexOfProductSelected)
    res.send(`There is no product with id ${req.params.id}`);

  req.body.price
    ? (products[indexOfProductSelected].price = req.body.price)
    : null;
  req.body.title
    ? (products[indexOfProductSelected].title = req.body.title)
    : null;
  req.body.thumbnail
    ? (products[indexOfProductSelected].thumbnail = req.body.thumbnail)
    : null;

  res.send(`Product with Id ${req.params.id} was updated`);
});

router.delete("/:id", (req, res) => {
  let indexOfProductSelected = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!indexOfProductSelected)
    res.send(`There is no product with id ${req.params.id}`);

  products.splice(indexOfProductSelected, 1);
  res.send(`Product with Id ${req.params.id} was deleted`);
});

export default router;
