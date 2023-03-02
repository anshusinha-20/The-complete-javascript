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
