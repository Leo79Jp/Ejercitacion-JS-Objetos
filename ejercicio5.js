
    // Ejercicio 5: Crear una función constructora para objetos auto.

      function Auto (marca, modelo, año, color) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = function () {
          return color
        }
      }
    const fiat = new Auto('Fiat', 'Cronos', '2018', 'Negro');
    const ford = new Auto('Ford', 'Fiesta', '2014', 'Blanco');
    const chery = new Auto('Chery', 'QQQ', '2015', 'Rojo');

    console.log(`La marca del auto es: ${fiat.marca}`)
    console.log(`El modelo del auto es: ${fiat.modelo}`)
    console.log(`El año del auto es: ${fiat.año}`)
    console.log(`La color del auto es: ${fiat.color()}`)
    console.log('----------------------------');
    console.log(`La marca del auto es: ${ford.marca}`)
    console.log(`El modelo del auto es: ${ford.modelo}`)
    console.log(`El año del auto es: ${ford.año}`)
    console.log(`La color del auto es: ${ford.color()}`)
    console.log('----------------------------');
    console.log(`La marca del auto es: ${chery.marca}`)
    console.log(`El modelo del auto es: ${chery.modelo}`)
    console.log(`El año del auto es: ${chery.año}`)
    console.log(`La color del auto es: ${chery.color()}`)


