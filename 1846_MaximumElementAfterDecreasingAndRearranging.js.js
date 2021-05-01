// time : BiweeklyContest

// algo: sort given array in ascending order, then iterate through it. obv, if we don't need to decrease any value,
// max value = arr.length. so, if value is lower that ind + 1 + counter, it means, that we will have at least 2 
// repetitions, let's increment counter, cause next val must be bigger than prev one still. return arr.length - counter

// comments: proud of myself for that one, solution came fast enough. not as fast, as guys, that completed all tasks in 11 mins lol

// task: You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it
// satisfies these conditions:
// The value of the first element in arr must be 1.
// The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, 
// abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.
// There are 2 types of operations that you can perform any number of times:
// Decrease the value of any element of arr to a smaller positive integer.
// Rearrange the elements of arr to be in any order.
// Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.


var maximumElementAfterDecrementingAndRearranging = function(arr) {
  let myArr = arr.sort((a,b) => a-b)
  let counter = 0
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] < i - counter + 1) {
      counter++
    }
  }
  return myArr.length - counter
};