// Mobile navigation toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Smooth scroll for anchor links
(function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      var el = document.getElementById(targetId);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
    });
  });
})();


