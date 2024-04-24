// esto es un comentario 

/*
Esto es un comentario 
en
varias 
lineas
*/

// Variables

var mynombre = 'Esto es una cadena de texto ';
console.log(mynombre)

let myString = 'Esto es una cadena de texto';
myString = 'Aqui cambio el valor de la cadena de teto';
console.log(typeof myString)
myString = 6
console.log(myString)
console.log(typeof myString)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBolean = false
console.log(myBolean)
console.log(typeof myBolean)

// tipo de dato null
myBolean = null 
console.log(myBolean)

// tipo de dato undefined
let undefined
console.log(undefined)


// Constantes - no se pueden cambiar su valor  
const myConst = 'Mi propiedad constante'
console.log(myConst)

//Control de flujo
myNumber = 10

if (myNumber == 11 && myString == 'Hola') {
    console.log('El valor es 11')
} else if (myNumber == 11 || myString == 'Hola'){
    console.log('El valor si es 11')
} else {
    console.log('El valor no es 10')
}



