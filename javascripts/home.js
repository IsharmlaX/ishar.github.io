function updateHomeNavigation() {
  const isHome = Boolean(document.querySelector(".home"));
  document.body.classList.toggle("home-scrolled", isHome && window.scrollY > 44);
}

function initializeHomeNavigation() {
  window.removeEventListener("scroll", updateHomeNavigation);
  updateHomeNavigation();

  if (document.querySelector(".home")) {
    window.addEventListener("scroll", updateHomeNavigation, { passive: true });
  }
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initializeHomeNavigation);
} else {
  document.addEventListener("DOMContentLoaded", initializeHomeNavigation);
}
