// time : BiweeklyContest

// algo: just use linked lists for data, main difficulty is to implement it properly

// comments: 

// task: Design a system that manages the reservation state of n seats that are numbered from 1 to n.
// Implement the SeatManager class:
// SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n.
// All seats are initially available.
// int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
// void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.





let Node = function(val, next = null) {
  this.val = val
  this.next = next
}  


var SeatManager = function(n) {
  let counter = 0
  let createNode= (n) => {
    counter++
    return n ? new Node(counter, createNode(n-1)) : null
  }
  this.seats = createNode(n)
};


SeatManager.prototype.reserve = function() {
  let a = this.seats.val
  this.seats = this.seats.next
  return a
};


SeatManager.prototype.unreserve = function(seatNumber) {
  if (!this.seats) this.seats = new Node(seatNumber) 
  if (this.seats.val > seatNumber) {
    this.seats = new Node(seatNumber, this.seats)
  }
  else {
    let a = this.seats
    let b = a
    while (a && a.val < seatNumber && a.next) {
      b = a
      a = a.next
    }
    b.next = new Node(seatNumber, a)
  }
};

