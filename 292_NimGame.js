// time : 36 secs

// algo: u need to pick last stone, so u need to make ur opponent to pick, when there are 4 stones. 
// if he picked 3, u pick 1, if 2, then u 2, if he pick 1, u pick 3, and so on. so, if n % 4 === 0
// u lost, otherwise u win

// comments: played that game in my childhood, knew exact algo.

// task : You are playing the following Nim Game with your friend:
// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your
// friend play optimally, otherwise return false.

var canWinNim = function(n) {
    return n % 4 === 0 ? false: true
};