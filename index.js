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

    if (!action) {
      if (displayedNum === '0') {
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
      console.log('operator key!');
    } else if (action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
        console.log('decimal!');
      }
    } else if (action === 'clear') {
      console.log('clear!');
    } else if (action === 'calculate') {
      console.log('= clicked');
    }
  }
});
