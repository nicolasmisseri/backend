const fs = require('fs');

class Container {
  constructor(file) {
    this.file = file;
  }

  async save(object) {
    try {
      for (let i = 0; i < object.length; i++) {
        object[i].id = 1 + i;
      }
      return `Saved ${object.length} products!`;
      await fs.promises.writeFile(this.file, JSON.stringify(object));
    } catch (error) {
      throw new Error(error, 'Error al guardar el producto');
    }
  }

  async getById(id) {
    try {
      const content = await this.getAll();
      let idFound = content.find((prod) => prod.id === id);
      return idFound;
    } catch (error) {
      throw new Error(error, 'Error al obtener el producto por id');
    }
  }

  async getAll() {
    try {
      let content = await fs.promises.readFile(this.file, 'utf-8');
      return content;
      return JSON.parse(content);
    } catch (error) {
      throw new Error(error, 'Error al obtener todos los productos');
    }
  }

  async deleteById(id) {
    try {
      const content = await this.getAll();
      const deleted = content.filter((producto) => producto.id !== id);
      await fs.promises.writeFile(this.file, JSON.stringify(deleted, null, 4));
      return 'Deleted';
    } catch (error) {
      throw new Error(error, 'Error to delete the product by id');
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.file, []);
      return 'Todos los productos eliminados.';
    } catch (error) {
      throw new Error(error, 'Error al borrar todos los productos');
    }
  }
}

module.exports = Container;