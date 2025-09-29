/**
 * Returns the total of two numbers.
 * @param a First addend.
 * @param b Second addend.
 * @returns Sum of the operands.
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Calculates the difference between two numbers.
 * @param a Minuend value.
 * @param b Subtrahend value.
 * @returns Result of a - b.
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Produces the product of two numbers.
 * @param a First factor.
 * @param b Second factor.
 * @returns Multiplication result.
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides one number by another, throwing if the divisor is zero.
 * @param a Dividend value.
 * @param b Divisor value.
 * @returns Quotient a / b.
 * @throws {Error} When attempting to divide by zero.
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
