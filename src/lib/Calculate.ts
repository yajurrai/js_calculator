// Calculate Class :D
export class Calculate {
  previousNumber: HTMLElement;
  currentNumber: HTMLElement;
  operation: any;

  constructor(previousNumber: HTMLElement, currentNumber: HTMLElement) {
    this.previousNumber = previousNumber;
    this.currentNumber = currentNumber;
  }

  clearAllNumbers() {
    this.previousNumber.innerHTML = '';
    this.currentNumber.innerHTML = '';
  }

  chooseOperation(operation: any) {
    this.operation = operation;
  }

  addNumbers() {
    return parseInt(this.previousNumber.innerHTML) + parseInt(this.currentNumber.innerHTML);
  }

  substractNumbers() {
    return parseInt(this.previousNumber.innerHTML) - parseInt(this.currentNumber.innerHTML);
  }

  multiplyNumbers() {
    return parseInt(this.previousNumber.innerHTML) * parseInt(this.currentNumber.innerHTML);
  }

  divideNumbers() {
    return parseInt(this.previousNumber.innerHTML) / parseInt(this.currentNumber.innerHTML);
  }
}
