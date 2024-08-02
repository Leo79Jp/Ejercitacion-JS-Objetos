// Ejercicio 1: Crear un objeto literal que represente un auto con propiedades para la marca, modelo y año.
const prompt = require('prompt-sync')({ siging: true})

let auto = {
    marca : 'Ford',
    modelo : 'Fiesta',
    año : '2020',
}
console.table(auto);