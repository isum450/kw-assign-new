const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test('1.5는 소수입니다', () => {
    expect(lib.prime(1.5)).toBe(true);
});
test('10팩토리얼은 3628800입니다', () => {
    expect(lib.factorial(10)).toBe(3628800);
});
