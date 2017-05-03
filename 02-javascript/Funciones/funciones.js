//void 
function holamundo() {
    console.log('Hola mundo')
}
holamundo();

// el doble de un entero

function doble(numero) {
return numero*2;
}
console.log(doble(2));

// Devuelva mutl 2 num
function multiplicar(a,b) {
    return a*b;
}
console.log(multiplicar(2,8));

var multiplicar2 = multiplicar;

console.log(multiplicar2(2,7));

// guardar en una varibale una funcion que imprime hola

var hola = function () {
    console.log('hola')
}

console.log(hola());

function hazAlgo(algo) {
    algo()
}

hazAlgo (function () {
    console.log('Hola')
})

function transformarNumero(numero, transformacion) {
    transformacion(numero)
}

transformarNumero(5, function (numero) {
    return numero*2;
})