let formulario = document.getElementById('formulario')

formulario.addEventListener("submit", validacionForm);

Swal.fire({
        imageUrl: "assets/cedcytvertical.png",
        imageWidth: 135,
      imageHeight: 93,
        title: "Instrucciones:",
        text: "Rellena los campos correctamente, asegúrate que tu correo este activo y sin errores. No te olvides de indicar en las casillas de verificación si tu carta quieres que sea anónima o quieres que la persona a recibir vea su remitente",
        confirmButtonText: "OK!"
      });

/*let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            console.log("Estás usando un dispositivo móvil!!");
            document.getElementById("cuerposection").style.width = 100 + "%"
        } else {
            console.log("No estás usando un móvil");
}*/

function validacionForm(e) {

  const nombre = document.getElementById('nombre').value
  const email = document.getElementById('email').value
  const receptor = document.getElementById('receptor').value

  let emailRegEx = /[^@ \t\r\n]+@gmail\.com/g

  if (nombre == '' && email == '' && receptor == '') {
    e.preventDefault()
    mensajeAlerta()
  }

  if (emailRegEx.test(email) == false) {
    e.preventDefault()
    mensajeEmail()
  }
}

function mensajeAlerta() {
  Swal.fire({
    icon: "error",
    title: "¡Espacios en Blanco!",
    text: "Por favor no dejes espacios en blanco, verifica",
    confirmButtonText: "OK!"
  })
}

function mensajeEmail() {
  Swal.fire({
    icon: "error",
    title: "¡Correo Inválido!",
    text: "Por favor, verifica tu correo, solo aceptamos Gmail",
    confirmButtonText: "OK!"
  })
}

/*function recaptcha_ok() {
    let response = grecaptcha.getResponse();

    if(response.length == 0){
        alert("Captcha no verificado");
        document.getElementById("buttonsend").disabled = true
        return false;
      event.preventDefault();
    } else {
      Swal.fire({
        icon: "info",
        title: "Captcha Completado!",
        text: "Presiona el boton Enviar! ❤️ para enviar tu carta",
        confirmButtonText: "OK!"
      });
      document.getElementById("buttonsend").disabled = false
    }
  }*/