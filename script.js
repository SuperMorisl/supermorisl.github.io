const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");  // classe pour animation
      entry.target.classList.remove("hidden"); // si tu caches avant
      observer.unobserve(entry.target); // on arrête d'observer pour performance
    }
  });
}, {
  threshold: 0.3
});

const sections = document.querySelectorAll("section, .music-section, .projects-section, .about-box");

sections.forEach(section => observer.observe(section));
