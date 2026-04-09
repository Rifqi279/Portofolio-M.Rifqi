document.addEventListener("DOMContentLoaded", function () {

  // Fade in saat scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Smooth scroll (kalau nanti ada navbar)
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth"
        });
    });
  });

});