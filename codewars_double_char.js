/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

const doubleChar = (s) => {
  let str = '';
  for(let i = 0; i < s.length; i++) {
    str += (s[i] + s[i]);
  }
  return str;
}
