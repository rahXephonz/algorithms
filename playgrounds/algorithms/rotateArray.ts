/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
Rotate 1 steps to the right: [7,1,2,3,4,5,6]
Rotate 2 steps to the right: [6,7,1,2,3,4,5]
Rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

const nums = [1, 2, 3, 4, 5, 6, 7];

// Rotate 3 steps
const k = 3;

export function rotateArray(arr: Array<number>, k: number) {
  k = k % arr.length;

  let tempArr = arr.slice(arr.length - k);

  // Shift existing elements in the original array
  for (let i = arr.length - 1; i >= k; i--) {
    arr[i] = arr[i - k];
  }

  // Fill the beginning of the array with the temporary elements
  for (let i = 0; i < k; i++) {
    arr[i] = tempArr[i];
  }

  return arr;
}
