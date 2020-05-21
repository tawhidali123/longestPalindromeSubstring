// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

function longest(arr){
  let temp = ''
  let constant = ''
  let subStart = 0
  let subEnd = 0
  let holder =[]

  for(i=0; i < arr.length; i++){
    if(i == 0) temp = arr[i]
    constant = `${temp}${arr[i]}`
    if(constant === constant.reverse()){
      holder.push(constant)
    }
  }
  console.log(subStart,subEnd)
}

longest("babad")