// menu-y-tema.js
(function() {
  const root = document.documentElement;
  const modoGuardado = localStorage.getItem("modo") || "dark";

  // Aplicar modo guardado al cargar la página
  if (modoGuardado === "light") {
    root.classList.add("light-mode");
  } else {
    root.classList.remove("light-mode");
  }

  // Botón de cambiar tema
  const btnTema = document.getElementById("btn-tema");
  if (btnTema) {
    btnTema.addEventListener("click", () => {
      if (root.classList.contains("light-mode")) {
        root.classList.remove("light-mode");
        localStorage.setItem("modo", "dark");
      } else {
        root.classList.add("light-mode");
        localStorage.setItem("modo", "light");
      }
    });
  }
})();
