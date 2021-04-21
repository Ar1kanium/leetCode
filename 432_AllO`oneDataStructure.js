// time : 27 mins
// algo: nothing to say, really. just code what problem asks... Object.entries() to remember!

// comments: is that really a hard task???O_o

//  task : Design a data structure to store the strings' count with the ability to return the strings with minimum 
//  and maximum counts.

// Implement the AllOne class:

// AllOne() Initializes the object of the data structure.
// inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, 
//   insert it with count 1.
// dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, 
//   remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
// getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
// getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".


var AllOne = function() {
    this.warehouse = {}
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (this.warehouse.hasOwnProperty(key)) {
      this.warehouse[key]++
    }
    else {
      this.warehouse[key] = 1
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (this.warehouse[key] === 1) {
    delete this.warehouse[key]
  }
  else {
    this.warehouse[key]--
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  let entr = Object.entries(this.warehouse)
  if (!entr.length) return ''
  let maxKey = Math.max(...(entr.map((i) => i[1])))
  for (let i = 0; i <= entr.length; i++) {
    if (entr[i][1] === maxKey) return entr[i][0]
  }
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  let entr = Object.entries(this.warehouse)
  if (!entr.length) return ''
  let minKey = Math.min(...(entr.map((i) => i[1])))
  for (let i = 0; i <= entr.length; i++) {
    if (entr[i][1] === minKey) return entr[i][0]
  }
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */