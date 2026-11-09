// 1. Get references to HTML elements
const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const saveBtn = document.getElementById("saveBtn");
const historyList = document.getElementById("historyList");

// 2. Application state
let count = 0;
let saveCounter = 1;

// 3. Functions to update state & UI
function updateDisplay() {
  countElement.textContent = count;
  
  // Dynamic styling: change color based on value
  if (count > 0) countElement.style.color = "#4f46e5"; // Indigo for positive
  else if (count < 0) countElement.style.color = "#e11d48"; // Rose for negative
  else countElement.style.color = "#333333"; // Dark gray for zero

  // Trigger a quick pop animation
  countElement.style.transform = "scale(1.2)";
  setTimeout(() => {
    countElement.style.transform = "scale(1)";
  }, 150);
}

function increment() {
  count++;
  console.log("Incremented: Current value is", count);
  updateDisplay();
}

function decrement() {
  count--;
  console.log("Decremented: Current value is", count);
  updateDisplay();
}

function reset() {
  count = 0;
  console.log("Counter Reset to 0");
  updateDisplay();
}

function saveHistory() {
  // Create a new list item
  const listItem = document.createElement("li");
  
  // Get current time
  const timeString = new Date().toLocaleTimeString();
  
  // Set the text content
  listItem.innerHTML = `<strong>Save #${saveCounter}:</strong> ${count} <span>(${timeString})</span>`;
  
  // Add it to the top of the list
  historyList.insertBefore(listItem, historyList.firstChild);
  
  console.log(`Saved history entry #${saveCounter} with value ${count}`);
  saveCounter++;
}

// 4. Attach event listeners
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
saveBtn.addEventListener("click", saveHistory);

// Initial display setup
updateDisplay();