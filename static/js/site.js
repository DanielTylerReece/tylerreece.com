/* Tyler Reece — headerbar scroll shadow. */
(function () {
  "use strict";

  function init() {
    var hb = document.getElementById("hb");
    if (hb) window.addEventListener("scroll", function () {
      hb.classList.toggle("scrolled", window.scrollY > 6);
    }, { passive: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
