// time : 41 mins

// algo: create functions ,that will iterate through arrays and assign to variables values
//  of the beginning and of the end of interval. We need max of beginnings and min of tails.
// if min of tails >= max of beginnins, push this interval to resulted array. change values
// of interval, which tail is lower.

// comments: was distracted, otherwise would've written solution using less amount of time

// task: You are given two lists of closed intervals, firstList and secondList, where 
//  firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals 
//  is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty
//  or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

var intervalIntersection = function(firstList, secondList) {
  let finalList = []
  let flOp, flCl, slOp, slCl
  let [flIt, slIt] = [-1, -1]
  let flag = true
  let nextIntervalPlsFl = () => {
    flIt++
    if (flIt === firstList.length) {
      flag = false
      return
    }
    flOp = firstList[flIt][0] 
    flCl = firstList[flIt][1] 
  }
  let nextIntervalPlsSl = () => {
    slIt++
    if (slIt === secondList.length) {
      flag = false
      return
    }
    slOp = secondList[slIt][0] 
    slCl = secondList[slIt][1] 
  }
  nextIntervalPlsFl()
  nextIntervalPlsSl()
  while (flag) {
    if (Math.max(flOp, slOp) <= Math.min(flCl, slCl)) finalList.push([Math.max(flOp, slOp), Math.min(flCl, slCl)])
    if (slCl > flCl) {
      nextIntervalPlsFl()
      continue
    }
    if (flCl >= slCl) {
      nextIntervalPlsSl()
      continue
    }
  }
  return finalList
};