const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removePanelEL();
    panel.classList.add("active");
  });
});

function removePanelEL() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
