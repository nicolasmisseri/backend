const socket = io();

const addProducts = document.querySelector("#addProducts");
addProducts.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    title: document.querySelector("#title").value,
    price: document.querySelector("#price").value,
    thumbnail: document.querySelector("#thumbnail").value,
  };

  document.querySelector("#title").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#thumbnail").value = "";

  console.log(product);

  socket.emit("update", product);
});

const addMessages = document.querySelector("#addMessages");
addMessages.addEventListener("submit", (e) => {
  e.preventDefault();

  let today = new Date();

  const message = {
    author: document.querySelector("#email").value,
    date: today.toLocaleString(),
    message: document.querySelector("#message").value,
  };

  document.querySelector("#message").value = "";

  socket.emit("mensajes_nuevos", message);
});

socket.on("products", handlerEvent);
socket.on("mensajes", handlerChat);

async function handlerEvent(products) {
  const template = await fetch("/list.hbs");
  const textTemplate = await template.text();
  const functionTemplate = Handlebars.compile(textTemplate);
  const html = functionTemplate({ products });

  document.querySelector("#products").innerHTML = html;
}

async function handlerChat(mensajes) {
  const template = await fetch("/chat.hbs");
  const textTemplate = await template.text();
  const functionTemplate = Handlebars.compile(textTemplate);
  const html = functionTemplate({ mensajes });

  document.querySelector("#messages").innerHTML = html;
}
