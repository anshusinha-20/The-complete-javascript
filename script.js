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
