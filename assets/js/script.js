const btnEncriptar = document.getElementById('btn-encriptar');
const textEncriptar = document.getElementById('texto');
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.getElementById("mensaje-texto");
const contenido = document.querySelector(".container-result");
const btnDesencriptar = document.getElementById('btn-desencriptar');
const containerRespuesta = document.querySelector('#container-result-new');
const btncopiar = document.getElementById('btn-copy');

const showMessage = (message) => {
    Swal.fire({
        title: 'Aviso',
        text: message,
        icon: 'warning',
        confirmButtonText: 'Ok',
        Buttonwidth:100,
    });
};

const isValidText = (texto) => {
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    if (texto === "") {
        showMessage("El campo de texto NO debe estar vacio");
        return false;
    } else if (texto !== txt) {
        showMessage("NO debe tener acentos u caracteres especiales");
        return false;
    } else if (texto !== txt.toLowerCase()) {
        showMessage("Solo letras en minusculas");
        return false;
    }
    return true;
};

const encryptText = (texto) => {
    return texto
        .replace(/e/mg, "enter")
        .replace(/i/mg, "imes")
        .replace(/a/mg, "ai")
        .replace(/o/mg, "ober")
        .replace(/u/mg, "ufat");
};

const decryptText = (texto) => {
    return texto
        .replace(/enter/mg, "e")
        .replace(/imes/mg, "i")
        .replace(/ai/mg, "a")
        .replace(/ober/mg, "o")
        .replace(/ufat/mg, "u");
};

btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textEncriptar.value;
    if (isValidText(texto)) {
        containerRespuesta.style.display = 'flex';
        respuesta.innerHTML = encryptText(texto);
        contenido.remove();
    }
});

btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textEncriptar.value;
    if (isValidText(texto)) {
        containerRespuesta.style.display = 'flex';
        respuesta.innerHTML = decryptText(texto);
        contenido.remove();
    }
});

btncopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});
