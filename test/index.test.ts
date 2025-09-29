import { describe, expect, test } from "vitest";

import { divide, multiply, subtract, sum } from "../src";

describe("math utilities", () => {
  test("sum adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-4, 7)).toBe(3);
  });

  test("subtract computes difference", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(-2, -8)).toBe(6);
  });

  test("multiply returns product", () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-3, 6)).toBe(-18);
  });

  test("divide handles division", () => {
    expect(divide(20, 4)).toBe(5);
    expect(divide(-9, 3)).toBe(-3);
  });

  test("divide throws on zero divisor", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
