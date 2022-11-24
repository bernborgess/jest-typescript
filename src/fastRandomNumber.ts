
export const makeFastRandomNumber =
  (randomGenerator: () => number) => (max: number) => {
    return Math.floor(randomGenerator() * (max + 1));
  }

export const fastRandomNumber = makeFastRandomNumber(Math.random);
