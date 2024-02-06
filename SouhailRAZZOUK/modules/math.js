export const sum = (...operands) =>
  operands.reduce((acc, operand) => acc + operand, 0);

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const pow = (base, power) => base ^ power;
