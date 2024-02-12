class Calculator {
  constructor(previousLabelText, currentLabelText) {
    this.previousLabelText = previousLabelText;
    this.currentLabelText = currentLabelText;
    this.clear();
  }

  // clears all user inputs from calculator display
  clear() {
    this.currentLabel = "";
    this.previousLabel = "";
    this.operator = undefined;
  }

  delete() {}

  appendNumInput(input) {
    // If more than one period is entered stop adding more than periods
    if (input === "." && this.currentLabel.includes(".")) {
      return;
    }

    this.currentLabel = this.currentLabel.toString() + input.toString();
  }

  operationChoice(operator) {
    if (this.currentLabel === "") {
      return;
    }

    if (this.currentLabel !== "") {
      this.evaluate();
    }

    this.operator = operator;
    this.previousLabel = this.currentLabel;
    this.currentLabel = "";
  }

  evaluate() {}

  updateResult() {
    this.currentLabelText.innerHTML = this.currentLabel;
    this.previousLabelText.innerHTML = this.previousLabel;
  }
}

const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
// const equalBtn = document.getElementsByClassName("equalBtn");
// const delBtn = document.getElementsByClassName("btnDel");
// const delClear = document.getElementsByClassName("btnClear");
const previousLabelText = document.getElementById("previous-num");
const currentLabelText = document.getElementById("current-num");

const calculator = new Calculator(previousLabelText, currentLabelText);

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumInput(button.innerHTML);
    calculator.updateResult();
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operationChoice(button.innerHTML);
    calculator.updateResult();
  });
});
