import { bubbleSort } from "../bubbleSort";

const arrNumber = [0, 5, 6, 1, 2, 3, 4, -1, -2];
const ExpectedData = [-2, -1, 0, 1, 2, 3, 4, 5, 6];

test("Sorting array of number", () => {
  expect(bubbleSort(arrNumber)).toStrictEqual(ExpectedData);
});
