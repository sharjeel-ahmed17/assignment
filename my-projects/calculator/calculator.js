function calculator() {
    let firstNumber = parseFloat(prompt("enter first number "));
    let secondNumber = parseFloat(prompt("enter second number "));
    let operator = prompt(
      "choose oprator\n+ for addition\n- for subtraction\n/ for division\nX for multiplication"
    );
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      console.log("enter a valid number please");
      return;
    }
    switch (operator) {
      case "+":
        console.log(`your sum is ${firstNumber + secondNumber}`);
        break;
      case "-":
        console.log(firstNumber - secondNumber);
        break;
      case "/":
        if (secondNumber !== 0) {
          console.log((firstNumber / secondNumber).toFixed(2));
        } else {
          console.log("cannot divide by zero");
        }
        break;
      case "*":
        console.log(firstNumber * secondNumber);
        break;
  
      default:
        console.log("choose a valid opearator");
    }
  }
  calculator();
  