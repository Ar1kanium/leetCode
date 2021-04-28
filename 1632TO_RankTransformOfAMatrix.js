// time : 1h 46 mins

// algo: timed out, no need to describe

// comments: tests 37/39, program works correctly, but too slow... need to learn union data structure.

// task : Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of matrix[row][col].

// The rank is an integer that represents how large an element is compared to other elements. It is calculated
// using the following rules:
// The rank is an integer starting from 1.
// If two elements p and q are in the same row or column, then:
// If p < q then rank(p) < rank(q)
// If p == q then rank(p) == rank(q)
// If p > q then rank(p) > rank(q)
// The rank should be as small as possible.
// It is guaranteed that answer is unique under the given rules.


var matrixRankTransform = function(matrix) {
  let flat = [...matrix].flat()
  let sort = [...flat].sort((a,b) => a-b)
  let rows = matrix.length 
  let cols = matrix[0].length 
  for (let i = 0; i < rows; i++) {
    matrix[i] = matrix[i].map((el) => 0)
   }

  let findNextVal = (row, col) => {
    let counter = Math.max(...matrix[row])
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[i][col] > counter) counter = matrix[i][col]
    }
    return counter + 1
  }

  for (let i = 0; i < sort.length; i++){
    if (i+1 < sort.length && sort[i] === sort[i+1]) {
      let arrOfRows = []
      let arrOfCols = []
      let arrOfVals = []
      while (i+1 < sort.length && sort[i] === sort[i+1]) {
        let ind = flat.indexOf(sort[i])
        let row = Math.trunc(ind/cols)
        let col = ind - row * cols
        arrOfRows.push(row)
        arrOfCols.push(col)
        arrOfVals.push(findNextVal(row, col))
        flat[ind] = null
        sort.splice(i, 1)
      }
      let ind = flat.indexOf(sort[i])
      let row = Math.trunc(ind/cols)
      let col = ind - row * cols
      arrOfRows.push(row)
      arrOfCols.push(col)
      arrOfVals.push(findNextVal(row, col))
      let flag = true
      while (flag) {
        flag = false
        for (let j = 0; j < arrOfVals.length - 1; j++) {
          for (let z = j+1; z < arrOfVals.length; z++) {
            if (arrOfCols[j] === arrOfCols[z] || arrOfRows [j] === arrOfRows[z]) {
              if (arrOfVals[j] !== arrOfVals[z]) {
                flag = true
                if (arrOfVals[j] < arrOfVals[z]) {
                  arrOfVals[j] = arrOfVals[z]
                }
                else arrOfVals[z] = arrOfVals[j]
              }
            }
          }
        }
      }
      for (let j = 0; j < arrOfVals.length; j++) {
        matrix[arrOfRows[j]][arrOfCols[j]] = arrOfVals[j]
      }
  }
    else {
      let ind = flat.indexOf(sort[i])
      let row = Math.trunc(ind/cols)
      let col = ind - row * cols
      matrix[row][col] = findNextVal(row, col)
    }
  }

   return matrix
};