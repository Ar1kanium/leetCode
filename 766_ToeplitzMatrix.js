// time : 18 mins

// algo: create a function, which will recursively check values in the diag and return
// true if all values are equal and next value is out of range of matrix, otherwise
// return false. now we just need to iterate through every matrix diag, except top right 
// and bot left (btw we can check them as well, it will return true)

// comments: 

// task : Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

var isToeplitzMatrix = function(matrix) {
    let checkDiag = (i, j) => {
      if (i + 1 >= matrix.length || j + 1 >= matrix[0].length) {
        return true
      }
      if (matrix[i][j] === matrix[i+1][j+1]) {
        return checkDiag(i+1, j+1) 
      }
      return false
    }
    let i = matrix.length - 2
    let j = matrix[0].length - 2
    while (i >= 0) {
      if (!checkDiag(i, 0)) return false
      i--
    }
    while (j >= 0) {
      if (!checkDiag(0, j)) return false
      j--
    }
    return true

};