import { rotateArray } from "../rotateArray";

const ARRAY_LIST = [1, 2, 3, 4, 5, 6, 7];

test("fibonacci", () => {
  expect(rotateArray(ARRAY_LIST, 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
});
