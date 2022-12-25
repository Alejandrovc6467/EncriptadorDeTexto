

function encriptar(){

    alert("sirve");
}

/**rotar " Solo letras minúsculas y sin acentos" cuando no cumpla */


function encriptar2() {
    let sinMensaje = document.getElementById("sinMensaje");

    sinMensaje.style.display= "none";


    let salidaDetexto = document.getElementById("salidaDetexto");
    salidaDetexto.style.display= "flex";

    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    contenedorBotonesDerecho.style.display= "flex";

}



function encriptar3() {
    let texto = document.getElementById("input-texto").value;
    let txt_cifrado = texto.replace(/e/gm, "enter");
    txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
    txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
    txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
    txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");

    if (/[^a-zñ ]/.test(texto)) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'Solo se permiten letras minusculas y sin acento',
          });
    }
    else if (texto.length === 0) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'El campo de texto está vacio, escriba el texto que desea encriptar',
          });
    }
    else {
        document.getElementById("texto1-contder").style.display = "none";
        document.getElementById("texto2-contder").style.display = "none";
        document.getElementById("output-texto").style.display = "inline-block";
        document.getElementById("output-texto").innerHTML = txt_cifrado;
        
        value();
    }

    
}




