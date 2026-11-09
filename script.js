(() => {
  "use strict";
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-disabled", "true");
    el.title = "Link ainda não configurado";
  });
})();
