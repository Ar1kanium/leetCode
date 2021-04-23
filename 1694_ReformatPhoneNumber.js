// time : 26 mins
// algo: let's delete all appearances of ' ' and '-', regexp, recurse, replaceAll, no matter how.
// after it let's create a string to accumulate answer and append 3 digits to answer, slicing
// them out from original string, until its length > 4. 

// comments: replaceAll didn't work, that's why it took so long...

// task : You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes.
// Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. 
// The final digits are then grouped as follows:

// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never 
// produce any blocks of length 1 and produce at most two blocks of length 2.

// Return the phone number after formatting.

var reformatNumber = function(number) {
  function delTrash () {
      if (number.indexOf(' ') != -1) {
        number = number.replace(' ', '')
        delTrash()
      }
      if (number.indexOf('-') != -1) {
        number = number.replace('-', '')
        delTrash()
      }
    }
  delTrash()
  let answ = ''
  while (number.length > 4) {
    answ += number.slice(0,3) + '-'
    number = number.slice(3)
  }
  if (number.length == 4) {
    answ += number.slice(0,2) + '-' + number.slice(2)
  }
  else {
    answ += number
  }
  return answ
};