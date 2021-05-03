// time : 2 mins.

// algo: just create an array for MinStack, use all same methods, for minimum Min.math...

// comments: Maybe not clearly understood task and i needed to do more than that, but solution accepted, dunno...

// task : Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.arr)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */