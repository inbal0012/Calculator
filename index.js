const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    let displayedNum = display.textContent;

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k =>
      k.classList.remove('is-depressed')
    );

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      console.log('number key! ' + keyContent);
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      console.log('operator key!');
    } else if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
        console.log('decimal!');
      }
    } else if (action === 'clear') {
      console.log('clear!');
    } else if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);

      console.log('= clicked');
    }
  }
});

const calculate = (firstValue, operator, secondValue) => {
  switch (operator) {
    case 'add':
      result = firstValue + secondValue;
      break;
    case 'subtract':
      result = firstValue - secondValue;
      break;
    case 'multiply':
      result = firstValue * secondValue;
      break;
    case 'divide':
      result = firstValue / secondValue;
      break;

    default:
      break;
  }
  return result;
};
