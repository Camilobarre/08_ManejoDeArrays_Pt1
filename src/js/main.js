console.groupCollapsed("Creacion de Arrays");
const array1 = new Array;
const array2 = Array("a", "b", "c")
const array3 = []

console.log(array1);
console.log(array2);
console.log(array3);

console.groupEnd();

console.groupCollapsed("Consultar datos del array");

//Posicion     0  1  2  3  4    5        6       7     8      9
const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]

console.log(array);
console.log("El array tiene", array.length, "elementos");
//Dos formas de extraer un elemento en el array
console.log(array[6]);
console.log(array.at(6));

//Formas de extraer el último elemento
console.log(array[array.length - 1]);
console.log(array.at(-1));

console.log(array.indexOf("mundo")) //True Retorna la posicion
console.log(array.indexOf("zulu")) //Si no aparece el dato, devuelve un -1

console.groupEnd();

console.groupCollapsed("Actualizar elementos del array");

console.log(array);
array[5] = "hello" //Modificando en la posicion 5
console.log(array);

console.groupEnd();

console.groupCollapsed("Agregar elementos del array");

console.log(array);
array[10] = "bravo"
console.log(array);
array[11] = "charlie"
console.log(array);
array.push("delta") //Push por defecto pone al final el array
console.log(array);
array[13] = "echo"
console.log(array);
array.unshift("1") //Unshift agrega al principio de la lista
array.unshift("2")
console.log(array);

console.groupEnd();

console.groupCollapsed("Eliminar elementos del array");

console.log(array);
array.pop()
console.log(array);
array.pop()
console.log(array);
delete array[2]
console.log(array);

//Con pop todavía conservas la variable, con delete la eliminas definitivamente
let positionEliminada = array.pop()
console.log(array);
console.log(positionEliminada);

//Con shift eliminas desde la primera posició
array.shift()
console.log(array);

console.groupEnd();

console.groupCollapsed("Suma de arrays");

const objeto1 = {
    nombre: "alpha",
    apellido: "bravo",
}
const objeto2 = {
    nombre: "26 años",
    apellido: "medellin"
}
// const objeto3 = {...objeto1, ...objeto2}
console.log(objeto1)
console.log(objeto2)
// console.log(objeto3)
Object.assign(objeto1, objeto2)
console.log(objeto1)

let primerosNumeros = [1, 2, 3, 4, 5]
let segundosNumeros = [6, 7, 8, 9, 10]

console.log(primerosNumeros);
console.log(segundosNumeros);

//Concat se considera para sumar dos array
segundosNumeros = segundosNumeros.concat(primerosNumeros, 233, "hola", true)
let sumaNumeros = primerosNumeros.concat(segundosNumeros)

primerosNumeros.push(...segundosNumeros)
console.log(primerosNumeros);
console.log(sumaNumeros);

console.groupEnd();

console.groupCollapsed("Listar los arrays");

let listaSupermercado = [
    "arroz",
    "pan",
    "arepa",
    "aguapanela",
    "huevos",
    "guaro",
    "pescado",
    "cafe",
    "queso",
    "leche",
    "carne"
]

//Imprimir con For clásico
console.groupCollapsed("Ciclo For")
for (let i = 0; i < listaSupermercado.length; i++) {
    console.log(listaSupermercado[i].toUpperCase());
}
console.groupEnd();

//Imprimir con While
console.groupCollapsed("Ciclo While")
let i = 0
while (i < listaSupermercado.length) {
    console.log(listaSupermercado[i].toUpperCase());
    i++
}
console.groupEnd();

//Imprimir con For Of (Si necesito solo los valores)
console.groupCollapsed("Ciclo For Of")
for (const producto of listaSupermercado) {
    console.log(producto.toUpperCase());
}
console.groupEnd();

//Imprimir con For Each (Si necesito los indices)
console.groupCollapsed("Ciclo For Each")
listaSupermercado.forEach((producto, indice) => {
    console.log(producto.toUpperCase(), "esta en la posicion", indice);
});
console.groupEnd();

console.groupEnd();

console.groupCollapsed("Map")
console.log(listaSupermercado);

//Map sirve para alterar los resultados originales de la lista
// listaSupermercado = listaSupermercado.map(lista => {
//     console.log(lista.toUpperCase())
//     return lista.toUpperCase()
// })

listaSupermercado = listaSupermercado.map(producto => producto.toUpperCase())
console.log(listaSupermercado);

console.groupEnd();