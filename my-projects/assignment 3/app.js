//  todo Assignment 3 || Task 1
// ? Qno 1:
// var a = +prompt("enter vale of a");

// document.write(`<h1>Results: </h1><br>
// The value of a is : ${a}<br>..................................................<br>
// `);
// ++a;
// document.write(`The value of ++a is: ${a}<br>
// Now the value of a is : ${a}<br><br>
// The value of a++ is: ${a}<br>`);
// a++;
// document.write(`
// Now the value of a is : ${a}<br><br>
// `);
// a--;
// document.write(`The value of --a is: ${a}<br>
// Now the value of a is : ${a}<br><br>The value of a-- is: ${a}<br>
// `);
// --a;
// document.write(`
// Now the value of a is : ${a}
// <br><br>`);

//? Q no 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");

// ? Qno 3:
// var name1 = prompt("enter your name");
// document.write("Hello " + name1);

// ? Qno 4:
// var tableNumber = +prompt("enter your number", 5);

// for (let i = 0; i < 10; i++) {
//   document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
// }

// ? Qno 5:

//** */ Step a:
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// ** Step b:
// var totalMarks = 100;

// ** Step c: Take obtained marks for the first subject from the user
// var obtainedMarks1 = parseFloat(
//   prompt("Enter obtained marks for " + subject1 + ":")
// );

// ** Step d:
// var obtainedMarks2 = parseFloat(
//   prompt("Enter obtained marks for " + subject2 + ":")
// );
// var obtainedMarks3 = parseFloat(
//   prompt("Enter obtained marks for " + subject3 + ":")
// );

//** */ Step e:
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table border='1'>");
// document.write(
//   "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject1 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks1 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject2 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks2 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject3 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks3 +
//     "</td></tr>"
// );
// document.write("</table>");

// document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

//  todo Assignment 3 || Task 2

// ? Qno 1:

// var input = prompt("Enter a character:");

// if (!isNaN(input)) {
//   console.log(input + " is a number.");
// } else {
//   var asciiValue = input.charCodeAt(0);
//   if (asciiValue >= 65 && asciiValue <= 90) {
//     console.log(input + " is an uppercase letter.");
//   } else if (asciiValue >= 97 && asciiValue <= 122) {
//     console.log(input + " is a lowercase letter.");
//   } else {
//     console.log(
//       input + " is not a number, uppercase letter, or lowercase letter."
//     );
//   }
// }

//  ? Qno 2:

// var num1 = +prompt("Enter your First number");
// var num2 = +prompt("Enter your second number");

// if (num1 < num2) {
//   document.write(`number ${num1} is greater`);
// } else if (num1 == num2) {
//   document.write(`number are equal `);
// } else {
//   document.write(`number ${num2} is greater`);
// }

//  ? Qno 3:

// var num = +prompt(`enter your number`);

// if (num > 0) {
//   document.write(`Number is Positive`);
// } else if (num < 0) {
//   document.write(`Number is negative`);
// } else if (num == 0) {
//   document.write(`Number is negative`);
// }

//  ? Qno 4:

// var char = prompt(`enter a charater`);

// if (char.length === 1) {
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log("please enter a single character");
// }

//  ? Qno 5:

// var password = prompt(`Please enter your password`);

// correctPassword = "bariFamily786";

// if (password == correctPassword) {
//   console.log(
//     "Correct! The password you entered matches the original password"
//   );
// } else if (password != correctPassword) {
//   console.log("Incorrect password");
// }

// ? Qno 6:

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// ? Qno 7:

// var time = parseInt(
//   prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):")
// );

// if (time >= 0 && time < 1200) {
//   document.write("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   document.write("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//   document.write("Good Evening");
// } else if (time >= 2100 && time <= 2359) {
//   document.write("Good Night");
// } else {
//   document.write("Invalid input. Please enter a valid time in 24-hour format.");
// }
//  todo assignment 3 || task 3

// ? Qno 1:

// var studentName = [];
//  ? Qno 2:
// var studentNames = {};

// ? Qno 3:

//  arrays for strings

// var Friendsnames = [
//   "arsalan",
//   "usman",
//   "moin",
//   "gufran",
//   "maviya",
//   "uzaima",
//   "ashar",
//   "hamza",
// ];

//  ? Qno 4 :

//  arrays for number

// var myNumber = [1,2,3,4,5];

// ? Qno 5:
//  arrays for boolean

// var myRecords = [true, false];
// ? Qno 6:

// arrays for mixing

// var myRoutine = ["prayers namaaz", 12, true];

// ? Qno 7:

// var educationList = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PHD"];
// document.write(`<h1>Qualifications</h1><br>`);

// var educationLength = educationList.length;
// document.write();
// for (i = 0; i < educationLength; i++) {
//   //   document.write(i + ")" + educationList[i] + "<br>");
//   var listNumber = i + 1;
//   document.write(`${listNumber}) ${educationList[i]}  <br>`);
// }

//  ? Qno 8:

// var studentNames = ["usman", "moin", "arsalan"];

// var studentScore = [400, 300, 350];

// totalMarks = 500;

// s1 = (studentScore[0] / totalMarks) * 100;
// s2 = (studentScore[1] / totalMarks) * 100;
// s3 = (studentScore[2] / totalMarks) * 100;

// document.write("Total Marks is " + totalMarks + "<br>");

// document.write(
//   `score of ${studentNames[0]} is ${studentScore[0]}. Percentage : ${s1}% <br>`
// );
// document.write(
//   `score of ${studentNames[1]} is ${studentScore[0]}. Percentage : ${s2}% <br>`
// );
// document.write(
//   `score of ${studentNames[2]} is ${studentScore[0]}. Percentage : ${s3}% <br>`
// );

// ? Qno 9:

var colors = ["red", "green", "blue"];

console.log(colors + "<br>");

var addColorAtStart = prompt("What color you want to add in start");

colors.unshift(addColorAtStart);
console.log(colors + "<br>");

var addColorAtEnd = prompt("What color you want to add ends");

colors.push(addColorAtEnd);
console.log(colors + "<br>");

colors.splice(0, 0, "purple", "orange");

console.log(colors + "<br>");

colors.shift();
console.log(colors + "<br>");

var addColorsAtPosition = prompt("which index you want to add colors");
var addColorName = prompt("which index you want to add colors");
colors.splice(addColorsAtPosition, 0, addColorName);

console.log(colors + "<br>");

// ? Qno 10 :
// studentScores = [500, 234, 544, 166, 788];

// document.write(`Score of Students:  ${studentScores} <br>`);
// document.write(`Ordered Score of Students:  ${studentScores.sort()}`);

// ? Qno 11:
// var cityList = ["karachi", "lahore", "islamabad", "Quatta", "peshawar"];

// var selectedCity = cityList.slice(2, 4);
// document.write("Cities List:" + "<br>");
// document.write(cityList + "<br>");
// document.write("Selected Cities List:" + "<br>");
// document.write(selectedCity);

// ? Qno 12:

// var arr = ["This", "is", "my", "cat"];

// document.write("Arrays : " + arr + "<br>");
// document.write("Strings : " + arr.join(" ") + "<br>");

// ? Qno 13:

// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");
// document.write(`<h1>Devices</h1><br>${devices} <br>`);

// document.write(`<h1>OUT</h1>: <br>${devices[0]}`);
// document.write(`<h1>OUT</h1>: <br>${devices[1]}`);
// document.write(`<h1>OUT</h1>: <br>${devices[2]}`);
// document.write(`<h1>OUT</h1>: <br>${devices[3]}`);
// ? Qno 14:
// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");
// document.write(`<h1>Devices</h1><br>${devices} <br>`);

// document.write(`<h1>OUT</h1>: <br> ${devices[devices.length - 1]}`);
// document.write(`<h1>OUT</h1>: <br> ${devices[devices.length - 2]}`);
// document.write(`<h1>OUT</h1>: <br> ${devices[devices.length - 3]}`);
// document.write(`<h1>OUT</h1>: <br> ${devices[devices.length - 4]}`);

// ? Qno 15:

// var phoneManufacter = [
//   "apple",
//   "samsung",
//   "motorola",
//   "nokia",
//   "sony",
//   "haier",
// ];

// // Write the select element opening tag
// document.write('<select id="manufacturerSelect">');

// // Write the options based on the array
// for (var i = 0; i < phoneManufacter.length; i++) {
//   document.write(
//     '<option value="' +
//       phoneManufacter[i] +
//       '">' +
//       phoneManufacter[i] +
//       "</option>"
//   );
// }

// // Write the select element closing tag
// document.write("</select>");
