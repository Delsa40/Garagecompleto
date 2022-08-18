//-----------------------------------PARA CADA MODELO:
// DECLARO VARIABLES

var segunda_foto = document.getElementsByClassName("segunda");
var contador = 0;
var siguiente_foto = document.getElementById("siguienteFoto");

// FUNCIONES

function siguiente() {

    if(contador==0){

        segunda_foto.classList.add("clickeado");
        contador=1;
    }
    else{
        segunda_foto.classList.remove("clickeado");
        contador=0;
    }
}

// LLAMO FUNCIONES

siguiente_foto.addEventListener("click", siguiente);

//-----------------------------------PARA LOS JUEGOS:
//DECLARO VARIABLES

var boton = document.getElementsByClassName("botonOpcion");
var aux = 0;
var lista_de_resultados = document.getElementsByClassName("resultados");

//FUNCIONES

function mostrar() {

    if(aux==0){

        lista_de_resultados.classList.add("respuesta");
        aux = 1;
    }
    else{
        lista_de_resultados.classList.remove("respuesta");
        aux = 0;
    }
}

//LLAMO FUNCIONES

boton.addEventListener("click", mostrar);
