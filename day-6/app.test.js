import { isArrayEqual, checkIfBingo, fillBoardWithCalledNumber } from "../day-4/app";

describe("isArrayEqual", () => {
  test("returnsFalseWhenBothArraysAreFalse", () => {
    expect(isArrayEqual(null, null)).toBe(false);
  });

  test("returnTrueForIdentical1DArrays", () => {
    expect(isArrayEqual([9, 0], [9, 0])).toBe(true);
  });

  test("returnTrueForIdentical2DArrays", () => {
    expect(isArrayEqual([[9, 0], [8, 5]], [[9, 0], [8, 5]])).toBe(true);
  });

  test("returnsFalseForDifferentArrays", () => {
    expect(isArrayEqual([[9, 1], [8, 5]], [[9, 0], [8, 5]])).toBe(false);
  });
})

describe("checkIfBingo", () => {
  test("returnsFalseWhenNoBingo", () => {
    const inputArray = [[1, 1, 1], [-1, 9, 8], [9, 3, 12]];
    expect(checkIfBingo(inputArray)).toBe(false);
  })

  test("returnsTrueWhenFirstRowIsBingo", () => {
    const inputArray = [[-1, -1, -1], [-1, 9, 8], [9, 3, 12]];
    expect(checkIfBingo(inputArray)).toBe(true);
  })

  test("returnsTrueWhenLastRowIsBingo", () => {
    const inputArray = [[-1, 9, 8], [9, 3, 12], [-1, -1, -1]];
    expect(checkIfBingo(inputArray)).toBe(true);
  })

  test("returnTrueWhenFirstColumnIsBingo", () => {
    const inputArray = [[-1, 9, 8], [-1, 3, 12], [-1, 1, 48]];
    expect(checkIfBingo(inputArray)).toBe(true);
  })

  test("returnTrueWhenLastColumnIsBingo", () => {
    const inputArray = [[1, 9, -1], [-1, -1, -1], [9827, 1, -1]];
    expect(checkIfBingo(inputArray)).toBe(true);
  })
})

// describe("fillBoardsWithCalledNumber", () => {
//   test("fillsOneBoardCalledNumberWithNegativeOne", () => {
//     const inputArray = [[1, 9, 1], [1, 1, 1], [9827, 1, 1]];
//     const calledNumber = 9

//     const mut = fillBoardsWithCalledNumber(inputArray, calledNumber)
    
//     console.log(mut);
//     expect(-1).toEqual(expect.arrayContaining(mut))
//   })
// })