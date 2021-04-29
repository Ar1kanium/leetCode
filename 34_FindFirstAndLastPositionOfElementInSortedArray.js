// time : 23 mins

// algo: binary search twice, carefull with open and close interval!

// comments: 

// task: Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?


var searchRange = function(nums, target) {
  let answ = []
  if (nums.length < 5) {
    let i = 0
    let flag = false
    while (i< nums.length && flag !== null) {
      if (nums[i] === target && flag === false) {
        answ.push(i)
        flag = true
        continue
      }
      if (nums[i] !== target && flag === true) {
        answ.push(i - 1)
        flag = null
      }
      i++
    }
    if (flag === true) {
      answ.push(nums.length - 1)
      return answ
    }
    if (flag !== null) return [-1, -1]
    return answ
  }
  let floor = 0
  let ceil = nums.length
  while (floor + 1 != ceil) {
    let counter = Math.round((floor + ceil)/2)
    if (nums[counter] <= target) floor = counter
    else ceil = counter
  }
  if (nums[floor] != target) return [-1, -1]
  answ.push(floor)
  ceil = floor
  floor = -1
  while (floor + 1 != ceil) {
    let counter = Math.round((floor + ceil)/2)
    if (nums[counter] < target) floor = counter
    else ceil = counter
  }
  answ.unshift(ceil)
  return answ
};