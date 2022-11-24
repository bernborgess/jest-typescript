export type RandomGenerator = () => number;

export const makeRandomNumber =
  (randomGenerator: RandomGenerator) =>
    (max: number): number => {
      return Math.floor(randomGenerator() * (max + 1));
    };

export const randomNumber = makeRandomNumber(Math.random);

