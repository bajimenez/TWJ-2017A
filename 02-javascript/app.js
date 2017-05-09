// log es un funcion que adminte strigs
console.log('hello world');
var  brayan={
    nombre: "brayan",
    apellido: "jimenez",
    fechaNacimiento: new Date (),
    imprimir:function () {
        console.log(this.nombre,this.nombre);
    },
    ano:function () {
        return  this.fechaNacimiento.getFullYear();
    },
    diferenciaEdad:function (edadAComprar) {
        return Math.abs(edadAComprar-this.fechaNacimiento.getFullYear())
    }
}

brayan.imprimir();
console.log(brayan.diferenciaEdad(2000));