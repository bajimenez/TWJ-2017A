// en javascript se define una variable con la palab
// ENTEROS

var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;

console.log(dos)
console.log(tres)
console.log(quince)
console.log(diezYSiete)

// FLOAT

var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//TODAS LAS DEMAS

var verdaderoOFalso = true;
var falso = false;
var nombre = 'Brayan';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -54632;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

console.log(cuatroString);

var numero2 = 2;
console.log(typeof numero2);

// OBJETOS

var brayan = {
        id:1,
    nombre: 'Brayan',
    createdAt : 'hoy',
    updateAt: new Date(),
    casado: true,
    prestamos:false,
    hijos:null,
    altura:1.75,
    negativo:-1,
    mascota : {
            nombre:'cachetes',
        fechaNacimiento: new Date()
    }
    };
console.log('Altura',brayan.altura);
brayan.altura = 1.70;
console.log('La nueva altura es',brayan.altura);

brayan.altura = {

    ancho:2.4,
    altro:1.69
}

console.log('El objeto altura es',brayan.altura)

// Borrar atributos de un objetos
delete brayan.altura.altro;

console.log(brayan.altura);
// anadir atribuitos a un objeto

brayan.juegos = 'varios'
console.log(brayan)

var arreglo = [
    1,
    'bry',
    2.4,
    false,
    true,
    null,
    undefined,
    new Date(),
    -32,
    {
        a:'b'
    }];

console.log(arreglo);

var nuevoObjeto = {
    papas:['chola','chaucha','Maria'],
    cebollas: ['patiena','perla']
}

console.log(arreglo[4]);

var matriz =[[0,1],[2,3]];
console.log(matriz[0][1])
console.log(nuevoObjeto.papas[1]);

var arregloDeObjetos = [
    {
        id:1,
        nombre:'adrian'
    },
    {
    id:2,
        nombre:'Brayan'
    }
]
console.log(arregloDeObjetos);

// Borrar BRAYAN del arregloDeObjetos

arregloDeObjetos.pop();
console.log(arregloDeObjetos);

// Borrar adrian del arregloDeObjetos
// splice('delimita las posicin en la que vamos a trabajar','numero de objetos que se remueven')
arregloDeObjetos.splice(0,1);
console.log(arregloDeObjetos);

arregloDeObjetos.splice(0,0,{id:3,nombre:'carmen'});
console.log(arregloDeObjetos);