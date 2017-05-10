//OPERADORES
//FOR EACH

let arregloNumeros = [1,2,3,4,5,6];
let resultado= arregloNumeros.forEach((numero,indice)=>{
        console.log(indice,numero);
})

console.log('resultado:',resultado)

function nuevoForEach(arreglo,funcion){
    for (var i =0;i<arreglo.length;i++){
        funcion(arreglo[i],i,arreglo)
    }
}

nuevoForEach(arregloNumeros,(valor,index)=>{
    console.log()
})
//OPERADOR MAP


let arreglo=[1,3,"Js",5]

let resultado = arreglo.map((valor,indice)=>{
        return valor;
})
console.log(resultado)

let arreglo1=[{nombre:"brayan"},{nombre:"felipe"}]

let resultado1= arreglo1.map((usuario)=>{
    usuario.nombre = "Sr o Sra"+  usuario.nombre;
usuario.fechaCreacion =  new Date();
usuario.anoCreacion= usuario.fechaCreacion.getFullYear();
return usuario;
})

console.log(resultado1)