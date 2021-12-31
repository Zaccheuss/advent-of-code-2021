import { isOppositeCharacter } from "../day-10/app";

describe("isOppositeCharacter", () => {
  test("returnTrueForOppositeCharacter", () => {
    expect(isOppositeCharacter("{", "}")).toBe(true);
  });
  test("returnFalseForNonOppositeCharacter", () => {
    expect(isOppositeCharacter("{", ")")).toBe(false);
  });
})