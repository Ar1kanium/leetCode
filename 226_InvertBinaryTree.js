// time : 3mins
// algo: create a function, which will invert tree's directions and recursively 
//  travel in the tree... That's all, hope i will have this problem during my interview.

// comments: sooo easy:D

// task : Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
  let inverting = (root) => {
      if (!root) return
      [root.right, root.left] = [root.left, root.right]
      inverting(root.left)
      inverting(root.right)
  }
  inverting(root)
  return root
};