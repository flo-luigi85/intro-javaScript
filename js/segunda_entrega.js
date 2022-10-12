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
    new Prenda('Campera', 'keira', 'Abrigo', 1, 'Invierno', 8, 1),
    new Prenda('Campera', 'Trivor', 'Abrigo', 2, 'Invierno', 9, 2),
    new Prenda('Campera', 'Ben', 'Outdoor', 7, 'Invierno/verano', 3, 3),
    new Prenda('Campera', 'Urbano', 'Liviano', 4, 'Verano', 5, 4),
    new Prenda('Campera', 'Trekking', 'Outdoor', 3, 'Invierno', 6, 5),
    new Prenda('Campera', 'Sydney', 'Liviano', 3, 'Verano', 3, 6),
    new Prenda('Campera', 'Icon', 'Liviano', 6, 'Verano', 4, 7),
    new Prenda('Campera', 'Asterix', 'Outdoor', 7, 'Invierno/verano', 3, 8)
    

]
console.log(prendas);



let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa el nombre de las camperas: Tipo de prenda, Modelo, Tipo(Abrigo/Liviano/Urbano/Outdoor), Talle(de 1 a 7), Temporada(verano/invierno), Valoracion, Separados por una barra diagonal (/) Teclea S para salir');
                        
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
//=====================
let criterio = prompt('Elija una opción:\n1 - Campera \n2 - Mejor a peor puntuado \n3 - Talle(Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a,b)=>a.nombre.localeCompare(b.nombre));
            return nombreAscendente;        
        case '2':
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
        case '3':
            return arrayOrdenado.sort((a, b) => b.talle - a.talle);
        default:
            alert('No es un criterio válido');
            break;
    }
}

//============================================

function crearStringResultado(array){
    let info = '';

    array.forEach(elemento=>{
        info += 'Nombre: ' + elemento.nombre + '\nCampera: ' + elemento.modelo + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    })

    return info;
}

//====================================

alert(crearStringResultado(ordenar(criterio,prendas)));

//===============================================

let modeloElegido = prompt('Escribí el modelo de prenda para que te mostremos');

const filtrado = prendas.filter((prenda)=>prenda.modelo.toLowerCase().includes(modeloElegido.toLowerCase()))

//====================================

if (filtrado.length==0){
    alert('Lo sentimos. Por ahora no esta en nuestro catálogo');
}else{
    const imprimible = filtrado.map((prenda)=>prenda.nombre);
    alert('Las prendas de nuestro catálogo, concuerdan con:\n- ' + imprimible.join('\n- '));
}
