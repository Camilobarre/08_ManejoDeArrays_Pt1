//Ejercicio 1
let fruta = ["manzana", "pera", "naranja", "mandarina", "limon"]
console.log(fruta);

//Ejercicio 2
for (let i = 0; i < fruta.length; i++) {
    console.log(`La fruta es ${fruta[i]}`);
}

//Ejercicio 3
fruta.forEach((producto, indice) => {
    console.log(producto.toUpperCase(), "está en la posición", indice);
});

//Ejercicio 4
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros);

//Ejercicio 5
let i = 0
while (i < numeros.length) {
    console.log(numeros[i]);
    i++
}

//Ejercicio 6
fruta.push("zapote")
console.log(fruta);

//Ejercicio 7
delete numeros[2]
console.log(numeros);

//Ejercicio 8
fruta.reverse()
console.log(fruta);

//Ejercicio 9
numeros.sort((a, b) => b - a)
console.log(numeros);

//Ejercicio 10
function buscaFruta(fruta) {
    return fruta.includes(fruta);
}

//Ejercicio 11
console.log(fruta[0]);

//Ejercicio 12
console.log(fruta.at(-1));

//Ejercicio 13
fruta.forEach(fruta => {
    frutaArray = fruta.split('')
    console.log(frutaArray);
});

//Ejercicio 14
for (const i of numeros) {
    console.log(i);
}

//Ejercicio 15
duplicados=numeros.map((numero => numero*2))
console.log(duplicados)

//Ejercicio 16
let array1=[4,5,6]
let array2=[8,9,10]
varinicial=0

//Ejercicio 17
console.log(array1.reduce((acumulator,index)=>acumulator+index,varinicial))
for (let i = 0; i < array1.length; i++) {
    sumaArray1 += array1[i];
}

console.log(array2.reduce((acumulator,index)=>acumulator+index,varinicial))
for (let i = 0; i < array2.length; i++) {
    sumaArray2 += array2[i];
}

console.log(sumaArray1,sumaArray2);

//Ejercicio 18
