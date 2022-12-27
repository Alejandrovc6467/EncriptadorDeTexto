

function getFocus() {
    let textArea = document.getElementById("textAreaIzq");
    textArea.focus();
}

getFocus();//lo llamo aqui para que inicie con el focus al cargar


function copy() {
    let texto = document.getElementById("textAreaDer");
    texto.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        iconColor: '#f2f2f2',
        background: '#5A7099',
        title: '¡Texto copiado!',
        color:'#f2f2f2',
        confirmButtonColor: '#5A7099',
    });
}

function campoVacio(){

    Swal.fire({
        icon: 'error',
        iconColor: '#f2f2f2',
        background: '#5A7099',
        title: '¡Vaya!',
        color:'#f2f2f2',
        confirmButtonColor: '#5A7099',
        text: 'Ingresa un mensaje',
      });

}



function encriptar() {

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;


    if (texto.length!=0) {

        if (/[^a-zñ ]/.test(texto)) {
            

            Swal.fire({
                iconColor: '#f2f2f2',
                icon: 'error',
                background: '#5A7099',
                title: '¡Vaya!',
                color:'#f2f2f2',
                confirmButtonColor: '#5A7099',
                text: 'Escribe solo letras minusculas y sin acento',
              });

        }else{

            sinMensaje.style.display= "none";
            salidaDetexto.style.display= "flex";
            contenedorBotonesDerecho.style.display= "flex";

            let cifradoText = texto.replace(/e/gm, "enter");
            cifradoText = cifradoText.replace(/i/gm, "imes");
            cifradoText = cifradoText.replace(/a/gm, "ai");
            cifradoText = cifradoText.replace(/o/gm, "ober");
            cifradoText = cifradoText.replace(/u/gm, "ufat");

            document.getElementById("textAreaDer").innerHTML = cifradoText;

        }
 

    }else{
       
        campoVacio();
    }

}


function desencriptar(){

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;


    if (texto.length!=0) {

        sinMensaje.style.display= "none";
        salidaDetexto.style.display= "flex";
        contenedorBotonesDerecho.style.display= "flex";

        let cifradoText = texto.replace(/enter/gm, "e");
        cifradoText = cifradoText.replace(/imes/gm, "i");
        cifradoText = cifradoText.replace(/ai/gm, "a");
        cifradoText = cifradoText.replace(/ober/gm, "o");
        cifradoText = cifradoText.replace(/ufat/gm, "u");

        document.getElementById("textAreaDer").innerHTML = cifradoText;

    }else{

        campoVacio();
    }

}