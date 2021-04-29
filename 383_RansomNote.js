// time : 3 mins

// algo: iterate in ransomNote string, find index of this letter in magazine, return false if -1, replace each letter with ''.

// comments: 

// task: Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.


var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i<ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) === -1) return false
    magazine = magazine.replace(ransomNote[i], '') 
  }
  return true
};