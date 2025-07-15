document.addEventListener("DOMContentLoaded", () => {
  fetch("../assets/nav-bar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbar-placeholder").innerHTML = html;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("../assets/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-placeholder").innerHTML = html;
    });
});
