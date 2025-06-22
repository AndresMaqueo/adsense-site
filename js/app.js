// Función para inicializar tu sitio
(function() {
  'use strict';

  // Mensaje de bienvenida
  console.log("🚀 Sitio listo y funcional - by Maqueo");

  // Ejemplo: Mostrar la fecha actual en un elemento con id="fecha"
  function mostrarFecha() {
    const fechaEl = document.getElementById('fecha');
    if (fechaEl) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      fechaEl.textContent = new Date().toLocaleDateString('es-ES', opciones);
    }
  }

  // Ejecutar funciones al cargar DOM
  document.addEventListener('DOMContentLoaded', function() {
    mostrarFecha();
  });

})();
