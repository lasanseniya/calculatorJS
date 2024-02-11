const resultDisplay = document.getElementById("result");

function userInput(input) {
  resultDisplay.value += input;
}

function clearResult() {
  resultDisplay.value = "";
}

function updateDisplay() {}
