// time : 22 mins

// algo: if '.', check, if there are available numbers, if digit, check, if there are no repeat values. i wrote two 
// different functions for these tasks, then iterate through our board and checked all values 

// comments: was not hard, cause i already have wrote sudoku solver, i know, can improve algo, but if u start shitcoding, it is 
// pretty hard to stop:D

// task: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules. 

var isValidSudoku = function(board) {
  let checkNumber = (i, j) => {
    for (let z = 0; z < board[i].length; z++) {
      if (z === j) continue
      if (board[i][z] === board[i][j]) return false
    }
    for (let z = 0 ; z < board.length; z++) {
      if (z === i) continue
      if (board[z][j] === board[i][j]) return false
    }
    let y = Math.trunc(i/3)
    let x = Math.trunc(j/3)
    for (let z = y * 3; z < y * 3 + 3; z++) {
      for (let k = x * 3; k < x * 3 + 3; k++) {
        if (z === i && k === j) continue
        if (board[z][k] === board[i][j]) return false
      }
    }
    return true
  }
  let numberAvailable = (i, j) => {
    let avail = '0123456789'
    for (let z = 0; z < board[i].length; z++) {
      if (board[i][z] != '.') avail = avail.replace(board[i][z], '')
    }
    for (let z = 0 ; z < board.length; z++) {
      if (board[z][j] != '.') avail = avail.replace(board[z][j], '')
  }
    let y = Math.trunc(i/3)
    let x = Math.trunc(j/3)
    for (let z = y * 3; z < y * 3 + 3; z++) {
      for (let k = x * 3; k < x * 3 + 3; k++) {
        if (board[z][k] != '.') avail = avail.replace(board[z][k], '')
        }
     }
    return avail.length > 0 ? true : false
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.' && numberAvailable(i,j) || (board[i][j] != '.' && checkNumber(i,j))) continue
      return false
    }
  }
return true
};