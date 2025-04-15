document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".js-productContainer");
  const selectElement = document.querySelector(".js-product");

  function generateTiles(count) {
    gridContainer.innerHTML = ""; // Czyści kafelki
    for (let i = 1; i <= count; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.textContent = `ID: ${i}`;
      gridContainer.appendChild(tile);
    }
  }

  // Załaduj domyślną wartość
  generateTiles(selectElement.value);

  // Obsługa zmiany liczby kafelków
  selectElement.addEventListener("change", function () {
    generateTiles(this.value);
  });
});
