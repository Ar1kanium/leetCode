// time : 15 mins

// algo: just follow polish notation rules

// comments: 

// task: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would 
// always evaluate to a result, and there will not be any division by zero operation. 

var evalRPN = function(tokens) {
    let stack = []
    let a, b
    for (let token of tokens) {
      if (token === '+' || token === '-' || token === '/' || token === '*') {
        switch(token) {
          case '+':
            a = stack.pop()
            b = stack.pop()
            stack.push(a+b)
            break
          case '*':
            a = stack.pop()
            b = stack.pop()
            stack.push(a*b)
            break
          case '/':
            b = stack.pop()
            a = stack.pop()
            if (a/b > 0) {
              stack.push(Math.floor(a/b))
              break
            }
            else {
              stack.push(Math.ceil(a/b))
              break
            }
         case '-':
            b = stack.pop()
            a = stack.pop()
            stack.push(a-b)
            break    
        }
      }
      else {
        stack.push(parseInt(token, 10))
      }
    }
    return stack[0]
};