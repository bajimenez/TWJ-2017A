/**
 * Created by brayan.jimenez on 16/05/2017.
 */
//String
let frasetion ="You are done";
let novias=2;
let otraFrasetion= `El numero de novias es ${novias+1}`;

//arrays

let notas:number[]=[1,5,51]//[]
let jaladas:Array<number>=[1,5,6]//[];

let usuario={nombre:"adrian",apellido:"eguez"};

//crear nuestro propios tipos de datos

interface usuarioLgin{nombre:String,apellido:String,direccion?:String} // el simbolo "?" se usa para atributos opcionales

let usuario2:usuarioLgin={nombre:"hola",apellido:"mundo",direccion:"lk"}

// nueva clase

class persona {nombre:string="Brayan";
private apellido:string;
fechaNacimiento:Date;
constructor(nombre?:string,apellido?:string,fechaNacimiento?:Date){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNacimiento=fechaNacimiento;

}
private imprimirNombre(nombre:String,apellido?:String):void{
 if(apellido){console.log(nombre,apellido);
 }else{
     console.log(nombre);
 }
}


}
function SumarNumeros(numero1:number, numero2:number):number{
    return numero1+numero2;
}
let adrian: persona =  new persona("Brayan","Jimenez");

console.log(adrian.nombre)
adrian.imprimirPersona();

