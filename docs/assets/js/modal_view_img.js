function openModal(imageSrc) {
  let modal = document.getElementById("imageModal");
  let modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;

  // Mostrar modal con transición de opacidad
  modal.classList.remove("hidden", "opacity-0");
  modal.classList.add("opacity-100");

  // Asegurar que el modal se escale
  setTimeout(() => {
    modal.querySelector('.relative').classList.remove('scale-90');
    modal.querySelector('.relative').classList.add('scale-100');
  }, 10); // Esto permite que la transición de escala tenga tiempo de activarse
}

function closeModal() {
  let modal = document.getElementById("imageModal");

  // Escala el modal hacia abajo y reduce la opacidad
  modal.querySelector('.relative').classList.remove('scale-100');
  modal.querySelector('.relative').classList.add('scale-90');

  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");

  // Después de que la opacidad haya desaparecido, ocultamos el modal
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // Tiempo de espera igual al de la animación de opacidad
}

// Cerrar modal si se hace clic fuera de la imagen
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Cerrar con la tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});