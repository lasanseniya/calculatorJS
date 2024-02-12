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

  delete() {
    this.currentLabel = this.currentLabel.toString().slice(0, -1);
  }

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

  evaluate() {
    let evaluation;
    const previous = parseFloat(this.previousLabel);
    const current = parseFloat(this.currentLabel);

    if (isNaN(previous) || isNaN(current)) {
      return;
    }

    switch (this.operator) {
      case "+":
        evaluation = previous + current;
        break;

      case "-":
        evaluation = previous - current;
        break;

      case "x":
        evaluation = previous * current;
        break;

      case "÷":
        evaluation = previous / current;
        break;

      default:
        return;
    }
    this.currentLabel = evaluation;
    this.operator = undefined;
    this.previousLabel = "";
  }

  updateResult() {
    this.currentLabelText.innerHTML = this.currentLabel;
    this.previousLabelText.innerHTML = this.previousLabel;

    if (this.operator != null) {
      this.previousLabelText.innerHTML = `${this.previousLabel} ${this.operator}`;
    } else {
      this.previousLabelText.innerHTML = "";
    }
  }
}

const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalBtn = document.getElementById("equalBtn");
const delBtn = document.getElementById("btnDel");
const delClear = document.getElementById("btnClear");
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

equalBtn.addEventListener("click", (button) => {
  calculator.evaluate();
  calculator.updateResult();
});

delClear.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateResult();
});

delBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateResult();
});
