function addItems() {
  let currentCount = 1; // Set the initial count
  const addToCart = document.getElementById("add-to-cart");
  const waffleCount = document.getElementById("waffle-count");
  let totalItems = document.getElementById("total-items");

  // Hide "Add to Cart" button and show quantity controls
  addToCart.style.display = "none";
  waffleCount.style.display = "flex";

  // Update the count and reattach listeners
  function updateUI() {
    waffleCount.innerHTML = `
        <img id="minus" src="images/icon-decrement-quantity.svg" alt="minus" />
        <p>${currentCount}</p>
        <img id="plus" src="images/icon-increment-quantity.svg" alt="plus" />
      `;
    totalItems.innerHTML = `<h2 id="total-items">Your Cart (${currentCount})</h2>`;

    // Reattach event listeners to the new buttons
    document.getElementById("minus").addEventListener("click", updateCountDown);
    document.getElementById("plus").addEventListener("click", updateCountUp);
  }

  // Decrease count
  function updateCountDown() {
    let totalItems = document.getElementById("total-items");

    if (currentCount > 1) {
      currentCount--;
      updateUI();
    } else {
      // Optionally, revert back to "Add to Cart" when count is 0
      addToCart.style.display = "block";
      waffleCount.style.display = "none";
    }
  }

  // Increase count
  function updateCountUp() {
    currentCount++;
    updateUI();
  }

  // Initialize UI
  updateUI();

  return currentCount;
}
