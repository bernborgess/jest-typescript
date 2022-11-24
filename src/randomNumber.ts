export type RandomGenerator = () => number;

export const randomNumberImplementation = (
  randomGenerator: RandomGenerator,
  max: number
): number => {
  return Math.floor(randomGenerator() * (max + 1));
};

export const randomNumber = (max: number) =>
  randomNumberImplementation(Math.random, max);