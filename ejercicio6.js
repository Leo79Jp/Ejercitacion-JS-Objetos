
    // Ejercicio 6: Utilizar un bucle for...in para iterar sobre las propiedades de un objeto auto.
      
      let auto = {
        marca : 'Ford',
        modelo : 'Fiesta',
        año : '2020',
        color : 'Rojo',
    }

      for (let dato in auto) {
        console.log(dato, auto[dato]);
        };
    
