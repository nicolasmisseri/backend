// Punto 1 y 2

class usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

// Punto 3

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({
      nombre: titulo,
      autor: autor,
    });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

// Punto 4

const Nico = new usuario(
  "Nicolas",
  "Misseri",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundacion", autor: "Isaac Asimov" },
  ],
  ["perro", "gato"]
);

console.log(Nico.countMascotas());
console.log(Nico.getFullName());
console.log(Nico.getBookNames());
