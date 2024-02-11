class Calculator {
  constructor(previousLabel, currentLabel) {
    this.previousLabel = previousLabel;
    this.currentLabel = currentLabel;
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
    // Fix the assignment of currentLabel
    this.currentLabel = input;
    console.log(currentLabel);
  }

  operationChoice() {}

  evaluate() {}

  updateResult() {}
}

const numBtns = document.getElementsByClassName("numBtn");
const operatorBtns = document.getElementsByClassName("operatorBtn");
const equalBtn = document.getElementsByClassName("equalBtn");
const delBtn = document.getElementsByClassName("btnDel");
const delClear = document.getElementsByClassName("btnClear");
const previousLabel = document.getElementsByClassName("previous");
const currentLabel = document.getElementsByClassName("current");

const calculator = new Calculator(previousLabel, currentLabel);
