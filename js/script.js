const btnMobile = document.getElementById("btn-mobile");
const docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Volte logo!";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

AOS.init({
  duration: 1000,
  once: true,
});
