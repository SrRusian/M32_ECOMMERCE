async function obtenerCursos() {
  try {
    const res = await fetch("https://molino32.com/api/get-courses.php");
    if (!res.ok) throw new Error("Error de red");
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    console.error("Error al obtener cursos:", e);
    return [];
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatPrice(n) {
  if (n == null || n === "") return "$0.00";
  return "$" + Number(n).toFixed(2);
}

function mapCategoryName(id) {
  const map = {
    1: "Cocina Italiana",
    2: "Repostería",
    3: "Cocina Mexicana",
    4: "Cocina Asiática",
    5: "Panadería",
    6: "Cocina Vegana",
  };
  return map[String(id)] || "General";
}

function renderCourses(list, containerId = "courses-cards") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = "<p>No hay cursos disponibles.</p>";
    return;
  }
  list.forEach((c) => {
    const img = c.img || c.image || "assets/images/placeholder.jpg";
    const discount = c.discount
      ? `<span class="featured-discount">${escapeHtml(
          c.discount
        )}% OFF</span>`
      : "";
    const rating = c.rating || "0";
    const time = c.time ? `${escapeHtml(c.time)} h` : "";
    const lessons = c.sections ?? c.lessons ?? "";
    const users = c.users ?? "";
    const price = formatPrice(c.price);
    const oldPrice = c.old_price
      ? `<span class="featured-old-price">${formatPrice(
          c.old_price
        )}</span>`
      : "";
    const categoryName =
      c.category_name || c.category || mapCategoryName(c.id_category);

    const card = document.createElement("div");
    card.className = "featured-card";
    card.innerHTML = `
      <div class="featured-card-img">
        ${discount}
        <button class="featured-fav" title="Favorito"><i class="bx bx-heart"></i></button>
        <img src="${escapeHtml(img)}" alt="${escapeHtml(
      c.alt || c.name
    )}" />
      </div>
      <div class="featured-card-body">
        <span class="featured-level">${escapeHtml(categoryName)}</span>
        <span class="featured-rating"><i class="bx bxs-star"></i> ${escapeHtml(
          rating
        )}</span>
        <h3>${escapeHtml(c.name || c.title || "")}</h3>
        <p class="featured-chef">Por ${escapeHtml(
          c.author || c.chef || "Instructor"
        )}</p>
        <p class="featured-desc">${escapeHtml(
          (c.description || "").slice(0, 140)
        )}</p>
        <div class="featured-info">
          <span title="Duración"><i class="bx bx-time"></i> ${escapeHtml(
            time
          )}</span>
          <span title="Lecciones"><i class="bx bx-book-open"></i> ${escapeHtml(
            lessons
          )}</span>
          <span title="Alumnos"><i class="bx bx-group"></i> ${escapeHtml(
            users
          )}</span>
        </div>
        <div class="featured-price-row">
          <span class="featured-price">${price}</span>
          ${oldPrice}
          <button class="btn-main featured-cart" onclick="addToCart(${
            c.id
          })">Agregar al Carrito</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  console.log("Agregar al carrito", id);
}