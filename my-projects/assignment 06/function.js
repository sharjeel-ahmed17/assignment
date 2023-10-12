// todo Js Function assignment

// ? Qno 1:

// function date() {
//   var date = new Date();
//   document.write(date);
// }

// date();

// ? Qno 2:

// var fname = prompt("enter your first name");
// var lname = prompt("enter your last name");

// function fullName(firstName, lastName) {
//   var fullName = firstName + lastName;

//   document.write("hello " + fullName);
// }

// fullName(fname, lname);

//  ? Qno 3:

// var num1 = +prompt("enter your first number");
// var num2 = +prompt("enter your second number");

// function add(a, b) {
//   var c = a + b;

//   return c;
// }

// var result = add(num1, num2);
// document.write(result);

//  ? Qno 4:

// var num1 = prompt("enter your first number");
// var num2 = prompt("enter your second number");
// var operator = prompt("chose operator");

// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     return +num1 + +num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   }
// }

// var result = calculator(num1, num2, operator);
// console.log(result);

// ? Qno 5:

// var square = prompt();

// function squareRoot(square) {
//   return square * square;
// }

// console.log(squareRoot(square));
// ? Qno 6:

// function factorial(num) {
//   // Base case: if the number is 0 or 1, factorial is 1
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     // Recursive case: num! = num * (num - 1)!
//     return num * factorial(num - 1);
//   }
// }

// // Example usage
// const number = 5; // Change this to any non-negative integer to compute its factorial
// const result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);

//  ? Qno 7:

// function displayCounter() {
//   var startNumber = parseInt(prompt("enter your first number"));
//   var endNumber = parseInt(prompt("enter your second number"));
//   //   var result = startNumber - endNumber;

//   // console.log(result);

//   for (var i = startNumber; i <= endNumber; i++) {
//     document.write(i + "<br>");
//   }
// }

// displayCounter();

//  ? Qno 8:

// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(side) {
//       return side * side;
//   }

//   const baseSquare = calculateSquare(base);
//   const perpendicularSquare = calculateSquare(perpendicular);
//   const hypotenuseSquare = baseSquare + perpendicularSquare;
//   const hypotenuse = Math.sqrt(hypotenuseSquare);

//   return hypotenuse;
// }

// // Example usage
// const base = 3; // Change this to the length of the base of the triangle
// const perpendicular = 4; // Change this to the length of the perpendicular of the triangle
// const hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log(`The hypotenuse of the right-angled triangle is: ${hypotenuse.toFixed(2)}`);

// ? Qno 9:

// var height = parseInt(prompt("enter height of a area"));
// function rectangle(width, height) {
//   //   var width = parseInt(prompt("enter width of a area"));

//   var area = width * height;
//   return console.log(`the area of rectangle is ${area}`);
// }

// var result = rectangle(12, height);

// ? Qno 10:

// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

//   return cleanStr === cleanStr.split("").reverse().join("");
// }

// // Example usage
// const inputString = "Madam";
// if (isPalindrome(inputString)) {
//   console.log(`${inputString} is a palindrome.`);
// } else {
//   console.log(`${inputString} is not a palindrome.`);
// }

// ? 11:

// function capitalizeWords(str) {
//   // Split the input string into words
//   const words = str.split(" ");

//   // Capitalize the first letter of each word and join them back
//   const capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );

//   // Join the capitalized words into a string
//   const result = capitalizedWords.join(" ");

//   return result;
// }

// // Example usage
// const inputString = "the quick brown fox";
// const outputString = capitalizeWords(inputString);
// console.log(outputString); // Output: 'The Quick Brown Fox'

//  ? 12

// function findLongestWord(str) {
//   // Split the input string into words
//   const words = str.split(" ");

//   // Initialize variables to keep track of the longest word and its length
//   let longestWord = "";
//   let maxLength = 0;

//   // Iterate through the words and find the longest one
//   for (let i = 0; i < words.length; i++) {
//     const currentWord = words[i];
//     // Remove any non-alphanumeric characters to get the actual word length
//     const wordLength = currentWord.replace(/[^A-Za-z]/g, "").length;
//     if (wordLength > maxLength) {
//       maxLength = wordLength;
//       longestWord = currentWord;
//     }
//   }

//   return longestWord;
// }

// // Example usage
// const inputString = "Web Development Tutorial";
// const longestWord = findLongestWord(inputString);
// console.log(`Longest word in the string is: ${longestWord}`); // Output: 'Development'

//  ? 13
// function countOccurrences(str, letter) {
//   // Convert both the input string and the letter to lowercase
//   const lowerCaseStr = str.toLowerCase();
//   const lowerCaseLetter = letter.toLowerCase();

//   // Use split and filter to count occurrences of the letter
//   const occurrences = lowerCaseStr
//     .split("")
//     .filter((char) => char === lowerCaseLetter).length;

//   return occurrences;
// }

// // Example usage
// const inputString = "JSResourceS.com";
// const specifiedLetter = "o";
// const numberOfOccurrences = countOccurrences(inputString, specifiedLetter);
// console.log(
//   `Number of occurrences of '${specifiedLetter}' in the string: ${numberOfOccurrences}`
// ); // Output: 3

//  ? 14
// // Function to calculate circumference of a circle
// function calcCircumference(radius) {
//   const circumference = 2 * Math.PI * radius;
//   console.log(`The circumference is ${circumference.toFixed(2)}`);
// }

// // Function to calculate area of a circle
// function calcArea(radius) {
//   const area = Math.PI * Math.pow(radius, 2);
//   console.log(`The area is ${area.toFixed(2)}`);
// }

// // Example usage
// const radius = 5; // You can change the radius to any desired value
// calcCircumference(radius); // Output: The circumference is 31.42
// calcArea(radius); // Output: The area is 78.54
