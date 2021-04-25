// time : 45 mins

// algo: create an array and push their all values of linked list. in getRandom method,
//  return arr[random * arr.length value]

// comments: need to have more tasks with objects, still weak here

// task: Given a singly linked list, return a random node's value from the linked list. 
// Each node must have the same probability of being chosen


var Solution = function(head) {
  this.arr = []
  while (head.next) {
    this.arr.push(head.val)
    head = head.next
  }
  this.arr.push(head.val)
};

Solution.prototype.getRandom = function() {
 return this.arr[Math.floor(Math.random() * this.arr.length)]
};
