
    // Ejercicio 7: Crear un array de objetos utilizando una función constructora.
  
    function Auto(autos){
        this.autos = autos
    }

    const autosArray = new Auto(['Tesla', 'Ford', 'Fiat', 'BMW'])
    console.table(autosArray);
