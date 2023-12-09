/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function buildCharFrequencyDict(str) {
  const dict = {};
  str = str.toLowerCase().trim();
  for (const element of str) {
      if (element in dict) {
          dict[element] += 1;
      } else {
          dict[element] = 1;
      }
  }
  return dict;
}

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

  const dict1 = buildCharFrequencyDict(str1);
  const dict2 = buildCharFrequencyDict(str2);

  for (const key in dict1) {
      if (!(key in dict2) || dict1[key] !== dict2[key]) {
          return false;
      }
  }

  for (const key in dict2) {
      if (!(key in dict1) || dict1[key] !== dict2[key]) {
          return false;
      }
  }

  return true;
}


module.exports = isAnagram;
