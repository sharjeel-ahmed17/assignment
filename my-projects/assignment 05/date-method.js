// todo Date Method

//  ? Qno 1:

// var date = new Date();

// document.write(date);

//  ? Qno 2:

// var date = new Date();

// var currentMonth = date.getMonth();
// var months = [
//   "January",
//   "Febrary",
//   "March",
//   "APril",
//   "May",
//   "June",
//   "July",
//   "Auguest",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// document.write("Current Month: " + months[currentMonth]);

//  ? Qno 3:

// var date = new Date();

// currentDay = date.getDay();

// var days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wedesday",
//   "trusday",
//   "friday",
//   "saturday",
// ];

// document.write("Todays is " + days[currentDay].slice(0, 3));

//  ! incomple ? Qno 4:

// var date = new Date();

// currentDay = date.getDay();

// var days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wedesday",
//   "trusday",
//   "friday",
//   "saturday",
// ];

// // document.write("Todays is " + days[currentDay].slice(0, 3));

// if (days === 6 || days === 0) {
//   document.write("it's fun day");
// } else {
//   document.write("it's not a fun day");
// }

// ? Qno 5:

// var date = new Date();

// // var day = date.getDay();

// // ** check condition var day = 15;

// // document.write(day);

// if (day <= 15) {
//   document.write("first fifteen days of the months");
// } else if (day >= 15 && day <= 31) {
//   document.write("last fifteen days of the months");
// }

//   ? Qno 6:

// var date = new Date();

// var miliSec = date.getTime();

// var minute = miliSec / 60000;

// document.write(`current date : ${date}<br>
// elapsed miliseconds since jan 1 , 1970 : ${miliSec}<br>
// elapsed minutes since jan 1 , 1970 : ${minute}<br>

// `);

// ? Qno 7 :

// var date = new Date();

// var timeCheck = date.getHours();
// console.log(timeCheck);

// if (timeCheck <= 12) {
//   document.write("its am");
// } else {
//   document.write("its pm");
// }

// ? Qno 8:

// var date = new Date("thu dec 31 2020");

// console.log(date);

// Qno 9:

// var ramadonStartDate = new Date("2023 04 1");

// var currentDate = new Date();

// var timeDiff = currentDate - ramadonStartDate;

// var dayPassed = timeDiff / (1000 * 60 * 60 * 24);

// document.write(
//   `${Math.floor(dayPassed)} days have been passed since 1st ramadan , 2023 `
// );

//   ? Qno 10:

// var referenceDate = new Date("1970 01 01");

// var beginningOf2015 = new Date("2015 01 01");

// var elapedSecond = (beginningOf2015 - referenceDate) / 1000;

// document.write(
//   "Seconds elapsed between the reference date and the beginning of 2015: " +
//     elapedSecond
// );

// ? Qno 11:

// var currentDate = new Date();

// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);

// document.write(`current Date : ${currentDate} <br>
// 1 hour ago it was ${new Date()}`);

// ? Qno 12:

// var currentDate = new Date();

// var resetDate = new Date(currentDate);

// resetDate.setFullYear(currentDate.getFullYear() - 100);

// alert(`current date: ${currentDate}\n100 years back it was ${resetDate}`);
// document.write(
//   `current date: ${currentDate}<br>100 years back it was ${resetDate}`
// );

// ? Qno 13:

// var userAge = prompt("please enter your age");

// var currentYear = new Date().getFullYear();

// var dob = currentYear - parseInt(userAge);

// document.write(`your age is ${dob}<br>your birth year is ${userAge}`);


// ? Qno 14:


var customerName;

