const Container = require("./clase");
const data = require("./archivo");

const products = new Container("./archivo.txt");
products.save(data);
products.getById(2);
products.getAll();
products.deleteById(2);
products.deleteAll();
