// Global object to track item counts
let itemCounts = {};

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

  // Function to update the UI
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

    // Update added items with detailed formatting
    addedItems.innerHTML = Object.entries(itemCounts)
      .map(([id, count]) => {
        const itemElement = document.getElementById(`${id}-label`);
        const itemDescription = itemElement.querySelector("p").textContent;
        const itemPrice = parseFloat(
          itemElement.querySelector("span").textContent.replace("$", "")
        );
        const totalPrice = (itemPrice * count).toFixed(2);

        return `
          <p>
            ${itemDescription}<br>
            ${count}x @$${itemPrice.toFixed(2)} &nbsp;$${totalPrice}
          </p>
          <hr />
        `;
      })
      .join("");

    const cart = document.querySelector(".your-cart");

    if (Object.keys(itemCounts).length > 0) {
      // Make cart visible and dynamically adjust height
      cart.style.visibility = "visible";
      const cartItemsHeight = addedItems.scrollHeight;
      cart.style.height = `${Math.max(cartItemsHeight + 60, 250)}px`; // Ensure minimum 250px
      cart.style.transition = "height 0.3s ease"; // Smooth height transition
    } else {
      // Reset to default height and hide
      cart.style.height = "250px";
      cart.style.visibility = "hidden";
    }

    // Reattach event listeners to increment and decrement buttons
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
        // Revert back to "Add to Cart" button
        addToCart.style.display = "block";
        itemCount.style.display = "none";
        delete itemCounts[itemId]; // Remove item from the cart
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

//Roger Roger
