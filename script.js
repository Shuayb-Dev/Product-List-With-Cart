// Store item counts in a map
const itemCounts = {};

// Generic function to handle adding items
function addItem(itemId, itemLabel) {
  if (!itemCounts[itemId]) {
    itemCounts[itemId] = 1; // Initialize count if not present
  }

  const addToCart = document.getElementById(`add-to-cart-${itemId}`);
  const itemCount = document.getElementById(`${itemId}-count`);
  const totalItems = document.getElementById("total-items");
  const addedItems = document.getElementById("added-items");

  // Hide "Add to Cart" button and show quantity controls
  addToCart.style.display = "none";
  itemCount.style.display = "flex";

  // Update the UI
  function updateUI() {
    // Update quantity controls
    itemCount.innerHTML = `
        <img id="minus-${itemId}" src="images/icon-decrement-quantity.svg" alt="minus" />
        <p>${itemCounts[itemId]}</p>
        <img id="plus-${itemId}" src="images/icon-increment-quantity.svg" alt="plus" />
      `;

    // Update cart summary
    totalItems.innerHTML = `<h2>Your Cart (${Object.values(itemCounts).reduce(
      (a, b) => a + b,
      0
    )})</h2>`;
    addedItems.innerHTML = Object.entries(itemCounts)
      .map(([id, count]) => {
        // Get item description (only the <p> text, not the <h4> title)
        const itemElement = document.getElementById(`${id}-label`);
        const itemDescription = itemElement.querySelector("p").textContent; // Get the <p> text
        return `<p>${count} x ${itemDescription}</p>`; // Show the description with quantity
      })
      .join("");

    // Reattach event listeners to the new buttons
    document
      .getElementById(`minus-${itemId}`)
      .addEventListener("click", () => updateCountDown(itemId));
    document
      .getElementById(`plus-${itemId}`)
      .addEventListener("click", () => updateCountUp(itemId));
  }

  // Decrease count
  function updateCountDown(itemId) {
    if (itemCounts[itemId] > 0) {
      itemCounts[itemId]--;
      if (itemCounts[itemId] === 0) {
        // Revert back to "Add to Cart" when count reaches 0
        addToCart.style.display = "block";
        itemCount.style.display = "none";
        delete itemCounts[itemId]; // Remove item from cart when count is 0
      }
      updateUI();
    }
  }

  // Increase count
  function updateCountUp(itemId) {
    itemCounts[itemId]++;
    updateUI();
  }

  // Initialize UI
  updateUI();
}
