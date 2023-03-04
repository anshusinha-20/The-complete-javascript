"use strict";

// Default parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 version
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH124", 4);
// createBooking("LH124", undefined, 1000);

/////

// 129. How passing arguments works: value vs reference

// const flight = "LH123";
// const anshu = {
//   name: "Anshu Sinha",
//   passportNum: 53534535234,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH2334";
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passportNum === 5353453523) {
//     console.log("Checked in!");
//   } else {
//     console.log("Wrong passport!");
//   }
// };

// checkIn(flight, anshu);
// console.log(flight);
// console.log(anshu);

// const newPassport = function (person) {
//   person.passportNum = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(anshu);
// checkIn(flight, anshu);
// console.log(anshu);

/////

// 131. Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher order function
// const transform = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transform("JavaScript is the best language!", upperFirstWord);
// console.log("/////");
// transform("JavaScript is the best language!", oneWord);

/////

// 132. Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet("Hey");
// greeter("Anshu");

// greet("Hi")("Sam");

/////

// 133. The call and apply methods

// const lufthansa = {
//   airline: "Lufthansa",
//   iatacode: "LH",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat in ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({
//       fligt: `${this.iatacode}${flightNum}`,
//       passengerName: name,
//     });
//   },
// };

// lufthansa.book(123, "Anshu Sinha");
// lufthansa.book(433, "Sahil Sinha");
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: "Eurowings",
//   iatacode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // call method
// book.call(eurowings, 564, "Madhuri Sinha");
// console.log(eurowings.bookings);

// // apply method
// const flightData = [353, "Ramesh Kumar Sinha"];
// book.apply(eurowings, flightData);
// console.log(eurowings.bookings);

/////

// 134. The bind method

// const lufthansa = {
//   airline: "Lufthansa",
//   iatacode: "LH",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat in ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({
//       fligt: `${this.iatacode}${flightNum}`,
//       passengerName: name,
//     });
//   },
// };

// const eurowings = {
//   airline: "Eurowings",
//   iatacode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// const bookLH = book.bind(lufthansa);
// const bookEW = book.bind(eurowings);

// // bookLH(898, "Anshu Sinha");
// // bookEW(865, "Sahil Sinha");

// // with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes += 1;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

/////

// Coding challenge #1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The
// method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     if (answer >= 0 && answer < this.options.length) {
//       this.answers[answer] += 1;
//     } else {
//       alert(`Answer ${answer} wouldn't make sense right!`);
//     }

//     const type = prompt("Enter the result type, 'array' or 'string'");
//     this.displayResults(type);
//   },

//   displayResults: function (type = "array") {
//     if (type == "array") {
//       alert(this.answers);
//     } else if (type == "string") {
//       alert(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

/////

// 136. Immediately invoked function espressions (IIFE)

// (function (name) {
//   console.log(`My name is ${name}`);
// })("Anshu");
