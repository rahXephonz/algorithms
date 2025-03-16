import { findAnagrams } from "../findAnagrams";

const str = "bccbaccbad";
const p = "abc";

test("fibonacci", () => {
  expect(findAnagrams(str, p)).toStrictEqual([3, 6]);
});
