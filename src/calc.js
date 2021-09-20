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
  if (!["+", "-", "*", "/", "^", "mod"].includes(op)) {
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

  if (op === "mod") {
    return Math.trunc(a / b);
  }
}
