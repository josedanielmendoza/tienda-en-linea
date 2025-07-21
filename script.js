// Funcion para dar click al Boton de hamburguesa
 
 function toggleMenu() {
        document.getElementById("menu").classList.toggle("show");
      }

      
// Función para enviar los datos a WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-whatsapp");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const comentario = document.getElementById("comentario").value.trim();

      const numeroCliente = "522841095281"; //  CAMBIA este número al WhatsApp del cliente

      const mensaje = `Hola, tienes un nuevo comentario desde tu página web:%0A👤 Nombre: ${nombre}%0A📧 Correo: ${correo}%0A💬 Comentario: ${comentario}`;

      const url = `https://wa.me/${numeroCliente}?text=${mensaje}`;
      window.open(url, "_blank");
    });
  }
});
