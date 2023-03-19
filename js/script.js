const docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Volte logo!";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
