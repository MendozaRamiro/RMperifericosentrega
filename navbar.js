document.addEventListener("DOMContentLoaded", () => {
  const paginas = [
    { titulo: "Inicio", url: "index.html" },
    { titulo: "Productos", url: "productos.html" },
    { titulo: "Cerrar Sesión", url: "pages/login.html", id: "logout" }
  ];

  let navbarHTML = `
    <nav class="navbar">
      <h2 class="logo">RM<span>Periféricos</span></h2>
      <ul class="nav-links">
        ${paginas.map(p => `<li><a href="${p.url}" id="${p.id || ""}">${p.titulo}</a></li>`).join("")}
      </ul>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;

  
  document.getElementById("logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "pages/login.html";
  });
});
