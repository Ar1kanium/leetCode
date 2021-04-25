// time : 51 mins

// algo: going from end to beginning of number, find first digit, that is smaller, than a digit before(i)
//  that (i) will separate number in two intervals, we don't need to touch first part from the beginning to 
//  (i) excl, second part will be from (i) incl to the end. now iterate back to the end and find the lowest 
//  digit, that is greater than i (j). take this digit from second part. sort this part in ascending order.
//  answer is firstPart, j, secondPart

// comments: i did that task on CodeWars, took me about 6 hours, that was in the beginning of my coding
// i forgot algo a little, that's why so much time again(lesser, but still much)

// task: Given a positive integer n, find the smallest integer which has exactly the same digits existing 
// in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not
//  fit in 32-bit integer, return -1.

var nextGreaterElement = function(n) {
  n = n.toString(10).split('').map((i) => +i)
  if (n.length === 2) {
    return n[0] >= n[1] ? -1 : n[1] * 10 + n[0]
  }
  for (let i = n.length - 2; i>=0; i--) {
    if (n[i] < n[i+1]) {
      let firstPart = n.slice(0, i)
      let lowestCount = Infinity
      for (let j = i+1; j<n.length; j++) {
        if (n[j] > n[i] && (lowestCount === Infinity || n[lowestCount] > n[j])) lowestCount = j
      }
      nextLowestVal = n[lowestCount]
      n.splice(lowestCount, 1)
      let secondPart = n.slice(i).sort((a,b) => a-b)
      let answ = +([...firstPart, nextLowestVal, ...secondPart].join(''))
      return answ <= 2147483647 ? answ : -1
    }
  }
  return -1
};