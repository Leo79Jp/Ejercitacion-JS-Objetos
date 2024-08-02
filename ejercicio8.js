
    // Ejercicio 8: Añadir un método a la función constructora Auto para mostrar la descripción del auto.
    function Auto (marca, modelo, año, color, descripcion) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = function () {
          return color
        }
        this.descripcion = function(){
            return ('El Auto es marca ' + this.marca + ', es modelo ' + this.modelo + ', y del año ' + this.año + ' y de color ' + this.color() )
        }
      }
    const fiat = new Auto('Fiat', 'Cronos', '2018', 'Negro');
    const ford = new Auto('Ford', 'Fiesta', '2014', 'Blanco');
    const chery = new Auto('Chery', 'QQQ', '2015', 'Rojo');

    console.log(fiat.descripcion());
    console.log(ford.descripcion());
    console.log(chery.descripcion());

