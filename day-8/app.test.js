import { isOneLetterDifference } from "../day-8/app";

describe("isOneLetterDifference", () => {
  test("returnTrueForFirstArrayLonger", () => {
    expect(isOneLetterDifference(["a", "b", "c"], ["a", "b"])).toBe(true);
  });
  test("returnTrueForSecondArrayLonger", () => {
    expect(isOneLetterDifference(["a", "b"], ["a", "b", "c"])).toBe(true);
  });
  test("returnFasleWhenArraysAreIdentical", () => {
    expect(isOneLetterDifference(["a", "b", "c"], ["a", "b", "c"])).toBe(false);
  });
  test("returnFalseWhenTwoLettersAreDifferenct", () => {
    expect(isOneLetterDifference(["a", "z", "i"], ["a", "b", "c"])).toBe(false);
  });
  test("returnFalseWhenFirstArrayIsMuchLonger", () => {
    expect(isOneLetterDifference(["a", "z", "i", "d", "b", "n", "q"], ["a", "b", "c"])).toBe(false);
  });
  test("returnFalseWhenSecondArrayIsMuchLonger", () => {
    expect(isOneLetterDifference(["a", "b", "c"], ["a", "z", "i", "d", "b", "n", "q"])).toBe(false);
  });
})