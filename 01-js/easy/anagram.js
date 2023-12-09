/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {

  // if(str1.length!==str2.length){
  //   return false
  // }
  // else if(str1.toLowerCase().split("").sort().join('') == str2.toLowerCase().split("").sort().join('')){
  //     return true
  // }
  // else{
  //   return false
  // }


  let dict1 = {};
  let dict2 = {};
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  for(const element of str1){
    if(element in dict1){
      dict1[element] += 1;
    }
    else{
      dict1[element] = 1;
    }
  }
  for(const element of str2){
    if(element in dict2){
      dict2[element] += 1;
    }
    else{
      dict2[element] = 1;
    }
  }
  for(const key in dict1){
    if(dict2.hasOwnProperty(key) && dict1[key] == dict2[key]){
      continue;
    }
    else{
      return false
    }
  }

  for(const key in dict2){
    if(dict1.hasOwnProperty(key) && dict1[key] == dict2[key]){
      continue;
    }
    else{
      return false
    }
  }

  return true
  
}

module.exports = isAnagram;
