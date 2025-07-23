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

// FUNCIONALIDAD PARA COMPRAR PRODUCTOS Y ENVIAR A WHATSAPP
document.addEventListener("DOMContentLoaded", function () {
  const botonesComprar = document.querySelectorAll(".btn-comprar");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", function () {
      const nombre = boton.dataset.nombre;
      const precio = boton.dataset.precio;
      const descripcion = boton.dataset.descripcion;
      const imagen = boton.dataset.imagen;

      const numeroCliente = "522841095281"; // Reemplaza con tu número real

      const mensaje = `🛒 *Nuevo Pedido*%0A%0A📦 Producto: ${nombre}%0A💵 Precio: ${precio}%0A📝 Descripción: ${descripcion}%0A🖼️ Imagen: https://tuweb.com/ruta/${imagen}`;

      const url = `https://wa.me/${numeroCliente}?text=${mensaje}`;
      window.open(url, "_blank");
    });
  });
});
