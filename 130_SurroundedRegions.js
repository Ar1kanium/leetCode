// time : 30 mins

// algo: point all regions, using recursive function and counter, to distinguish different regions.
//  create a set and put there counter, if border and value is not 'X'. now we have a set with 
// numbers of regions on border. change all numbers that are in set to 'O', others to 'X'.

// comments: it was easy for me, since i used similar approach during Yandex test.

// task: Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

var solve = function(board) {
  let counter = 1
  let excl = new Set()
  let pointFunction = (i, j) => {
    if (board[i] && board[i][j] && board[i][j] === 'O') {
      board[i][j] = counter
      pointFunction(i+1, j)
      pointFunction(i, j-1)
      pointFunction(i-1, j)
      pointFunction(i, j+1)
    }
  }
  for (let i = 0; i<board.length; i++) {
    for (let j = 0; j<board[i].length; j++) {
      if (board[i][j] === 'O') {
        pointFunction(i,j)
        counter++
      }
      if (board[i][j] !== 'X' && (i === 0 || j === 0 || i === board.length - 1 || j === board[i].length - 1)) {
        excl.add(board[i][j])
      }
    }
  }
  for (let i = 0; i<board.length; i++) {
    for (let j = 0; j<board[i].length; j++) {
      if (board[i][j] !== 'X'){
        if (excl.has(board[i][j])) board[i][j] = 'O'
        else board[i][j] = 'X'
      }
    }
  }
  return board
};