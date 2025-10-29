// === Black Wolves Marketers - How It Works Section ===
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");
  const cardSections = document.querySelectorAll(".hiw-cards");

  // Toggle active state between Hiring / Work
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.target;
      cardSections.forEach((sec) => {
        sec.classList.toggle("hidden", sec.id !== target);
      });
    });
  });

  // Scroll animation for cards
  const cards = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => observer.observe(card));
});
