// time : 7 mins

// algo: create 2 arrays, put there leaves using function, which will recursively travel in trees, compare.

// comments: 

// task: Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.


var leafSimilar = function(root1, root2) {
  let [root1Leaves, root2Leaves] = [[],[]]
  let checkTree = (root, arr) => {
    if (!root) return 
    if (!root.left && !root.right) arr.push(root.val)
    checkTree(root.left, arr)
    checkTree(root.right, arr)
  }
  checkTree(root1, root1Leaves)
  checkTree(root2, root2Leaves)
  if (root1Leaves.length !== root2Leaves.length) return false
  for (let i = 0; i < root1Leaves.length; i++) {
    if (root1Leaves[i] !== root2Leaves[i]) return false
  }
  return true
};