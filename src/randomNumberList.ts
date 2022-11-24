import { randomNumber } from "./randomNumber";

export const randomNumberList = (
  max: number,
  length: number
): Array<number> => {
  return Array(length)
    .fill(null)
    .map(() => randomNumber(max));
};