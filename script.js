const buttons = document.querySelectorAll('button');
const expression = document.querySelector('#expression');
const result = document.querySelector('#result');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.textContent;
    switch (buttonValue) {
      case 'C':
        expression.textContent = '';
        result.textContent = '';
        break;
      case '=':
        try {
          result.textContent = eval(expression.textContent);
        } catch (error) {
          result.textContent = 'Error';
        }
        break;
      default:
        expression.textContent += buttonValue;
        break;
    }
  });
});
