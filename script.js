document.addEventListener("DOMContentLoaded", () => {
  loadPart("header.html", "header-placeholder");
  loadPart("footer.html", "footer-placeholder");
});

function loadPart(file, id) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error loading " + file, err));
}