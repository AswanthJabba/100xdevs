/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isLetter(str) {
  return str.length === 1 && str.match(/[A-Za-z]/i);
}

function isPalindrome(str) {
  
  let string = str.toLowerCase();
  for (const char of str) {
    if(!isLetter(char)){
      string = string.replaceAll(char,'');
    }
  }
  let l = 0;
  let r = string.length - 1;
  while(l<r){
    if(string[l]!=string[r]){
      return false
    }
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;


console.log(isPalindrome('A man a plan a canal Panama'));