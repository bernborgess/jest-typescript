import { randomNumber } from "./randomNumber";

export const makeRandomNumberList =
  (randomNumber: (max: number) => number) =>
    (max: number, length: number): number[] => {
      return Array(length)
        .fill(null)
        .map(() => randomNumber(max));
    };

export const randomNumberList = makeRandomNumberList(randomNumber);