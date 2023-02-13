const buttons = document.querySelectorAll('button');
const expression = document.querySelector('#expression');
const result = document.querySelector('#result');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (value === 'C') {
      expression.innerText = '';
      result.innerText = '';
    } else if (value === '=') {
      try {
        expression.innerText = eval(expression.innerText);
      } catch (error) {
        result.innerText = 'Error';
      }
    } else if (value === '&larr;') {
      expression.innerText = expression.innerText.slice(0, -1);
    } else {
      expression.innerText += value;
    }
  });
});
