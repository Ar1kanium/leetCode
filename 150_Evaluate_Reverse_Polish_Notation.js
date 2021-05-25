// time : 

// algo: 

// comments: 

// task: 

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
            a = stack.pop()
            b = stack.pop()
            stack.push(a/b)
            break
         case '-':
            a = stack.pop()
            b = stack.pop()
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