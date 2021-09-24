export default function keyboardHandler(currentInputValue, key) {
  if (key === "del") {
    if (currentInputValue.length === 1) {
      return "0";
    }
    return currentInputValue.slice(0, -1);
  }
  return currentInputValue + key;
}
