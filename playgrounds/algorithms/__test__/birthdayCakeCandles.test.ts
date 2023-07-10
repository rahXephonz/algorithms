import { birthdayCakeCandles } from "../birthdayCakeCandles";

// MAX 4 char
const arrNumber = [3, 3, 2, 1];

test("Get a high value of cake candles", () => {
  expect(birthdayCakeCandles(arrNumber)).toStrictEqual(2);
});
