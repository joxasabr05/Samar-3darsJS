"use strict";
let number = 5.6; //Data Type = Number
console.log(8 / 0); //Infinity
console.log(-8 / 0); //-Infinity
console.log("Samar" * 10); // NaN

// String
const clientName = `Jaxongir`;
console.log(clientName);
// Boolean
const isMerried = false; // false = yoq | notog'ri
const isCirlcleEarth = true; // true = xa | tog'ri

//console.log(clientAge); // null

//undefined
let age;
console.log(age);

// Object
const thief = {
  // key: value;
  age: 40, // number
  jacket: "black", // string
  isLong: false, // boolean
};
console.log(thief);
// console.log(thief["age"]); no recoment

// array

//                0        1        2      3   4   5
const colors = ["red", "black", "yellow", 10, [], {}];
console.log(colors[4]);
console.log(colors);
