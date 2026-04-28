function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menu.classList.contains('translate-y-full')) {
    // Abrir el menú (mover de abajo hacia arriba)
    menu.classList.remove('translate-y-full');
    menu.classList.remove('opacity-0');
  } else {
    // Cerrar el menú (mover de arriba hacia abajo)
    menu.classList.add('translate-y-full');
    menu.classList.add('opacity-0');
  }

  // Alternar los íconos de hamburguesa y cerrar (X)
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

// Función para observar elementos con animaciones
function observeAnimations() {
  const elements = document.querySelectorAll('[data-animation]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aplicar la animación definida en el atributo data-animation
        const animation = entry.target.getAttribute('data-animation');
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add(animation);
      } else {
        // Resetear la animación cuando el elemento no es visible
        const animation = entry.target.getAttribute('data-animation');
        entry.target.classList.add('opacity-0');
        entry.target.classList.remove(animation);
      }
    });
  }, {
    threshold: 0.1
  }); // Umbral de visibilidad (10%)

  // Observar todos los elementos con el atributo data-animation
  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', observeAnimations);