// time : 44 mins

// algo: let's have an array and push their all values of linked list. after, write a recursive function,
// which will build a tree. put middle index of array in the root, left side of array is for left branch, right is 
// for right, repeat.

// comments: 

// task: Given the head of a singly linked list where elements are sorted in ascending order, 
// convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth
// of the two subtrees of every node never differ by more than 1.

var sortedListToBST = function(head) {
  let arrOfVals = []
  while (head) {
    arrOfVals.push(head.val)
    head = head.next
  }
  let len = arrOfVals.length
  let constructTree = (startInd, finInd) => {
    if (!len || startInd > finInd) return null 
    let finInd1 = Math.floor((finInd + startInd)/2) - 1
    let startInd1 = Math.floor((finInd + startInd)/2) + 1
    return {
        val: arrOfVals[Math.floor((finInd + startInd)/2)],
        left: constructTree(startInd, finInd1),
        right: constructTree(startInd1, finInd)
    }
  }
  return constructTree(0, len-1)
};