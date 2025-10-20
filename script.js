(function () {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");

  if (!navbar || !toggle || !nav) return;

  const closeMenu = () => {
    navbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const openMenu = () => {
    navbar.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    navbar.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) closeMenu();
  });
})();
