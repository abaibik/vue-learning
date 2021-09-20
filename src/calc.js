function checkOperand(x) {
  if (isNaN(x)) {
    return false;
  }

  const invalidValues = ["", null];
  if (invalidValues.includes(x)) {
    return false;
  }

  return true;
}

export default function calc(a, b, op) {
  if (!["+", "-", "*", "/", "^"].includes(op)) {
    return NaN;
  }

  if (!checkOperand(a) || !checkOperand(b)) {
    return NaN;
  }

  a = parseInt(a);
  b = parseInt(b);

  if (op === "+") {
    return a + b;
  }

  if (op === "-") {
    return a - b;
  }

  if (op === "*") {
    return a * b;
  }

  if (op === "/") {
    return a / b;
  }

  if (op === "^") {
    return Math.pow(a, b);
  }
}
