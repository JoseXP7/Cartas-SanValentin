let cuerpocaja = document.getElementById("cuerposection")
let confeti = document.querySelector("#my-canvas")

let nombre = document.getElementById("nombre-user").value
let correo = document.getElementById("email").value
let para = document.getElementById("receptor").value
let cartita = document.getElementById("carta").value
let enviar = document.getElementById("buttonsend")

Swal.fire({
        imageUrl: "mileslogo.png",
        imageWidth: 135,
      imageHeight: 102,
        title: "Instrucciones:",
        text: "Rellena los campos correctamente, asegurate que tu correo este activo y sin errores. No te olvides de indicar en las casillas de verificacion si tu carta quieres que sea anonima o quieres que la persona a recibir vea su remitente",
        confirmButtonText: "OK!"
      });

let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            console.log("Estás usando un dispositivo móvil!!");
            document.getElementById("cuerposection").style.width = 100 + "%"
        } else {
            console.log("No estás usando un móvil");
}

function validacionForm() {
  if (document.getElementById("carta").value.length == 0) {
  console.log("gei")
} else {
  confeti.classList.add("active")
  } 
}

function recaptcha_ok() {
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
  }