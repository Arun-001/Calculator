// Get references to the input fields, buttons, and result display
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('output');

// Get the operation buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// Helper function to get numbers from input fields
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    return { num1, num2 };
}

// Event listener for arithmetic operations using switch statement
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const { num1, num2 } = getNumbers();
        let result;

        // Using switch statement to decide which operation to perform
        switch (button.id) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Error: Division by zero';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operation';
                break;
        }

        // Display the result
        resultDisplay.textContent = result;
    });
});
