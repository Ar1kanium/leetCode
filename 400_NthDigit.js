// time : 46 mins

// algo: 3 steps: find an interval, to know, how much digits in number, that contains digit,that we need, afterwards find exact
// number, that contains our digit, and find index of our digit in this number.

// comments: couldn't guess how to start solving this problem, look at beginning of solution of a guy, got the idea, implement
// it by myself. Pretty interesting task, some digging and math required.

// task: Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

var findNthDigit = function(n) {
  let arrOfIntervals = []
  let counter = 1
  while (9 * counter * (10 ** (counter - 1)) < 2 ** 31 - 1) {
    arrOfIntervals.push(9 * counter * (10 ** (counter - 1)))
    counter++
  }
  counter = 0
  while (n > arrOfIntervals[counter]) {
    n-= arrOfIntervals[counter]
    counter++
  } 
  let amountOfDigits = counter + 1
  // 1,2,3,4,5,6,7,8,9,1,0,1,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,2,0
  let indexOfVal = Math.ceil(n/amountOfDigits) 
  let valContainedDigit = indexOfVal - 1 + 10 ** (amountOfDigits - 1)
  let indexInVal = (n - 1) % amountOfDigits
  return amountOfDigits === 1 ? n : +(valContainedDigit.toString(10).split('')[indexInVal])
};