const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffle(array);
    expect(Array.isArray(result)).toBe(true);
  });

  test("return an array with the same length as the input array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffle(array);
    expect(result.length).toBe(array.length);
  });
});