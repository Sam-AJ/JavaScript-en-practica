let formulario = document.getElementById("formulario");

let txtNombre = document.getElementById("nombre");
let errorNombre = document.getElementsByClassName("errorNombre");

let txtAsunto = document.getElementById("asunto");
let errorAsunto = document.getElementsByClassName("errorAsunto");

let txtMensaje = document.getElementById("mensaje");
let errorMensaje = document.getElementsByClassName("errorMensaje");

formulario.addEventListener("submit", function(){
    
    
    let regExLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    var nombre = txtNombre.value;
    var asunto = txtAsunto.value;
    var mensaje = txtMensaje.value;

    if (nombre == ""){
        errorNombre.innerHTML = "El nombre es requerido";
    }else if(regExLetras.test(nombre) == false){
        errorNombre.innerHTML = "Ingrese solo letras";
    }
})