// time : ~8h

// algo: first, write a function for checking, if this value is okay with our conditions. further, just try every value, and recurse, until get an
//  answer

// comments: i tried to optimize algo, but failed several times, rewrote code each time, didn't get the problem still, decided to use brute force

// task : Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.



var solveSudoku = function(board) {
  let isAvailable = (map, i, j, val) => {
    for (let k = 0; k < 9; k++) {
      if (map[i][k] === val) return false
    }
    for (let l = 0; l < 9; l++) {
      if (map[l][j] === val) return false
    }
    let o = Math.trunc(i/3)
    let p = Math.trunc(j/3)
    for (let d = o*3; d < o*3+3; d++) {
      for (let f = p*3; f < p*3+3; f++) {
        if (map[d][f] === val) return false
      }
    }
    return true
  }

  let bruteForce = (map) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (map[i][j] != '.') continue
        for (let z = 1; z < 10; z++) {
          z = z.toString(10)
          if (isAvailable(map, i, j, z)) {
            map[i][j] = z
            if (bruteForce(map)) return true
          }
         }
         map[i][j] = '.'
         return false;
       }
     }
     return true
   }

   bruteForce(board)
   return board
   
};