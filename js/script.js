
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

// Can we divide it?

// function isDivideBy(number, a, b) {
//   if ( number % a == 0 && number % b == 0) {
//     return true;
//   }
//   return false;
// }
// console.log(isDivideBy(4,2,3));

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// function countDevelopers(list) {
//   var x = 0;
//   for (let i=0; i<list.length; i++){
//     if ( list[i]['continent'] == 'Europe' && list[i]['language'] == 'JavaScript'){
//       x += 1;
//     }
//   }
//   return x;
// }

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// function lastSurvivor(letters, coords) {
//   if (typeof letters === 'string'){
//       var x = letters.split('');;
//       for ( let i = 0; i < letters.length - 1; i++){
//         x.splice(coords[i], 1);
//       }
//     letters = x.join('');
//     console.log(letters);

//     } else {
//       for ( let i = 0; i < letters.length - 1; i++){
//       letters.splice(coords[i], 1);
//       }
//     }

//   return letters
// }


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   var arr = numbers.split(' ');
//   var maxMin = [];
//   maxMin.push(Math.max(...arr));
//   maxMin.push(Math.min(...arr));
//   return maxMin.join(' ');
// }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// function getMiddle(s)
// {
//   if ( s.length % 2 == 0) {
//     return s[(s.length / 2) - 1] + s[s.length / 2];
//   } else {
//     return s[Math.floor(s.length / 2)];
//   }
// }

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//   let arr = s.split(' ');
//   let num = [];
//   for (var i = 0; i < arr.length; i++) {
//     num.push(arr[i].length);
//   }
//   return Math.min(...num);
// }

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// function XO(str) {
//   let x = 0;
//   let o = 0;
//   for (var i = 0; i < str.length; i++) {
//     if ( str[i] == 'x' || str[i] == 'X') {
//       x++;
//     } else if ( str[i] == 'o' || str[i] == 'O') {
//       o++;
//     }
//   }
//   return ( x == o ) ?  true :  false
// }

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

// function vowelIndices(word){
//   var arr = [];
//   for (var i = 0; i < word.length; i++) {
//     if ( word[i] == 'a' || word[i] == 'A' || word[i] == 'e' || word[i] == 'E' || word[i] == 'i' || word[i] == 'I' || word[i] == 'o' || word[i] == 'O' || word[i] == 'u' || word[i] == 'U' || word[i] == 'y' || word[i] == 'Y') {
//       arr.push(i + 1);
//     }
//   }
//   return arr;
// }

// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0

// function evenLast(numbers) {
//   if ( numbers.length > 0) {
//     var x = 0;

//     for (var i = 0; i < numbers.length; i++) {
//       if ( i == 0) {
//         x += numbers[i];
//       } else if ( i % 2 == 0) {
//         x += numbers[i];
//       }
//     }
//     x *= numbers[numbers.length-1];
//     return x;
//   } else {
//     return 0;
//   }
// }

// This Kata is intended as a small challenge for my students
// All Star Code Challenge #1
// Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG
// function NBAplayer(name, team, ppg){
//     this.name=name;
//     this.team=team;
//     this.ppg=ppg;
//   }
//   var iverson = new NBAplayer("Iverson", "76ers", 11.2);
//   var jordan = new NBAplayer("Jordan", "bulls", 20.2);
// function sumPPG(playerOne, playerTwo){
//     return playerOne.ppg + playerTwo.ppg
// }

// Complete the solution so that the function will break up camel casing, using a space between words.

// function solution(string) {
//     string = string.split('');
//     for (let i = 0; i < string.length; i++) {
//         if ( string[i] == string[i].toUpperCase()) {
//             string[i] = ' ' + string[i];
//         }
//     }
//     string = string.join('');
//  return string
// }

// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// function twistedSum(n) {
//     var sum = 0;
//     var doubleNum = 0;
//     for (let i = 0; i <= n; i++) {
//         if ( i < 10 ) {
//             sum += i;
//         } else {
//             i += '';
//             for (let j = 0; j < i.length; j++) {
//                 doubleNum += parseInt(i[j]);
//             }

//         }
//     }
//     return sum + doubleNum
// }

// convert decimal number to toBinary
// function toBinary(n){
//     bin = "";
//     if ( n == 0){
//         return 0
//     }
// 	while( n !=0 ) {
// 		rest = n % 2 ;
// 		n = ( n - rest ) / 2;
// 		bin = rest + bin;
// 	}
// 	return bin;
//   }

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string

// function addBinary(a,b) {
//     var sum = a + b;
//     bin = "";
//       if ( sum == 0){
//           return 0
//       }
//     while( sum !=0 ) {
//       rest = sum % 2 ;
//       sum = ( sum - rest ) / 2;
//       bin = rest + bin;
//     }
//     return bin;
//   }

// Write a function that reverses the bits in an integer.
// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
// You can assume that the number is not negative.
// function reverseBits (n) {
//     let bin = "";
//     let binRev = [];
//         if ( n == 0){
//             return 0
//         }
//         while( n !=0 ) {
//             rest = n % 2 ;
//             n = ( n - rest ) / 2;
//             bin = rest + bin;
//         }
//         bin = bin.split('');
//
//     for (let i = 0; i < bin.length; i++) {
//         binRev.unshift(bin[i]);
//     }
//     let result = 0;
//     let j = 0;
//     for (let i = binRev.length - 1; i >= 0 ; i--) {
//       if ( binRev[i] == 1 ) {
//         result += Math.pow(2,j);
//       }
//       j++;
//     }
//     return result
// }

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     if ( sum % 2 == 0) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
//  }

// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

// function digPow(n, p){
//     num = n.toString();
//     let numbers = num.split('');
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += Math.pow(numbers[i], p + i);
//     }
//     let y = Math.pow(n, p);
//     if( sum === y){
//     return p;
//     } else if( sum % n === 0) {
//     return sum / n;
//     }else {
//     return -1
//      }
// }


// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// function validate(password) {
//     return /(^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$)/.test(password);
//   }


// Two Joggers
// 
var nbrOfLaps = function (x, y) {  
    var array = [], 
        Bob = x, 
        Charles = y;  
    while (Bob !== Charles) {  
      
      (Bob > Charles)? Charles += y : Bob += x;
      
    }  
    array.push(Bob/x); 
    
    array.push(Charles/y); 
    
    return array;  
  }
