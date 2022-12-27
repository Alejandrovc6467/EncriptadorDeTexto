

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
        iconColor: '#b9ab9c',
        background: '#ab5d89',
        title: '¡Bien!',
        confirmButtonColor: '#b9ab9c',
        text: 'Texto copiado correctamente',
    });
}


function encriptar() {


    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("contenedorBotonesDerecho");
    let texto = document.getElementById("textAreaIzq").value;


    if (texto.length!=0) {

        if (/[^a-zñ ]/.test(texto)) {
            alert("Hacer que se mueva la advertencia o no se modificar esta ventana");
            Swal.fire({
                icon: 'error',
                iconColor: '#b9ab9c',
                background: '#E3E0DE',
                title: 'Oops...',
                confirmButtonColor: '#b9ab9c',
                text: 'Solo se permiten letras minusculas y sin acento',
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
        alert("modficar la venta de vacio o hacer otra cosa no se");
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'El campo de texto está vacio, escriba el texto que desea encriptar',
            width: '250px',
          });
    }

}


function desencriptar(){




alert("desencriptar voy por esto");


}


alert("Revisar que se desencripte bien el texto prueba del TRELLO y compararlo con m");







