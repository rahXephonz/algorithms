/*
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

const str = "bccbaccbad";
const p = "abc";

function areArraysEqual(arr1: Array<string>, arr2: Array<string>) {
  if (arr1.length !== arr2.length) return false;

  // Sort both arrays and check if they are equal
  arr1.sort();
  arr2.sort();

  return arr1.every((item, index) => item === arr2[index]);
}

export function findAnagrams(str: string, p: string) {
  let splitStr = str.split("");
  let splitP = p.split("");

  let arrayStr: Array<Array<string>> = [];
  let resIndices: number[] = [];

  for (let i = 0; i < splitStr.length; i += 3) {
    let slice = splitStr.slice(i, i + splitP.length);
    arrayStr.push(slice);

    if (areArraysEqual(slice, splitP)) {
      resIndices.push(i);
    }
  }

  return resIndices;
}
