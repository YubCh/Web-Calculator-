# Web-Calculator-


For js code:
In this code, we first select the buttons and the expression and result elements using the querySelectorAll 
and querySelector methods, respectively. Then, we add an event listener to each button that listens for a click event. 
When a button is clicked, the innerText of the button is obtained and processed depending on its value. If the value is C, 
the expression and result are cleared. If the value is =, the expression is evaluated using the eval function and the result is displayed. 
If the value is &larr;, the last character of the expression is removed. Otherwise, the value of the button is appended to the expression.
For css code:
In this code, we use CSS to style the #calculator element and its child elements. The #calculator element has a width, height, background color, 
and border radius. The .output element is a flex container that displays its child elements in a row and spaces them evenly. 
The expression and result elements have font sizes of 2em and 1.5em, respectively. 
The .keys element is a flex container that displays its child elements in a grid. The buttons have a width, height, font size, margin, 
and border radius. The button:active selector styles the button when it is pressed. The button#clear selector styles the clear button with a 
dark red background color and white text color. The button#equals selector styles the equals button with a green background color and white text color.
The button:not(#clear):not(#equals) selector styles all other buttons with a gray background color and white text color.
This whole file including the script was actually created by openai chatgpt.
The only sentence I typed was: "Here is an example of a calculator website using HTML, CSS, and JavaScript in separate files:"
Unfortunately there are some issues with the script since the multiplication and the divison are not working right.
Adding and Subtracting does not have any issues.

