// time : ~8 hrs
// algo: first, we need to have an array, which will have sum(0, i) instead of i. let's iterate
// our left border and find first and last right border possibility, using binary search,
// for every iteration. Continue, if we can't make it with right boarder, break, if we 
// cant make it with left.
// comments: that was insane, i rewrote this 3 times, because i wrote break instead of continue

// task : A split of an integer array is good if:

// The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
// The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements 
// in mid is less than or equal to the sum of the elements in right.
// Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, 
// return it modulo 109 + 7.
var waysToSplit = function(nums) {
  
  let result = 0
  let len = nums.length
  let arraySum = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
    arraySum.push(nums[i] + arraySum[i-1])
  }
  let totalSum = arraySum[arraySum.length - 1]

  for (let leftBorder = 0; leftBorder < len - 2; leftBorder++) {
    let sumLeft = arraySum[leftBorder]
    if (sumLeft * 3 > totalSum) break;
    let indLeft = leftBorder
    let indRight = len - 1
    while (indRight !== indLeft + 1) {
      let counter = Math.round((indRight + indLeft) / 2)
      if (arraySum[counter] < sumLeft * 2) {
        indLeft = counter
      }
      else {
        indRight = counter
      }
    }
    if ((arraySum[indRight] - sumLeft) * 2 > totalSum - sumLeft) continue;
    let firstRightBorder = indRight
    indLeft = indRight
    indRight = len - 1
    while (indRight !== indLeft + 1) {
      let counter = Math.round((indRight + indLeft) / 2)
      if ((arraySum[counter] - sumLeft) * 2 <= totalSum - sumLeft) {
        indLeft = counter
      }
      else {
        indRight = counter
      }
    }
    result += 1 + indLeft - firstRightBorder

  }

  return result % (1000000007)

};