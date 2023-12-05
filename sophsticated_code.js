/* sophsticated_code.js */

// This JavaScript code is an implementation of the bubble sort algorithm
// The bubble sort algorithm sorts an array of numbers in ascending order

function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  
  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Generate an array of 200 random numbers between 1 and 1000
var numbers = [];
for (var i = 0; i < 200; i++) {
  numbers.push(Math.floor(Math.random() * 1000) + 1);
}

console.log("Unsorted numbers:");
console.log(numbers);

console.log("Sorting using Bubble Sort...");
var sortedNumbers = bubbleSort(numbers);

console.log("Sorted numbers:");
console.log(sortedNumbers);

// Calculate the sum of the sorted numbers
var sum = 0;
for (var i = 0; i < sortedNumbers.length; i++) {
  sum += sortedNumbers[i];
}

console.log("Sum of sorted numbers:", sum);

// Find the average of the sorted numbers
var average = sum / sortedNumbers.length;

console.log("Average of sorted numbers:", average);

// Find the minimum and maximum numbers in the sorted array
var min = sortedNumbers[0];
var max = sortedNumbers[sortedNumbers.length - 1];

console.log("Minimum number in sorted array:", min);
console.log("Maximum number in sorted array:", max);

// Reverse the sorted array
var reversed = sortedNumbers.slice().reverse();

console.log("Reversed array:");
console.log(reversed);

// Check if the array is a palindrome
var isPalindrome = true;
for (var i = 0; i < sortedNumbers.length; i++) {
  if (sortedNumbers[i] !== reversed[i]) {
    isPalindrome = false;
    break;
  }
}

console.log("Is the array a palindrome?", isPalindrome);