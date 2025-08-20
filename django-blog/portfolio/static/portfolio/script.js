document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const pantalla = document.getElementById("pantalla-inicial");
    pantalla.classList.add("ocultar");
  }, 2500); // Espera 2.5 segundos antes de ocultarla
});

const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;
let isScrolling = false;

document.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else if (e.deltaY < 0 && currentSectionIndex > 0) {
    currentSectionIndex--;
  } else {
    return;
  }

  isScrolling = true;
  sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    isScrolling = false;
  }, 800); // Ajusta al tiempo de animación
});

const dots = document.querySelectorAll(".dot");

function updateActiveDot() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveDot);
window.addEventListener("load", updateActiveDot);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario-contacto");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que se recargue la página
    alert("¡Gracias por tu mensaje!");
    form.reset(); // opcional: limpia los campos del formulario
  });
});

document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function (e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const btn = document.getElementById('toggle-theme');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if(document.body.classList.contains('light-mode')) {
    btn.textContent = 'Modo oscuro';
  } else {
    btn.textContent = 'Modo claro';
  }
});
