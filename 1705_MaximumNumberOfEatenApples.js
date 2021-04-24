// time : 3h 25 mins
// algo: create timeline array, indexes as days, apples quantity as values.
//  iterate through apples and days, put quantity of apples on their expiration 
//  date. we need pointer, to substract 1 apple from the closest date to current.
//  if substraction is available, increment counter. Intital iteration 
//  should be to the last expiration dating, including.
// comments: came up with decision by myself, but timeout. didn't use pointer, found
//  this idea in solutions. also, second way is using priority queue, i am not 
//  familliar with that data structure, need to learn it.

// task : There is a special kind of apple tree that grows apples every day for n days.
//  On the ith day, the tree grows apples[i] apples that will rot after days[i] days, 
//  that is on day i + days[i] the apples will be rotten and cannot be eaten. On some 
//  days, the apple tree does not grow any apples, which are denoted by apples[i] == 0 
//  and days[i] == 0.

// You decided to eat at most one apple a day (to keep the doctors away). Note that you 
// can keep eating after the first n days.

// Given two integer arrays days and apples of length n, return the maximum number of 
// apples you can eat.


let eatenApples = (apples, days) => {  
  let arr = new Array(40001)
  let counter = 0
  let len = apples.length
  let pointer = Infinity
  for (let i = 0; i<len; i++) {
    if (pointer < i) pointer = i
    if (apples[i]) {
      let lastDate = i + days[i] - 1
      if (lastDate >= len) len = lastDate + 1 
      arr[lastDate] = arr[lastDate] ? arr[lastDate] + apples[i] : apples[i]
      if (lastDate < pointer) pointer = lastDate
      }
    if (arr[pointer]) {
      counter++
      arr[pointer]--
      continue
    }
    while (!arr[pointer] && pointer < len) {
      pointer++
    }
    if (arr[pointer]) {
      counter++
      arr[pointer]--
    }
    
}
return counter
}