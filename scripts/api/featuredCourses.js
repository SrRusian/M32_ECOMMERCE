document.addEventListener("DOMContentLoaded", async () => {
  const courses = await obtenerCursos();
  // Mezcla y toma 3 cursos aleatorios
  const random3 = courses.sort(() => Math.random() - 0.5).slice(0, 3);
  renderCourses(random3, "featured-cards");
});