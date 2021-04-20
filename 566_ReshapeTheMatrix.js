// time : 29 mins

// algo: first things first, let's check if it is possible to reshape matrix. Don't forget
// (as u did this time) to write index after array's name, not after height :D. 
// After that, let's flat our initital array. create a counter and iterate through
// flatten array, putting values in temp arr, pushing it to final array, when counter = 0,
// and refreshing counter value.

// comments: 5 mins for writing code, 15 for debugging :D

// task : In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into
//  a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c
//  representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same
//  row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; 
// Otherwise, output the original matrix.

var matrixReshape = function(nums, r, c) {
  if ((nums.length * nums[0].length) !== r * c ) {
    return nums
  }
  let flatArr = nums.flat()
  let finArr = []
  let counter = c
  let tempArr = []
  for (let i = 0; i < flatArr.length; i++) {
    counter--
    tempArr.push(flatArr[i])
    if (!counter) {
      finArr.push(tempArr)
      tempArr = []
      counter = c
    }
  }
    return finArr
  }