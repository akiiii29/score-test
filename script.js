// Handle clear button visibility and functionality
const idInput = document.getElementById("idInput");
const codeInput = document.getElementById("codeInput");
const clearIdBtn = document.getElementById("clearIdBtn");
const clearCodeBtn = document.getElementById("clearCodeBtn");

function toggleClearButton(input, button) {
  if (input.value.length > 0) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
}

idInput.addEventListener("input", () => {
  toggleClearButton(idInput, clearIdBtn);
});

codeInput.addEventListener("input", () => {
  toggleClearButton(codeInput, clearCodeBtn);
});

clearIdBtn.addEventListener("click", () => {
  idInput.value = "";
  clearIdBtn.classList.remove("visible");
  idInput.focus();
});

clearCodeBtn.addEventListener("click", () => {
  codeInput.value = "";
  clearCodeBtn.classList.remove("visible");
  codeInput.focus();
});

// Modal control buttons
const backBtn = document.querySelector(".back-btn");
const maximizeBtn = document.querySelector(".maximize-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.getElementById("modalOverlay");

backBtn.addEventListener("click", () => {
  // Handle back action
  console.log("Back clicked");
  // You can add navigation logic here
});

maximizeBtn.addEventListener("click", () => {
  // Handle maximize action
  console.log("Maximize clicked");
  // You can add maximize logic here
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close modal when clicking outside
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

// Handle form submission
const viewBtn = document.getElementById("viewBtn");
const cancelBtn = document.getElementById("cancelBtn");
const resultContainer = document.querySelector(".result-container");

viewBtn.addEventListener("click", () => {
  const idValue = idInput.value.trim();
  const codeValue = codeInput.value.trim();

  if (!idValue || !codeValue) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  // Hide previous results
  resultContainer.style.display = "none";
  const resultPlaceholder = document.getElementById("resultPlaceholder");

  // Show placeholder (always visible) - will be updated with error message if needed
  if (resultPlaceholder) {
    resultPlaceholder.style.display = "flex";
    // Clear any previous error message
    resultPlaceholder.innerHTML = "";
  }

  // Show loading spinner (on top of placeholder)
  const loadingContainer = document.getElementById("loadingContainer");
  loadingContainer.style.display = "flex";

  // After 1 second, show result or keep placeholder
  setTimeout(
    () => {
      // Hide loading
      loadingContainer.style.display = "none";

      // Check if id and code are both "1"
      if (
        idValue === "034303008379" ||
        (idValue === "1" && codeValue === "1")
      ) {
        // Hide placeholder and show result container
        if (resultPlaceholder) {
          resultPlaceholder.style.display = "none";
        }

        resultContainer.style.display = "block";
      } else {
        // Show error message in placeholder
        if (resultPlaceholder) {
          resultPlaceholder.style.display = "flex";
          // Clear any existing content and add error message
          resultPlaceholder.innerHTML =
            '<div class="error-message">Thí sinh này hiện chưa có điểm, vui lòng quay lại sau.</div>';
        }
      }
    },

    1000
  );
});

cancelBtn.addEventListener("click", () => {
  idInput.value = "";
  codeInput.value = "";
  clearIdBtn.classList.remove("visible");
  clearCodeBtn.classList.remove("visible");

  // Reset view: hide result and loading, show placeholder
  resultContainer.style.display = "none";

  const loadingContainer = document.getElementById("loadingContainer");
  const resultPlaceholder = document.getElementById("resultPlaceholder");

  if (loadingContainer) {
    loadingContainer.style.display = "none";
  }

  if (resultPlaceholder) {
    resultPlaceholder.style.display = "flex";
    resultPlaceholder.innerHTML = "";
  }

  // Handle cancel selection action
  console.log("Cancel selection");
});

// Prevent Enter key from submitting (if needed)
idInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    codeInput.focus();
  }
});

codeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    viewBtn.click();
  }
});
