function clearScreen() {
  document.getElementById("result").value = "";
}

// Displays the entered value on screen.
function liveScreen(value) {
  // Check if the entered value is a number or an allowed operator
  if (!isNaN(value) || value === "+" || value === "-" || value === "*" || value === "/") {
      document.getElementById("result").value += value;
  }
}
function calculateResult() {
  try {
      const resultField = document.getElementById("result");
      resultField.value = eval(resultField.value);
  } catch (error) {
      resultField.value = "Error";
  }
}