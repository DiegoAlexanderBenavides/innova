lucide.createIcons();

// Crear el círculo dinámicamente si no existe
let cursor = document.getElementById("cursor");
if (!cursor) {
  cursor = document.createElement("div");
  cursor.id = "cursor";
  document.body.appendChild(cursor);
}

// Variables para suavizar el movimiento
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
const speed = 0.15; // Cuanto menor el valor, más lento sigue el cursor

// Captura la posición del mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animación para suavizar el movimiento del cursor
function animateCursor() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
  requestAnimationFrame(animateCursor);
}

document.addEventListener("DOMContentLoaded", function () {
  // Inicia la animación
  animateCursor();

  // Obtén la URL actual
  const currentPath = window.location.pathname;

  // Define los enlaces y las rutas asociadas
  const navLinks = [
    { id: 'nav-services', path: '/services' },
    { id: 'nav-projects', path: '/projects' },
    { id: 'nav-about-us', path: '/about_us' }
  ];

  // Recorre los enlaces y verifica si la ruta actual contiene la subcadena
  navLinks.forEach(link => {
    const element = document.getElementById(link.id);
    if (currentPath.includes(link.path)) {
      element.classList.add('active-row-menu');
    } else {
      element.classList.remove('active-row-menu');
    }
  });
});

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('svg');

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});
// function openResourcesURL(url) {
//   window.open(url, '_blank');
// }

const header = document.getElementById("main-header");

function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add("bg-[#121318]", "shadow-lg");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("bg-[#121318]", "shadow-lg");
    header.classList.add("bg-transparent");
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Ejecuta al cargar

function toggleSubmenu() {
  const submenu = document.getElementById("submenu");
  const arrow = document.getElementById("submenu-arrow");

  submenu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}