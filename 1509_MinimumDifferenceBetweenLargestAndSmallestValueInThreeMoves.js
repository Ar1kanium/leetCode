// time : 18 mins

// algo: we need to find 4 max values and 4 min values in nums array, result is min 
// (maxVal4 - minVal1, maxVal3 - minVal2, maxVal2 - minVal3, maxVal1 - minVal4)

// comments: pretty straightforward solution, nothing special.

// task : Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.
// Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.


var minDifference = function(nums) {
  if (nums.length < 5) return 0
  let checkArr = [...nums]
  let maxVal1 = Math.max(...checkArr)
  let maxInd = checkArr.indexOf(maxVal1)
  checkArr.splice(maxInd, 1)
  let maxVal2 = Math.max(...checkArr)
  maxInd = checkArr.indexOf(maxVal2)
  checkArr.splice(maxInd, 1)
  let maxVal3 = Math.max(...checkArr)
  maxInd = checkArr.indexOf(maxVal3)
  checkArr.splice(maxInd, 1)
  let maxVal4 = Math.max(...checkArr)

  let minVal1 = Math.min(...nums)
  let minInd = nums.indexOf(minVal1)
  nums.splice(minInd, 1)
  let minVal2 = Math.min(...nums)
  minInd = nums.indexOf(minVal2)
  nums.splice(minInd, 1)
  let minVal3 = Math.min(...nums)
  minInd = nums.indexOf(minVal3)
  nums.splice(minInd, 1)
  let minVal4 = Math.min(...nums)
  return Math.min(maxVal4 - minVal1, maxVal3 - minVal2, maxVal2 - minVal3, maxVal1 - minVal4)
};