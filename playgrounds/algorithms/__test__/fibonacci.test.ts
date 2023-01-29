import { fibonacci } from "../fibonacci";

test("fibonacci", () => {
  expect(fibonacci(5)).toStrictEqual(5);
});
