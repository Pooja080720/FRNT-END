// first question--

let num1 = 21;
let num2 = 45;

// let num1 = 34;
// let num2 = 18;

// let num1 = 41;
// let num2 = 41;

if(num1 > num2){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num1){
    console.log(`${num2} the largest number`)
  }
  else{
    console.log(`${num1} is equal to ${num2}`)
  }

// second question--

let num = [56,23,12,99];

if(num % 2 == 0){
    console.log(`${num} is a Even number`)
  }
  else{
    console.log(`${num} is a Odd number`)
  }

// third question--

let num1 = 21;
let num2 = 45;
let num3 = 13;

// let num1 = 34;
// let num2 = 18;
// let num3 = 52;

// let num1 = 41;
// let num2 = 41;
// let num3 = 11;

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num3){
    console.log(`${num2} is the largest number`)
  }
  else{
    console.log(`${num3} is the largest number`)
  }

// fourth question--

let side1 = 12;
let side2 = 20;
let side3 = 5;

// let side1 = 12;
// let side 2= 20;
// let side 3 = 4;

// let side1 = 12;
// let side 2= 31;
// let side 3 = 3;

if((side1 == side2) && (side1 == side3)){
    console.log(`Equilateral triangle.`)
  }
  else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log(`Isosceles triangle.`)
  }
  else{
    console.log(`Scalene triangle.`)
  }

// fifth question--

let num = 15;
let start = 11;
let end = 30;

// let num = 20;
// let start = 34;
// let end = 51;

if(num >= start && num <= end){
    console.log(`${num} is between the range ${start} and ${end}`)
  }
  else{
    console.log(`${num} is outside the range ${start} and ${end}`)    
  }

// sixth question--

let Years = [2020, 2021, 1992, 1994, 1996, 2010, 2011]

function checkLeapYear(year) {

    if (0 == year % 4) {
        console.log(year + " " +' is a leap year');
    } else {
        console.log(year + " " + ' is not a leap year');
    }
}

let year=2000;
checkLeapYear();

// seventh question--

function printGrade(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
      console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
      console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
      console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
      console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
      console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
      console.log("Student has failed");
    } else {
      console.log("Invalid marks");
    }
  }
  
  // Examples:
  printGrade(91); // Output: S grade
  printGrade(85); // Output: A grade
  printGrade(73); // Output: B grade
  printGrade(87); // Output: A grade
  printGrade(61); // Output: C grade
  printGrade(56); // Output: D grade
  printGrade(34); // Output: Student has failed
  printGrade(99); // Output: S grade
  printGrade(77); // Output: B grade
  


// last question--

function getDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      return "Invalid month";
    } else if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "29 days";
      } else {
        return "28 days";
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      return "30 days";
    } else {
      return "31 days";
    }
  }
  
  // Examples:
  console.log(getDaysInMonth(2, 2012)); // Output: 29 days
  console.log(getDaysInMonth(2, 2013)); // Output: 28 days
  console.log(getDaysInMonth(4, 2012)); // Output: 30 days
  console.log(getDaysInMonth(10, 2013)); // Output: 31 days
  console.log(getDaysInMonth(13, 2023)); // Output: Invalid month
  