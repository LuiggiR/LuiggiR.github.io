const formularioMensaje = document.getElementById('formulario-mensaje');
const mensajeContainer = document.getElementById('mensaje-container');

formularioMensaje.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre-input');
  const mensajeInput = document.getElementById('mensaje-input');

  const nombre = nombreInput.value;
  const mensaje = mensajeInput.value;

  // Enviar el mensaje a Firebase
  firebase.database().ref('mensajes').push({
    nombre,
    mensaje,
    timestamp: new Date().getTime()
  });

  // Limpiar los campos de entrada
  nombreInput.value = '';
  mensajeInput.value = '';
});
