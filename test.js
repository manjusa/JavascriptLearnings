// This is a sample JavaScript file with various functions and classes

const TESTVAL = "Sample";
// Function to calculate the sum of an array
function calculateSum(arr) {
  console.log("arr", { arr });
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to sort an array in ascending order
function sortArray(arr) {
  console.log("arr", { arr });
  return arr.sort((a, b) => a - b);
}

// Class to represent a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Function to calculate the factorial of a number
function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Class to represent a Bank Account
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`
    );
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrew $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`
      );
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}.`);
    }
  }
}

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

// Class to represent a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display the car's details
  displayDetails() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Class to represent a Student
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  // Method to display the student's details
  displayDetails() {
    console.log(`Name: ${this.name}, Grade: ${this.grade}`);
  }
}

// Function to calculate the average of an array
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Function to check if a number is even
function isEven(n) {
  console.log(n);
  return n % 2 === 0;
}
array.forEach((currentItem) => {});

// Class to represent a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Method to display the book's details
  displayDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}
calculateSum([3, 2]);
