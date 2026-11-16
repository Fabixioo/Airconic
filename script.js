
// FORMULARIO DE AIRCONIC

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto =
    "Hola, soy " + nombre +
    "\nCorreo: " + correo +
    "\nMensaje: " + mensaje;

  const numero = "573018950253";

  const enlace =
    "https://wa.me/" + numero +
    "?text=" + encodeURIComponent(texto);

  window.open(enlace, "_blank", "noopener,noreferrer");
});
