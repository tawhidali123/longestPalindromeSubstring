// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

function longest(arr){
  let p1 = 0
  let p2 = arr.length - 1
  let holder = []


  while(p2 !== 0){
    if(arr[p1] === arr[p2]){
      // check palindrome
      let counter = (p2 - p1)
      let check = []
      for(val = counter; val >= 0; val--){
        check.push(arr[val])
      }
      console.log(check)
      if(check === check.reverse()){
        return check
      }
    } 
    
    p2 --
    
  }
}

longest("babad")