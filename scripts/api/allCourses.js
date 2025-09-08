document.addEventListener("DOMContentLoaded", async () => {
  const courses = await obtenerCursos();
  window._courses = courses; // Guardar para filtrar después
  renderCourses(courses);

  // Lógica de filtros
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Quitar clase active de todos
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const id = btn.getAttribute("data-id");
      if (id === "all") {
        renderCourses(window._courses);
      } else {
        renderCourses(window._courses.filter(c => String(c.id_category) === String(id)));
      }
    });
  });
});