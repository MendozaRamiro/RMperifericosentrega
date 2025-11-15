
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");
  const seccionProductos = document.getElementById("productosSection");
  const btnVer = document.getElementById("verProductos");

 
  btnVer.addEventListener("click", () => {
    seccionProductos.classList.toggle("oculto");
    if (!seccionProductos.classList.contains("oculto")) {
      btnVer.textContent = "Ocultar productos";
    } else {
      btnVer.textContent = "Ver productos";
    }
  });

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <span class="precio">$${prod.precio}</span>
      <div class="cantidad">
        <button>-</button>
        <input type="number" value="1" min="1">
        <button>+</button>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
