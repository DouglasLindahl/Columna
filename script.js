const rail = document.querySelector(".side-rail");
const toggle = document.querySelector("[data-menu-toggle]");
const navLinks = [...document.querySelectorAll("[data-nav] a")];
const sections = [...document.querySelectorAll("main section[id]")];
const year = document.querySelector("[data-year]");

toggle?.addEventListener("click", () => {
  const open = rail.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    rail.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }),
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        ),
      );
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));
year.textContent = new Date().getFullYear();
