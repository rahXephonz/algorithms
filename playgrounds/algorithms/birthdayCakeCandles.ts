export function birthdayCakeCandles(candles: number[]) {
  if (candles.length > 4) {
    return Error("Candles Max 4 item");
  }

  // get maximum high number in array
  const maxCandleHeight = Math.max(...candles);

  // get a number
  const getNumberFromArray = candles.filter(
    (candle) => candle === maxCandleHeight,
  );

  return getNumberFromArray.length;
}
