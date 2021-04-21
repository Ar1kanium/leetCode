// time : 31 mins
// algo: create an array, we will put all paths there. after it, let's create a function, which will recursively
// check all paths of binary tree. let's add new argument to it, which will remember the path of function.
// if !root, stop the function, otherwise let it travel in the tree and push path to the final array,
// if value is targeted and there no children of current node

// comments: my first bunary tree problem, feels good and pretty easy, thanks to my sufferings with linked lists problems

// task : Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's 
// sum equals targetSum.
// A leaf is a node with no children.


var pathSum = function(root, targetSum) {
  let finArr = []
  let recurseTree = (root, targetSum, pathArr = []) => {
  if (!root) return 
  let nextPathArr = [...pathArr, root.val]
  let nextTargetSum = targetSum - root.val  
  if (nextTargetSum != 0 || root.right || root.left) {
    recurseTree(root.left, nextTargetSum, nextPathArr)
    recurseTree(root.right, nextTargetSum, nextPathArr)
    }
  if (nextTargetSum === 0 && (!root.right) && (!root.left)) {
    finArr.push(nextPathArr)
  }
  } 
  recurseTree(root, targetSum)
  return finArr

};