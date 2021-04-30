// time : 41 mins

// algo: sliding window, we need to track last invalid index and have a new array for tracking last
// added value. if val is lower, than interval, it added to counter same value of subarrays, as prev
// one. if value is inside of given interval, it add i - invValid subarrays to count.

// comments: just piece of paper and different simple cases help to clearly undestand algo.

// task: We are given an array A of positive integers, and two positive integers L and R (L <= R).
// Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array
// element in that subarray is at least L and at most R.

var numSubarrayBoundedMax = function(A, L, R) {
  let invInd = -1
  let counter = 0
  let add = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] > R) {
      invInd = i
      add.push(0)
      continue
    } 
    if (A[i] < L) {
      if (i > 0) {
        add.push(add[i-1])
        counter+= add[i-1]
        continue
      }
      else {
        add.push(0)
      }
    }
    else {
      add.push(i - invInd)
      counter+= i - invInd
    }
  }
  return counter
}