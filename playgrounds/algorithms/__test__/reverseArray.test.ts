import { reverseArray } from "../reverseArray";

const ARRAY_LIST = [1, 2, 3, 4, 5, 8, 9];

test("fibonacci", () => {
  expect(reverseArray(ARRAY_LIST)).toStrictEqual([9, 8, 5, 4, 3, 2, 1]);
});
