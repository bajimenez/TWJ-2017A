// FAT ARRO FUNCTIONS

var holaMundo = function(){ console.log("holamundo")}

holaMundo()

var holaMundo2 = ()=>{return "hola mundo 2"}
holaMundo2()

var holaMundo3 = ()=>holaMundo2
holaMundo3()

var holaMundo4 =(nombre)=>`Hola: ${nombre}`
holaMundo4('fabian')

var holaMundo5= (nombre,apellido) =>`sr ${nombre} ${apellido}`
holaMundo5('brayan','jimenez')