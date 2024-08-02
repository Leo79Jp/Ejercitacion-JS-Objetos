// Ejercicio 2: Añadir un método al objeto auto que devuelva una cadena con la descripción del auto.
let auto = {
    marca : 'Ford',
    modelo : 'Fiesta',
    año : '2020',
    descripcion (){
        return ('El Auto es marca ' + this.marca + ', es modelo ' + this.modelo + ', y del año ' + this.año )
    },
}
console.log(auto.descripcion());
