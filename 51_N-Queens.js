// time : 10 mins

// algo: create an array, which will represent chessboard. create a function to check, if it is possible to put
// queen on current square. let's recursively n times go through our chessboard and brute force all possibilities. 

// comments: adoptation of my 8-queens problem solution. 


// task : The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each
// other.
// Given an integer n, return all distinct solutions to the n-queens puzzle.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a
// queen and an empty space, respectively.





const solveNQueens = (n) => {
  let chessboard = new Array(n)
  for (let i = 0; i < n; i++) {
      chessboard[i] = new Array(n).fill('.')
  }

  let answer = []

  const isPossibleSquare = (i, j) => {
      if (chessboard[i].indexOf('Q') !== -1) return false
      for (let z = 0; z < n; z++) {
          let diff = Math.abs(z - i)
          if (!diff) continue
          if (chessboard[z][j] === 'Q') return false
          if (j + diff < n && chessboard[z][j+diff] === 'Q') return false
          if (j - diff >= 0 && chessboard[z][j-diff] === 'Q') return false
      }
      return true
  }

  const putQueen = (i, j) => {
      chessboard[i][j] = 'Q'
  }

  const takeQueen = (i, j) => {
      chessboard[i][j] = '.'
  }

  const bruteForce = (counter) => {
      for (let j = 0; j < n; j++) {
          if (isPossibleSquare(counter, j)) {
              putQueen(counter, j)
              if (counter === n - 1) {
                  answer.push([...chessboard.map((el) => el.join(''))])
                  takeQueen(counter, j)
                  continue
              }
              bruteForce(counter+1)
              takeQueen(counter, j)
          }
      }
  }

  bruteForce(0)
  return answer
}