/* 
>> Consigna: 
1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[] 
*/

class usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  /*
    3) Hacer que Usuario cuente con los siguientes métodos:
        getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
        addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
        countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
        addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: 				String, autor: String } al array de libros.
        getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    */

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

// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

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
