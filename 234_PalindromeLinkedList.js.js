// time : 12 mins

// algo: let's create an array and put there all list values. than check, if array is palindrome

// comments: 

// task : Given the head of a singly linked list, return true if it is a palindrome.

var isPalindrome = function(head) {
  let arr = []
  let checkList = (list) => {
    if (list) {
      arr.push(list.val)
      checkList(list.next)
    }
  }
  checkList(head)
  let count = Math.floor(arr.length/2)
  for (let i = 0; i<count; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false
    }
  }
  return true
};
