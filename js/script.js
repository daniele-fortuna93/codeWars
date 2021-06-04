
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// String.prototype.toJadenCase = function () {
//   var result = this;
//   const newArray = this.split(' ').map((item) => item[0].toUpperCase() + item.substring(1)).join(' ');
//   return this;
// };
// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// function between(a, b) {
//   const newArray = [];
//   for (let i = a; i <= b; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }


// console.log(between(-4, 5));


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperwork(n, m) {
//   let risultato = 0;
//   if ( n < 0 || m < 0){
//     return risultato;
//   } else {
//     risultato = n * m;
//     return risultato;
//     }
// }
//   console.log(paperwork(-3,5));


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// function fakeBin(x){
//   let y = '';
//   for (var i = 0; i < x.length; i++) {
//     if ( x[i] < 5 ) {
//       y += 0;
//     } else {
//       y += 1;
//     }
//   }
//   return y;
// }


// Write a function to split a string and convert it into an array of words. For example:

// function stringToArray(string){
//   return string.split(' ');
// }

// console.log(stringToArray("I love arrays they are my favorite"));


// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.


// function smallEnough(a, limit){
//   let result = true;
//   a.forEach((item) => {
//     if ( item > limit) {
//       return result = false;
//     }
//   });
//   return result;
// }

// x = smallEnough([100,200,300,400], 500);
// console.log(x);


// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


// function oneZero ( array ){
//   let x = 0;
//   let j = 0;
//   for (let i = array.length - 1; i >= 0 ; i--) {
//     if ( array[i] == 1 ) {
//       x += Math.pow(2,j);
//     }
//     j++;
//   }
//   return x;
// }
// a = [1, 0, 1, 1];
// console.log(myName(a));


// Given an array of integers your solution should find the smallest integer.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let x = [args[0]];
//     args.forEach((item) => {
//       if ( item < x ) {
//         x.pop();
//         x.push(item);
//       }
//     });
//     return x[0];
//   }
// }


// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).


// function rentalCarCost(d) {
//   let price = d * 40;
//   if ( d >= 3 && d < 7) {
//     price -= 20;
//   } else if ( d >= 7 ) {
//     price -= 50;
//   }
//   return price;
// }

// console.log(rentalCarCost(6));

Can we divide it?

function isDivideBy(number, a, b) {
  if ( number % a == 0 && number % b == 0) {
    return true;
  }
  return false;
}
console.log(isDivideBy(4,2,3));

Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  var x = 0;
  for (let i=0; i<list.length; i++){
    if ( list[i]['continent'] == 'Europe' && list[i]['language'] == 'JavaScript'){
      x += 1;
    }
  }
  return x;
}

