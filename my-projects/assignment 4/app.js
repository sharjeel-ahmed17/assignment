// todo Assignment 4 || task 1 || chapter 17 to 20

//  ? Qno 1 :

// var arrayOfArrays = [[], [], []];

// for (var i = 0; i < arrayOfArrays.length; i++) {
//     console.log(arrayOfArrays);
// }

// ? Qno 2:

// var matric = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (var i = 0; i < matric.length; i++) {
//   console.log(matric[i]);
// }

// ? Qno 3:

// for (var i = 0; i < 10; i++) {
//   var j = i + 1;

//   console.log(j);
// }
//  ? Qno 4:

// var table = prompt("enter your table number");

// var tableLength = prompt("enter length multiplication table");

// for (i = 1; i <= tableLength; i++) {
//   document.write(table + " x " + i + "=" + table * i + "<br>");
//   //   2 x 1 = 2
// }

// ? Qno 5:

// var fruits = ["apple", "banana", "mango", "orange", "strawberrt"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(`Element at index ${i} is ${fruits[i]}`);
// }

// ? Qno 6:

//  ** a: counting

// for (var i = 1; i < 16; i++) {
//   console.log(i);
// }

// ** b: reverse counting

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// ** c Even:
// for (var i = 0; i < 21; i = i + 2) {
//   console.log(i);
// }
// ** d odd:
// for (var i = 1; i < 20; i = i + 2) {
//   console.log(i);
// }

// ** e Even:
// for (var i = 2; i < 21; i = i + 2) {
//   console.log(i + "k");
// }

// ? Qno 7:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search:").toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   document.write(`"${userInput}" is found in the list.`);
// } else {
//   document.write(`"${userInput}" is not found in the list.`);
// }

// ? Qno 8:
// var arr = [24, 53, 78, 91, 12];

// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// ? Qno 9:

// var arr = [24, 53, 78, 91, 12];

// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// ? Qno 10:

// for (var i = 5; i <= 100; i = i + 5) {
//   console.log(i);
// }

// todo assigment 4 || task 2 || chapter 21 to 25

//  ? Qno 1:

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");

// var fullName = firstName + lastName;

// document.write(fullName);

//  ? Qno 2:

// var mobileModel = prompt("favorite mobile model");

// var lenOfModel = mobileModel.length;

// document.write(`${mobileModel} ${lenOfModel}`);

// ? Qno 3:

// var countryName = "pakistani";

// document.write(`${countryName.indexOf("n")}`);

// ? Qno 4:

// var message = "hello world";

// document.write(`${message.lastIndexOf("l")}`);

// ? Qno 5:

// var countryName = "pakistani";

// document.write(`${countryName.indexOf("i")} : ${countryName.slice(3, 4)}`);

// ? Qno 6:

// var firstName = prompt("enter your first name");

// var lastName = prompt("enter your last name");

// var fullName = firstName.concat(" " + lastName);

// document.write(fullName);

// ? Qno 7:

// var city = "hyderabad";

// document.write(`${city.replace("hyder", "islam").toUpperCase()}`);

// ? Qno 8:

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";

// document.write(`${message.replace("and", "&")}`);

// ? Qno 9:

// var str = "472";
// var num = parseInt(str);

// document.write(`${num} <br> ${typeof num}`);

// ? Qno 10:

// var convertToTitle = prompt("enter your favorite dish");
// convertToTitle.slice(0, 1);
// var title = convertToTitle[0].toUpperCase();
// document.write(`${title + convertToTitle}`);
// ? Qno 11:

// var dish = prompt("enter your favorite dish");
// var convertToUpper = dish.toUpperCase();
// document.write(convertToUpper);

// ? Qno 12:

// var num = 35.36;

// var numToStr = num.toString();

// var rmDot = numToStr.replace(".", "");

// document.write(`${rmDot.toString()}`);

//  ? Qno 13:

// var username = prompt("Enter your username:");

// //  flags to store boolean
// var containsSpecialSymbol = false;

// for (var i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
// //   console.log(i);
//   if (
//     charCode === 33 ||
//     charCode === 44 ||
//     charCode === 46 ||
//     charCode === 64
//   ) {
//     containsSpecialSymbol = true;
//     break;
//   }
// }

// if (containsSpecialSymbol) {

//   alert("Please enter a valid username without special symbols [@, ., !, ,]");
// } else {

//   alert("Username is valid: " + username);
// }

// ? Qno 14:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// var userInput = prompt("Enter an item to search for:").toLowerCase();

// // Initialize a flag to check if the item is found
// var found = false;

// // Iterate through the array to perform the search
// for (var i = 0; i < A.length; i++) {
//   // Convert the current array element to lowercase for case-insensitive comparison
//   var currentItem = A[i].toLowerCase();

//   // Check if the user input matches the current item
//   if (currentItem === userInput) {
//     found = true;
//     break; // Exit the loop if a match is found
//   }
// }

// // Display the result based on whether the item is found or not
// if (found) {
//   alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//   alert("No, '" + userInput + "' is not found in the list.");
// }

// ? Qno 15:

// var password = prompt("enter your password");

// var alphabets = false;
// var number = false;
// var startWithNumber = false;

// if (password.length >= 6) {
//   for (var i = 0; i < password.length; i++) {
//     var charCode = password.charAt(0);

//     if (
//       (charCode >= 65 && charCode <= 90) ||
//       (charCode >= 97 && charCode <= 122)
//     ) {
//       alphabets = true;
//     }
//     if (charCode >= 48 && charCode <= 57) {
//       number = true;

//       if (i === 0) {
//         startWithNumber = true;
//       }
//     }
//   }
// }

// if (alphabets && number && startWithNumber) {
//   document.write("password is valid");
// } else {
//   document.write(
//     "Please enter a valid password that meets the requirements:" +
//       "<br>" +
//       "a. Contains alphabets and numbers " +
//       "<br>" +
//       "b. Does not start with a number " +
//       "<br>" +
//       "c. Is at least 6 characters long"
//   );
// }

// ? Qno 16:

// var university = "univercity of karachi";

// var contToArrays = university.split("");

// for (i = 0; i < contToArrays.length; i++) {
//   document.write(contToArrays[i] + "<br>");
// }

// ? Qno 17:

// var userInput = prompt("user input");

// // var lastCharacter = userInput.charAt(userInput.length - 1);

// var lastIndex = userInput.length - 1;
// var lastChar = userInput[lastIndex];

// // document.write(lastCharacter);
// document.write(lastChar);

// ? Qno 18:
// var message = "The quick brown fox jumps over the lazy dog the the the ";

// var message = message.toLowerCase();

// var words = message.split(" ");

// var count = 0;

// for (var i = 0; i < message.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// document.write(count);
//  todo ends
