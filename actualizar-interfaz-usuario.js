// Escuchar nuevos mensajes de Firebase
firebase.database().ref('mensajes').on('child_added', (snapshot) => {
  const mensajeData = snapshot.val();
  const nombre = mensajeData.nombre;
  const mensaje = mensajeData.mensaje;
  const timestamp = mensajeData.timestamp;

  // Crear un nuevo elemento de mensaje
  const mensajeElement = document.createElement('div');
  mensajeElement.classList.add('mensaje');
  mensajeElement.innerHTML = `
    <strong>${nombre}</strong>: ${mensaje}
    <span class="timestamp">${new Date(timestamp).toLocaleString()}</span>
  `;

  // Agregar el elemento de mensaje al contenedor de chat
  mensajeContainer.appendChild(mensajeElement);
});
