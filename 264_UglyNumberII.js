// time : 1h 15 min
// algo: let's define array outside of func for memo, include first ugly numbers there.
// next numbers we can have by multiplying 2, 3, 5 and this consecutive numbers. Problem
// is to put this number in needed order. let's create two more arrays, one for saving
// indexes, other one for queue. from this queue we will pick lowest number. change
// it to 0 at first, to define what was original prime multiplyer and after change
// it with next number, which is not in array of ugly numbers or queue array yet. 

// comments: too much time :(

// task : An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

let queueArray = [0, 0, 0]
let indArray = [4, 3, 2]
let arrMemo = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12]

let countTwo = () => 2 * arrMemo[indArray[0]]

let countThree = () => 3 * arrMemo[indArray[1]]

let countFive = () => 5 * arrMemo[indArray[2]]

let countNext = () => {
  while (!queueArray[0]) {
    let x = countTwo()
    while (arrMemo.indexOf(x) !== -1 || queueArray.indexOf(x) > 0) {
      indArray[0]++
      x = countTwo()
    }
    queueArray[0] = x
  }
  while (!queueArray[1]) {
    let x = countThree()
    while (arrMemo.indexOf(x) !== -1 || queueArray.indexOf(x) > 0) {
      indArray[1]++
      x = countThree()
    }
    queueArray[1] = x
  }
  while (!queueArray[2]) {
    let x = countFive()
    while (arrMemo.indexOf(x) !== -1 || queueArray.indexOf(x) > 0) {
      indArray[2]++
      x = countFive()
    }
    queueArray[2] = x
  }
} 

let pickLowest = () => {
  let lowest = Math.min(...queueArray)
  arrMemo.push(lowest)
  queueArray = queueArray.map((a) => {
    if (a === lowest) return 0
    return a
  })
}




var nthUglyNumber = function(n) {
    while (arrMemo.length < n) {
        countNext()
        pickLowest()
    }
    return arrMemo[n - 1]
};