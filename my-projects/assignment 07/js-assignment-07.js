// ***

// ? Qno 1:

// function power(a, b) {
//   if (b === 0) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 0; i < Math.abs(b); i++) {
//     result *= a;
//   }
//   if (b < 0) {
//     return 1 / result;
//   }
//   return result;
// }

// let base = 2;
// let exponent = 3;

// let result = power(base, exponent);
// console.log(result);

// ? Qno 2:

// function leapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0 && year % 400 !== 0) {
//       return false;
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// let inputYear = parseInt(prompt("enter a year"));

// if (leapYear(inputYear)) {
//   console.log(`${inputYear} is a leap year`);
// } else {
//   console.log(`${inputYear} is not a leap year`);
// }

//  ? Qno 3:

// function triangle(a, b, c) {
//   let s = (a + b + c) / 2;

//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// let a = 5;
// let b = 6;
// let c = 7;

// let result = triangle(a, b, c);
// console.log(result);

// ? Qno 4:

// function average(sub1, sub2, sub3) {
//   return (sub1 + sub2 + sub3) / 3;
// }
// function percentage(sub1, sub2, sub3, totalMarks) {
//   let obtainedMarks = sub1 + sub2 + sub3;

//   return (obtainedMarks / totalMarks) * 100;
// }
// function mainFun() {
//   let math = parseFloat(prompt("enter your math marks"));
//   let phy = parseFloat(prompt("enter your physics marks"));
//   let che = parseFloat(prompt("enter your chemistry marks"));

//   let result = average(math, phy, che);
//   let result2 = average(math, phy, che, 300);
//   console.log(" average is" + result);

//   console.log("percentage is" + result2);
// }

// mainFun();

// ? Qno 5:

// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// let sentance = "hello world";

// let char = "o";

// let result = customIndexOf(sentance, char);
// console.log(result);
// ? Qno 6:

// function removeVowels(sentance) {
//   let result = sentance.replace(/[aeiou]/g, "");
//   return result;
// }

// let sentance = "hello there my name is sharjeel ahmed and i am from pakistan";

// let result = removeVowels(sentance);
// console.log(result  );

//

// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// // Example usage
// let sentence = "Hello, World!";
// let characterToFind = "o";
// let index = customIndexOf(sentence, characterToFind);
// console.log("Index of '" + characterToFind + "': " + index);

// ? Qno 7 :

// function countSuccessiveVowels(text) {
//   let count = 0;
//   const vowels = "aeiou";

//   for (let i = 0; i < text.length - 1; i++) {
//     let currentChar = text[i].toLowerCase();
//     let nextChar = text[i + 1].toLowerCase();

//     // Check if current character and next character are both vowels
//     if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//       count++;
//       // Print the successive vowel pair if you want
//       console.log(text.slice(i, i + 2));
//     }
//   }

//   return count;
// }

// // Example usage
// let sentence = "Pleases read this application and give me gratuity";
// let occurrences = countSuccessiveVowels(sentence);
// console.log("Number of occurrences of successive vowels: " + occurrences);

// ? Qno 8:

// // Function to convert kilometers to meters
// function convertToMeters(kilometers) {
//   return kilometers * 1000; // 1 kilometer = 1000 meters
// }

// // Function to convert kilometers to feet
// function convertToFeet(kilometers) {
//   return kilometers * 3280.84; // 1 kilometer = 3280.84 feet
// }

// // Function to convert kilometers to inches
// function convertToInches(kilometers) {
//   return kilometers * 39370.1; // 1 kilometer = 39370.1 inches
// }

// // Function to convert kilometers to centimeters
// function convertToCentimeters(kilometers) {
//   return kilometers * 100000; // 1 kilometer = 100000 centimeters
// }

// // Example usage
// let distanceInKilometers = parseFloat(prompt("Enter distance in kilometers:"));

// let meters = convertToMeters(distanceInKilometers);
// let feet = convertToFeet(distanceInKilometers);
// let inches = convertToInches(distanceInKilometers);
// let centimeters = convertToCentimeters(distanceInKilometers);

// console.log(distanceInKilometers + " kilometers is equal to:");
// console.log(meters + " meters");
// console.log(feet + " feet");
// console.log(inches + " inches");
// console.log(centimeters + " centimeters");

// ? Qno 9:

// Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40;
//   const overtimeRate = 12.0; // Rs. per hour for overtime

//   if (hoursWorked <= regularHours) {
//     return 0; // No overtime pay if hours worked is within or equal to 40 hours
//   } else {
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
// }

// // Example usage
// let hoursWorked = parseFloat(prompt("Enter hours worked by the employee:"));
// let overtimePay = calculateOvertimePay(hoursWorked);
// console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));

// ? Qno 10:

// function withdraw(amount) {
//   // Find the number of 100 rupee notes.
//   const hundredNotes = Math.floor(amount / 100);

//   // Update the remaining amount.
//   amount %= 100;

//   // Find the number of 50 rupee notes.
//   const fiftyNotes = Math.floor(amount / 50);

//   // Update the remaining amount.
//   amount %= 50;

//   // Find the number of 10 rupee notes.
//   const tenNotes = Math.floor(amount / 10);

//   return { hundredNotes, fiftyNotes, tenNotes };
// }

// // Example usage:

// const amount = parseFloat(prompt("enter amount"));
// const { hundredNotes, fiftyNotes, tenNotes } = withdraw(amount);

// console.log(`Hundred notes: ${hundredNotes}`);
// console.log(`Fifty notes: ${fiftyNotes}`);
// console.log(`Ten notes: ${tenNotes}`);
