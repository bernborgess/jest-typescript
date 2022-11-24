import { makeRandomNumber } from "../src/randomNumber";

describe("General case", () => {
  it("Produces numbers within the established range", () => {
    const randomGeneratorMock = jest
      .fn()
      .mockReturnValueOnce(0.13445)
      .mockReturnValueOnce(0.542)
      .mockReturnValueOnce(0.889);

    expect(makeRandomNumber(randomGeneratorMock)(10)).toBe(1);
    expect(makeRandomNumber(randomGeneratorMock)(10)).toBe(5);
    expect(makeRandomNumber(randomGeneratorMock)(10)).toBe(9);
  });
});