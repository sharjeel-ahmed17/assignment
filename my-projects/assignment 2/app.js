// Todo ? Chapter No 5

// ? Q no 1:
// var num1 = +prompt("Enter Your First Number");
// var num2 = +prompt("Enter Your Second Number");

// var result = num1 + num2;

// document.write(`Sum Of ${num1} and ${num2} is : ${result}`);

// ? Q no 2 :

// var num1 = +prompt("Enter Your First Number");
// var num2 = +prompt("Enter Your Second Number");

// var subtration = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// document.write(`Sum Of ${num1} and ${num2} is : ${subtration} <br>`);
// document.write(
//   `Subtration  Of ${num1} and ${num2} is : ${multiplication} <br>`
// );
// document.write(`Multiplication Of ${num1} and ${num2} is : ${division} <br>`);
// document.write(`MOdulus Of ${num1} and ${num2} is : ${modulus}`);

// ? Qno 3:

// var number; // * a
// document.write(`Value After Variable Declaration Is ${number} <br>`); // * b
// number = 5; // * c
// document.write(`Initial Value:  ${number} <br>`); // * d
// number++; // * e
// document.write(`Value After Increment Is: ${number} <br>`); // * f
// number += 7; // * g
// document.write(`Value After Addition Is: ${number} <br>`); // * h
// number--; // * i
// document.write(`Value After Decrement Is: ${number} <br>`); // * j
// updateNumber = number % 3; // * k
// document.write(`The Remainder Is: ${updateNumber} <br>`); // * L

// ? Q no 4 :

// var movieTicket = 600;
// var ticketPrice = +prompt(
//   `Movie Ticket Price Is: ${movieTicket}\nEnter Amount Of Ticket`
// );

// console.log(movieTicket * ticketPrice);

// document.write(
//   `MOvie Ticket Price is ${movieTicket} <br>Total Cost To Buy ${ticketPrice} Tickets To a Movie Is: ${
//     movieTicket * ticketPrice
//   }`
// );

// ? Qno 5:

// var tableNumber = +prompt(`Enter Your Number To Print Table`);

// document.write(`Table Of ${tableNumber}`);
// for (var i = 2; i <=10; i++) {
//   document.write(`${tableNumber}\tx\t${i}\t=\t${i * tableNumber}<br>`);
// }

// var tableNumber = +prompt(`Enter Your Number To Print Table`);

// document.write(`Table OF ${tableNumber}<br>`);
// for (var i = 1; i <= 10; i++) {
//   document.write(`${tableNumber} x ${i} = ${i * tableNumber}<br>`);
// }

// ? Qno 6:

// var celsius = +prompt(`Enter Celsius Value`); // ** a
// var fahrenheit = +prompt(`Enter Fahrenheit Value`); // ** c

// var convertToFahrenheit = (celsius * 9) / 5 + 32; // ** c

// var convertToCelsius = ((fahrenheit - 32) * 5) / 9; // ** d

// document.write(`<h1>The Temperature Converter</h1><br>
// Celsius Convert To Fahrenheit : ${celsius + "<sup>0</sup>" + "C"}

// Celsius is ${convertToFahrenheit + "<sup>0</sup>" + "F"} Fahrenheit.  <br>
// Fahrenheit Convert To Celsius : ${fahrenheit + "<sup>0</sup>" + "F"}

// Fahrenheit is ${convertToCelsius + "<sup>0</sup>" + "C"} Celsius.
// `);

// ? Qno 7:

// var shirtPrice = 1000;
// var tshirtPrice = 650;
// var qtyShirt = +prompt(
//   `Shirt Price is Rs.${shirtPrice}\nEnter Piece Of Shirt To Buy`
// );
// var qtyTshirt = +prompt(
//   `T-shirt Price is Rs.${tshirtPrice}\nEnter Piece Of T-shirt To Buy`
// );
// var amoutOfShirt = shirtPrice * qtyShirt;
// var amoutOfTshirt = tshirtPrice * qtyTshirt;

// var shiping = 100;

// var totalAmount = amoutOfTshirt + amoutOfShirt + shiping;
// document.write(`<h1>Shoping Cart</h1>
// Price of Shirt Is ${shirtPrice}<br>
// Quantity Of Shirt Is ${qtyShirt} <br>
// Price of T-shirt Is ${tshirtPrice}<br>
// Quantity Of T-shirt Is ${qtyTshirt} <br>
// Shiping Charges Is ${shiping}<br>
// Total Cost Of Order Is : ${totalAmount}`);

// ** for example :   1000 x 2 + 650 X 2 + 100

// ? Qno 8:

// var totalMarks = +prompt("Enter Total Marks Of Student: ");
// var obtainedMarks = +prompt("Enter Marks Obtained Of Student: ");

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write(`<h1>Marks Sheet</h1>Total Marks : ${totalMarks}<br>
// Marks Obtained ${obtainedMarks}<br>
// Percentage ${percentage + "%"}
// `);

// ? Qno 9:

// ** currency rate today

// var riyalRateToday = +prompt("Enter Riyal Price Today");
// var dollarRateToday = +prompt("Enter Dolllar Price Today");

//  ** amount of money

// var riyal = +prompt("How Many Riyal Do You have\nEnter amount Of Riyals");
// var dollars = +prompt("How Many Dollars Do You have\nEnter amount Of Dollars");

// var totalRiyals = riyal * riyalRateToday;
// var totalDollars = dollars * dollarRateToday;

//  ** total currency in pkr
// var totalCurrenyInPkr = totalDollars + totalRiyals;

// document.write(`
// <h1>Currency In PKR</h1>

// Total Riyal Is ${totalRiyals}<br>

// Total Dollars  Is ${totalDollars}<br>

// Total Currency in PKR is : ${totalCurrenyInPkr}

// `);

// ? Qno 10 :

// var InitialValue = +prompt(
//   `Enter Any Number\nyour number firstly add by 5\nthen multiply by 10\nand then     divide by 2 `
// );

// result = InitialValue + (5 * 10) / 2;

// document.write(result);

// ? 11 :

// var currentYear = 2023;
// var dob = +prompt("enter your dath of birth");
// var calculateAge = currentYear - dob;
// document.write(`You Are ${calculateAge}Years Old.`);

// ? Qno 12:
// var pi = 3.142;

// var radius = +prompt("Enter Radius Number");

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write(`<h1>The Geometrizer</h1><br>
//     Radius Of Circle: ${radius}<br>
//     The Circumfrence is:  ${circumference}<br>
//     The Area Is: ${area}

// `);

//  ? Qno 13 :
// var snack = prompt("Enter Your Favoutite snaks"); //  ** a

// var myAge = +prompt("Enter Your Current Age"); //  ** b
// var maxAge = +prompt("Enter Your Estimated Maximum Age "); //  ** c

// var snacksPerDay = +prompt(`Enter Amount Of ${snack} per day`); //  ** d

// var SnaksPerYear = snacksPerDay * 365;

// var totalAge = maxAge - myAge;

// snaksEatAllLife = SnaksPerYear * totalAge;

// //  extra code here

// AmountOfSnacks = +prompt(`Enter today ${snack} price `);

// totalAmountOfSnacks = snaksEatAllLife * AmountOfSnacks;

// document.write(`<h1>The Life Time Supply Calculator</h1>Favourite Snacks: ${snack}<br>
// Current Age: ${myAge}<br>

// Estimated Maximum Age: ${maxAge}<br>
// Amount of Snaks Per Day: ${snacksPerDay}<br>
// You will need ${snaksEatAllLife} ${snack} to last you until the ripe old age of ${maxAge}<br>

// You will be eat Rs.${totalAmountOfSnacks} in today's price .

// `);
