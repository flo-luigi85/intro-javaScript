class Prenda {
    constructor(nombre, modelo, tipo, talle, temporada, valoracion, id) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.tipo = tipo;
        this.talle = parseInt(talle);
        this.temporada = temporada;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }
    valorar(valoracion) {
        this.valoracion = parseInt(valoracion);
    }
}

const prendas = [
    new Prenda('Campera', 'keira', 'Abrigo', 1, 'Invierno', 5, 1),
    new Prenda('Campera', 'Trivor', 'Abrigo', 2, 'Invierno', 9, 2),
    new Prenda('Pantalon', 'Urbano', 'Liviano', 4, 'Verano', 6, 3),
    new Prenda('Pantalon', 'Trekking', 'Outdoor', 3, 'Invierno', 5, 4),
    new Prenda('Camisa', 'Sydney', 'Liviano', 3, 'Verano', 4, 5),
    new Prenda('Remera', 'Icon', 'Liviano', 6, 'Verano', 3, 6),
    new Prenda('Remera', 'Asterix', 'Outdoor', 7, 'Invierno/verano', 2, 7),
    new Prenda('Campera/polar', 'Ben', 'Outdoor', 7, 'Invierno/verano', 3, 8)

]
console.log(prendas);



let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa el nombre de las camperas/pantalon/camisa/remera: Tipo de prenda, Modelo, Tipo, Talle(de 1 a 7), Temporada, Valoracion, Separados por una barra diagonal (/) Teclea S para salir');
                        
    if (ingreso.toUpperCase() == 'S') {
        continuar = false;
        break;
    }
    let datos = ingreso.split('/');
    console.log(datos);
    const prenda = new Prenda(datos[0], datos[1], datos[2], datos[3], datos[4]);

    prendas.push(prenda);
    prenda.asignarId(prendas);
    console.log(prendas);
} 

