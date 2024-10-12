// calculator (static and object)
class Calculator {
  static #x;
  static #y;
  static #operator;

  static setX(value) {
    Calculator.#x = value;
  }
  static setY(value) {
    Calculator.#y = value;
  }
  static operator(value) {
    Calculator.#operator = value;
  }
  static process() {
    switch (Calculator.#operator) {
      case "+": {
        return `${Calculator.#x} + ${Calculator.#y} = ${
          Calculator.#x + Calculator.#y
        }`;
      }
      case "-": {
        return `${Calculator.#x} - ${Calculator.#y} = ${
          Calculator.#x - Calculator.#y
        }`;
      }
      case "*": {
        return `${Calculator.#x} * ${Calculator.#y} = ${
          Calculator.#x * Calculator.#y
        }`;
      }
      case "/": {
        return `${Calculator.#x} / ${Calculator.#y} = ${
          Calculator.#x / Calculator.#y
        }`;
      }
      case "^": {
        return `${Calculator.#x} ^ ${Calculator.#y} = ${
          Calculator.#x ** Calculator.#y
        }`;
      }
      case "%": {
        return `${Calculator.#x} % ${Calculator.#y} = ${
          Calculator.#x % Calculator.#y
        }`;
      }
      default: {
        return 0;
      }
    }
  }

  #num1;
  #num2;
  #operate;

  constructor() {
    this.#num1 = Number(prompt("Enter the first number"));
    this.#num2 = Number(prompt("Enter the second number"));
    this.#operate = prompt("Enter the operator");
  }
  process() {
    switch (this.#operate) {
      case "+": {
        return `${this.#num1} + ${this.#num2} = ${this.#num1 + this.#num2}`;
      }
      case "-": {
        return `${this.#num1} - ${this.#num2} = ${this.#num1 - this.#num2}`;
      }
      case "*": {
        return `${this.#num1} * ${this.#num2} = ${this.#num1 * this.#num2}`;
      }
      case "/": {
        return `${this.#num1} / ${this.#num2} = ${this.#num1 / this.#num2}`;
      }
      case "^": {
        return `${this.#num1} ^ ${this.#num2} = ${this.#num1 ** this.#num2}`;
      }
      case "%": {
        return `${this.#num1} % ${this.#num2} = ${this.#num1 % this.#num2}`;
      }
      default: {
        return 0;
      }
    }
  }
}
Calculator.setX(Number(prompt("Enter the first number")));
Calculator.setY(Number(prompt("Enter the second number")));
Calculator.operator(prompt("Enter the operator"));
console.log(Calculator.process());

let operation = new Calculator();
console.log(operation.process());
