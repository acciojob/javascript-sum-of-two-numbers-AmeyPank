// Prompt the user for the first number
const firstNumber = prompt("First number:");

// Check if the user canceled the prompt
if (firstNumber === null) {
  alert("Operation canceled.");
} else {
  // Convert the input to a number
  const num1 = parseFloat(firstNumber);

  // Check if the input is a valid number
  if (!isNaN(num1)) {
    // Prompt the user for the second number
    const secondNumber = prompt("Second number:");

    // Check if the user canceled the prompt
    if (secondNumber === null) {
      alert("Operation canceled.");
    } else {
      // Convert the input to a number
      const num2 = parseFloat(secondNumber);

      // Check if the input is a valid number
      if (!isNaN(num2)) {
        // Calculate and display the sum
        const sum = num1 + num2;
        alert(`The sum of ${num1} and ${num2} is ${sum}.`);
      } else {
        // Display an error message for the second input
        alert("Invalid input. Please enter a valid number.");
      }
    }
  } else {
    // Display an error message for the first input
    alert("Invalid input. Please enter a valid number.");
  }
}
