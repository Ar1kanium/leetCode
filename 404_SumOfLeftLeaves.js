// time : 37 mins

// algo: let's have a counter and recursive function, which will increment counter, if val is left leaf
// leaf is a node, where left and right children are nulls

// comments: that was so stupid of me, firstly, i spent 10 mins just to realize, that i didn't call my function.
// Secondary... Now i know what leaf of binary tree is. :D 

// task : Given the root of a binary tree, return the sum of all left leaves.

var sumOfLeftLeaves = function(root) {
  let count = 0
  let sumLeft = (root) => {
    if (!root) return
    if (root && root.left && !root.left.left && !root.left.right)  count += root.left.val
    sumLeft(root.left)
    sumLeft(root.right)
  }
  sumLeft(root)
  return count
};