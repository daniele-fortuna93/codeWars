
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

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  const newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}


console.log(between(-4, 5));

