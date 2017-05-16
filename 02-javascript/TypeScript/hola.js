/**
 * Created by brayan.jimenez on 16/05/2017.
 */
//String
var frasetion = "You are done";
var novias = 2;
var otraFrasetion = "El numero de novias es " + (novias + 1);
//arrays
var notas = [1, 5, 51]; //[]
var jaladas = [1, 5, 6]; //[];
var usuario = { nombre: "adrian", apellido: "eguez" };
var usuario2 = { nombre: "hola", apellido: "mundo", direccion: "lk" };
// nueva clase
var persona = (function () {
    function persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Brayan";
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
    persona.prototype.imprimirPersona = function () {
        console.log(this.nombre);
    };
    return persona;
}());
var adrian = new persona("Brayan", "Jimenez");
console.log(adrian.nombre);
adrian.imprimirPersona();
