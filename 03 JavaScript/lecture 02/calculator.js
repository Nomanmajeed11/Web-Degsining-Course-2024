    // Take input for operands
    var operand1 = parseFloat(prompt("Enter the first number:"));
    var operand2 = parseFloat(prompt("Enter the second number:"));


    // Function to perform calculator operations
    function calculator() {
    // Take input for operation choice
    var operation = prompt("Choose an operation: +, -, *, /");



    // Variable to store the result
    var result;

    // Switch-case to perform the selected operation
    switch (operation) {
        case 'add': case 'addition' : case '+':
            result = operand1 + operand2;
            break;
        case 'sub': case 'subtration' : case '-':
            result = operand1 - operand2;
            break;
        case 'mul': case 'multiplication': case '*':
            result = operand1 * operand2;
            break;
        case 'div': case 'divided': case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                result = "Cannot divide by zero!";
            }
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result
    alert("Result: " + result);
}

// Call the calculator function
calculator();
