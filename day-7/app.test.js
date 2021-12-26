import { calculateFuelConsumption, calculateVariableFuelConsumption, calculateNthTriangleNumber } from "../day-7/app";

describe("calculateFuelConsumption", () => {
  test("returnsCorrectValueForTestInput", () => {
    const values = [16,1,2,0,4,2,7,1,2,14];
    expect(calculateFuelConsumption(2, values)).toBe(37);
  });
})

describe("calculateVariableFuelConsumption", () => {
  test("returnsCorrectValueForTestInput", () => {
    const values = [16,1,2,0,4,2,7,1,2,14];
    expect(calculateVariableFuelConsumption(2, values)).toBe(206);
    expect(calculateVariableFuelConsumption(5, values)).toBe(168);
  });
})

describe("calculateNthTriangleNumber", () => {
  test("returns10For4", () => {
    expect(calculateNthTriangleNumber(4)).toBe(10);
  });
  test("returns45For9", () => {
    expect(calculateNthTriangleNumber(9)).toBe(45);
  });
  test("returns66For11", () => {
    expect(calculateNthTriangleNumber(11)).toBe(66);
  });
})
