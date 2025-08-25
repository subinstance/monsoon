// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show"); // optional reset
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Hero blur
window.addEventListener("scroll", () => {
  const word = document.querySelector(".hero-word");
  if (!word) return;

  let scroll = window.scrollY;
  word.style.filter = `blur(${scroll / 50}px)`;
  word.style.opacity = Math.max(1 - scroll / 400, 0);
});
