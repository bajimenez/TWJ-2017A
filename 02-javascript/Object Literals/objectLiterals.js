function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre + "twitteo sonre:"+tweet;
        },
    }
}

var nuevaFuncion=(nombre,apellido)=>{
    var usuario1= {
        nombre:nombre,
        apellido
    }

    alert(usuario1.nombre);

    var usuario2 ={
        nombre
    }
    alert(usuario2.nombre);
}

nuevaFuncion("h")
 