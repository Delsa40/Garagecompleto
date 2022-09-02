/* -----------------------------------Buscador interno--------------------------- */

buscador = document.getElementById("buscador");
listaBuscador = document.getElementById("listaBuscador");

function buscador_interno(){

    filter = buscador.value.toUpperCase();
    a = listaBuscador.getElementsByTagName("a");

    for (i = 0; i < a.length(); i++){
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            a[i].style.display = "";
            listaBuscador.style.display = "block";

            if(buscador.value === ""){
                listaBuscador.style.display = "none";
            }
        }else{
            a[i].style.display = "none";
        }
    }
}

buscador.addEventListener("keyup", buscador_interno);

//-----------------------------------PARA CADA MODELO:
// DECLARO VARIABLES

/* const segunda_foto = document.getElementsByClassName("segunda");
let contador = 0;
const siguiente_foto = document.getElementById("siguienteFoto");

// FUNCIONES

function siguiente() {

    if(contador == 0){

        segunda_foto.classList.add("clickeado");
        contador = 1;
    }
    else{
        segunda_foto.classList.remove("clickeado");
        contador = 0;
    }
}

// LLAMO FUNCIONES

siguiente_foto.addEventListener("click", siguiente); */

//-----------------------------------PARA LOS JUEGOS:
//DECLARO VARIABLES

/* var boton = document.getElementsByClassName("botonOpcion");
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

boton.addEventListener("click", mostrar()); */