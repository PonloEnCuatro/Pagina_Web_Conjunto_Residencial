// Función para manejar el progreso entre pasos
window.addEventListener("DOMContentLoaded", () => {
  const pasos = document.querySelectorAll(".Barra_Progreso div");
  const urlPath = window.location.pathname;

  // Dependiendo de la URL, activamos el paso correspondiente
  if (urlPath.includes("Registro_Propietario")) {
    activarPaso(0); // Paso 1 (Registro de Propietarios)
  } else if (urlPath.includes("Registro_Mascota")) {
    activarPaso(1); // Paso 2 (Registro de Mascotas)
  }

  function activarPaso(indice) {
    pasos.forEach((paso, i) => {
      if (i <= indice) {
        paso.classList.add("step-active");
      } else {
        paso.classList.remove("step-active");
      }
    });
  }
});
