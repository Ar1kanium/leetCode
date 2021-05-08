// time : 4 mins 

// algo: recursive function, which return new linked list with least value in val and same func
// with next args in next.

// comments: 

// task : Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.


var mergeTwoLists = function(l1, l2) {
  function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  let merge = (l1, l2) => {
    if (!l1 && !l2) return null
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val > l2.val) return new Node(l2.val, merge(l1, l2.next))
    else return new Node(l1.val, merge(l1.next, l2))
  }
  return merge(l1, l2)
};