// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

const easyTestFalse = [2, 2]; // should be false
const easyTestTrue = [2, -2]; // should be true
const negativeNumberArray = [1, 4, 11, 2, 37, -4]; //should log true because 4 and -4 add to 0.
const zeroNumberArray = [0, 21, 33, 6, 0, -9]; //should log true because 0 and 0 add to 0.
const noAdditionsEqualTwo = [0, 1, 2, 3, 4, 5]; //should log false because no two numbers add to 0.

// const twoNumbersAddToZero = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`The current value of i is: ${i}.`);
//     for (let k = 0; k< array.length; k++) {
//       console.log(`The current value of k is: ${k}.`)
//     }
//     console.log('_____________________________')
//   }
// }
const twoNumbersAddToZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`The current value of i is: ${array[i]}.`);
      for (let k = 1; k < array.length; k++) {
        console.log(`The current value of k is: ${array[k]}.`)
        if (array[i] + array[k] === 0) {
          return true;
        }
      }
    return false;
  };
}

console.log('should be false: ', twoNumbersAddToZero(easyTestFalse));
console.log('should be true: ', twoNumbersAddToZero(easyTestTrue));
console.log('should be true: ', twoNumbersAddToZero(negativeNumberArray));
console.log('should be true: ', twoNumbersAddToZero(zeroNumberArray));
console.log('should be false: ', twoNumbersAddToZero(noAdditionsEqualTwo));