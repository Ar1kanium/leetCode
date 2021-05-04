// time : 20 mins

// algo: iterate through the initial array, find place, where i+1 < i. create two arrays, almost the same, as initial, but exclude
// i from the first one, and i+1 from the second one. check, if all elements of these arrays are in decreasing order, if false in both
// cases, return false, otherwise return true

// comments: there is a hard way, to look at all possibilities of elements in neighborhood, but i'm sure and glad i found this way, it seems
// to me that it is much more easier and error possibility is small, comparing to difficult one

// task : Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

var checkPossibility = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      let a = [...nums.slice(0, i - 1), ...nums.slice(i)]
      let b = [...nums.slice(0, i), ...nums.slice(i+1)]
      let [flagA, flagB] = [true, true]
      for (let j = 1; j<a.length; j++) {
        if (a[j] < a[j-1]) flagA = false
        if (b[j] < b[j-1]) flagB = false
        if (!flagA && !flagB) return false
      }
      return true
    }
  }
  return true
}; 