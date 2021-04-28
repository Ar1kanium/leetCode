// time : 1h 19mins

// algo: it timedout, not accurate algo obv. we need gcd function, that will return true, if gcd(a,b) === 1;
//  let's have an object for accumulating each nodes parent. first iteration - find direction of connention,
//  we know, that 0 is root. second iteration - fill our object. now let's iterate in array of nums, checking each
//  node and parent node gcd, if false, check grandparent, if no grandparent, push -1

// comments: 36/37 test timedout

// task : There is a tree (i.e., a connected, undirected graph that has no cycles) consisting of n nodes numbered from
// 0 to n - 1 and exactly n - 1 edges. Each node has a value associated with it, and the root of the tree is node 0.
// To represent this tree, you are given an integer array nums and a 2D array edges. Each nums[i] represents the ith
// node's value, and each edges[j] = [uj, vj] represents an edge between nodes uj and vj in the tree.
// Two values x and y are coprime if gcd(x, y) == 1 where gcd(x, y) is the greatest common divisor of x and y.
// An ancestor of a node i is any other node on the shortest path from node i to the root. A node is not considered
// an ancestor of itself.
// Return an array ans of size n, where ans[i] is the closest ancestor to node i such that nums[i] and nums[ans[i]] are 
// coprime, or -1 if there is no such ancestor.



var getCoprimes = function(nums, edges) {
  function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) [a, b] = [b, a]
    while (true) {
      if (b == 0) return a > 1 ? false: true;
      a %= b;
      if (a == 0) return b > 1 ? false : true;
      b %= a;
    }
  }
  let output = []
  let nodesConnections = {}
  let root
  let branch
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].indexOf(0)!== -1) {
      root = edges[i].indexOf(0)
      branch = Math.abs(1-root)
      break
    }
  }
  for (let i = 0; i < edges.length; i++) {
    let child = edges[i][branch]
    let anc = edges[i][root]
    nodesConnections[child] = anc
  }
  mainCycle:
  for (let i = 0; i < nums.length; i++) {
    let child = nums[i]
    let ancInd = nodesConnections[i]
    while (ancInd !== undefined && !gcd(child, nums[ancInd])) {
    ancInd = nodesConnections[ancInd]
    }
    ancInd === undefined ? output.push(-1) : output.push(ancInd)
  }

  
return output

};