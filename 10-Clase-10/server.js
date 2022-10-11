import express from "express";
import handlebars from "express-handlebars";
import productshbs from "./products-hbs.js";
import productsejs from "./products-ejs.js";
import productspug from "./products-pug.js";
import http from "http";
import { Server } from "socket.io";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("./public"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use("/hbs/", productshbs);
app.use("/ejs/", productsejs);
app.use("/pug/", productspug);

const PORT = 8080;

const server = http.createServer(app);

export const io = new Server(server);
io.on("connection", function (socket) {
  socket.emit("products", products);
  socket.on("update", (data) => {
    products.push(data);
    io.sockets.emit("products", products);
  });

  socket.emit("mensajes", mensajes);
  socket.on("mensajes_nuevos", (data) => {
    mensajes.push(data);
    console.log(data);
    io.sockets.emit("mensajes", mensajes);
  });

  console.log("Conecta2");
});
const products = [];
const mensajes = [];

// app.listen(PORT, (err) => {
//   if (err) console.log(err);
//   console.log(`Listening on port ${PORT}`);
// });

server.listen(8080, () => {
  console.log("listening on *:8080");
});
