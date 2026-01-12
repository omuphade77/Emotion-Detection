function zoomIcon(element) {
  const cards = document.querySelectorAll(".social-card");

  cards.forEach(card => card.classList.remove("active"));

  element.classList.add("active");
}
