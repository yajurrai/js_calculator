import { Button } from "./lib/Button.js";
import { Calculate } from "./lib/Calculate.js";


// Some Vars
let numbersWrapper: any;
let result: any;
let previousElementContainer: any;
let currentNumberContainer: any;
let operation: any;

let numberButton: any;

let addButton: any;
let decimalButton: any;
let minusButton: any;
let resultButton: any;
let divisionButton: any;
let multiplyButton: any;
// let clearButton: any;
let clearAllButton: any;


numbersWrapper = document.querySelector('#numbers-wrapper') as HTMLSelectElement;
result = document.querySelector('#result') as HTMLSelectElement;
previousElementContainer = document.querySelector('#previousElement') as HTMLSelectElement;
currentNumberContainer = document.querySelector('#currentNumber') as HTMLSelectElement;

// Function to create number buttons
function createBoard() {
  // Loopy Loop
  for (let i = 0; i < 10; i++) {
    numberButton = new Button('calc-number', null,  JSON.stringify(i));

    numberButton.addEventListener('click', () => {
      currentNumberContainer.append(i);
    });

    numbersWrapper.append(numberButton);
  }
}

createBoard();


// Init other buttons and add them to their container
clearAllButton = new Button('calc-methods', 'clearAllButton', 'AC');
numbersWrapper.append(clearAllButton);

clearAllButton.addEventListener('click', () => {
  calculator.clearAllNumbers();
});

// Decimal Button
decimalButton = new Button('calc-number', null, '.');
numbersWrapper.append(decimalButton);

// Other Buttons
// clearButton = new Button('calc-methods', 'clearButton', 'CLEAR');
// numbersWrapper.append(clearButton);

addButton = new Button('calc-methods', 'operation',  '+');
numbersWrapper.append(addButton);

minusButton = new Button('calc-methods', 'operation',  '-');
numbersWrapper.append(minusButton);

divisionButton = new Button('calc-methods', 'operation', '÷');
numbersWrapper.append(divisionButton);

multiplyButton = new Button('calc-methods', 'operation', '*');
numbersWrapper.append(multiplyButton);

// Resutl Button
resultButton = new Button('calc-methods', 'resultButton', '=');
numbersWrapper.append(resultButton);


let calculator = new Calculate(previousElementContainer, currentNumberContainer);


let allMethods = document.querySelectorAll<HTMLElement>('.operation');

// Listener for all the methods Button
allMethods.forEach((method) => {
  method.addEventListener('click', (e: Event) => {
    e.preventDefault();
    operation = method.innerHTML;
    currentNumberContainer.append(method.innerHTML);
    previousElementContainer.append(currentNumberContainer.innerHTML);
    currentNumberContainer.innerHTML = '';
  });
});

// Listen for result display request
resultButton.addEventListener('click', () => {
  switch (operation) {
    case '+':
      console.log(calculator.addNumbers());
      currentNumberContainer.innerHTML = calculator.addNumbers();
      break;
    case '-':
      console.log(calculator.substractNumbers());
      currentNumberContainer.innerHTML = calculator.substractNumbers();

      break;
    case '*':
      console.log(calculator.multiplyNumbers());
      currentNumberContainer.innerHTML = calculator.multiplyNumbers();
      break;
    case '÷':
      console.log(calculator.divideNumbers());
      currentNumberContainer.innerHTML = calculator.divideNumbers();
      break;
    default:
      currentNumberContainer.innerHTML = "Invalid input :(";
      break;
  }

  previousElementContainer.innerHTML = '';
});
