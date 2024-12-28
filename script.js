function addItems() {
  let currentCount = 1; // Set the initial count
  const addToCart = document.getElementById("add-to-cart");
  const waffleCount = document.getElementById("waffle-count");
  let totalItems = document.getElementById("total-items");
  let waffleLabel = document.getElementById("waffle-label");
  let addedItems = document.getElementById("added-items");

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

    if (currentCount > 0) {
      addedItems.innerHTML = `<p>${waffleLabel.innerHTML} x ${currentCount}</p>`;
    } else {
      addedItems.innerHTML = "";
    }

    // Reattach event listeners to the new buttons
    document.getElementById("minus").addEventListener("click", updateCountDown);
    document.getElementById("plus").addEventListener("click", updateCountUp);
  }

  // Decrease count
  function updateCountDown() {
    if (currentCount > 0) {
      // Allow the count to reach 0
      currentCount--;
      if (currentCount === 0) {
        // Revert back to "Add to Cart" when count reaches 0
        addToCart.style.display = "block";
        waffleCount.style.display = "none";
      }
      updateUI();
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

function addVanilla() {
  let currentCount = 1; // Set the initial count
  const addToCart = document.getElementById("add-to-cart");
  const waffleCount = document.getElementById("vanilla-count");
  let totalItems = document.getElementById("total-items");
  let waffleLabel = document.getElementById("vanilla-label");
  let addedItems = document.getElementById("added-items");

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

    if (currentCount > 0) {
      addedItems.innerHTML = `<p>${waffleLabel.innerHTML} x ${currentCount}</p>`;
    } else {
      addedItems.innerHTML = "";
    }

    // Reattach event listeners to the new buttons
    document.getElementById("minus").addEventListener("click", updateCountDown);
    document.getElementById("plus").addEventListener("click", updateCountUp);
  }

  // Decrease count
  function updateCountDown() {
    if (currentCount > 0) {
      // Allow the count to reach 0
      currentCount--;
      if (currentCount === 0) {
        // Revert back to "Add to Cart" when count reaches 0
        addToCart.style.display = "block";
        waffleCount.style.display = "none";
      }
      updateUI();
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
