
//Hi!
//Abstraccion
//Funciones de orden superior
 /* let total =0;
for(let i = 1; i <= 10; i++){
    total += i;
}
console.log(total); 
console.log( sumarRango(1, 10) ); */

function porCadaUno(arr,fn){
    for(const elemento of arr){
        fn(elemento)
    }
}
function cubo(num){
    let resultado = num * num * num;
    console.log(resultado);

}
const numeros = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]


/* porCadaUno(numeros, cubo);
porCadaUno(numeros,mostrar);

function mostrar(elemento){
    alert(elemento);
} */


// METODO FOR EACH
const duplicado = []

porCadaUno(numeros, (elemento)=>{duplicado.push(elemento)})

const triplicado = []
numeros.forEach((elemento)=>{
    elemento = elemento * 3;
    triplicado.push(elemento)
})
console.log(triplicado);

//=====================================================
const cursos = [{
    nombre: 'JavaScript',
    precio: 15000
},{
   nombre: 'React',
   precio: 22000
},{
    nombre: 'Anhular',
    precio: 22500
},{
    nombre: 'Desarrollo',
    precio: 16000
},


]

//metodo find | metodo some | metodo filter
const encontrado = cursos.find((curso)=>curso.precio>1600&&curso.precio<22000);

console.log(encontrado);

const alguno = cursos.some((curso)=>curso.precio>1600&&curso.precio<22000);

console.log(alguno);

const filtrado = cursos.filter((curso)=>curso.precio>1600&&curso.precio<22000);
console.log(filtrado); // hasta las 20:9 hs


let keyword = prompt('Ingresa el termino de busqueda');
const otroFiltrado = cursos.filter((curso)=> curso.nombre.includes(keyword))

//el metodo filter devuelve un array

const cursoDescuento = cursos.map((curso)=>{
    return{
        nombre: curso.nombre, precio: curso.precio * .50
    }
})

console.log(cursos);
console.log(cursoDescuento);
//========================================

//Metodo reduce (valor tipo number)

//const totalArray = numeros.reduce((acumulador,numero=>acumulador+numero,0));

//console.log(totalArray);

/* const precioFinal = cursosDescuento.reduce((acumulador,curso)=>{ return acumulador+=curso.precio },0);

console.log(precioFinal);ghfgh
 */

//======================
//Objeto Math

let azar =Math.random()*10;
console.log(azar);


// toFixed (devuelve un string)}


let dados = []

for(let i =0; i<5; i++){
    let dado = Math.ceil(Math.random()*6);
    dados.push(dado)
}
console.log(dados);

//=============== for each

let arr = [2,4,6,8]

arr.forEach(function(element,index,arrego){
    console.log(element*2)
});