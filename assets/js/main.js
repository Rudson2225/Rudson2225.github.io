/* ============================================
   『𝕽𝕯』ᴰᵉᵛ — Rudson · Portfólio V2
   Interações: menu mobile, scroll suave,
   animações de entrada e seção ativa.
   ============================================ */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu.classList.contains("open")) return;
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu");
  }

  function toggleMenu() {
    var isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);

    navMenu.addEventListener("click", function (event) {
      var link = event.target.closest("[data-nav-link]");
      if (link) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  /* ---------- Navbar com borda ao rolar ---------- */
  var navbar = document.getElementById("navbar");

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Navegação suave ---------- */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var id = anchor.getAttribute("href");
      if (id.length <= 1) return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();

      if (prefersReducedMotion) {
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });

      history.replaceState(null, "", id);
    });
  });

  /* ---------- Indicador de seção ativa ---------- */
  var sectionIds = ["hero", "sobre", "tecnologias", "projetos", "processo", "engenharia", "contato"];
  var sections = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = document.querySelectorAll("[data-nav-link]");

  if ("IntersectionObserver" in window && sections.length > 0) {
    var visibleSections = new Set();

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        var activeId = null;
        for (var i = 0; i < sectionIds.length; i++) {
          if (visibleSections.has(sectionIds[i])) {
            activeId = sectionIds[i];
            break;
          }
        }

        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + activeId
          );
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Animações de entrada ---------- */
  var animatedElements = document.querySelectorAll("[data-animate]");

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    animatedElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    animatedElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
