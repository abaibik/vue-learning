export default function keyboardHandler(currentInputValue, key) {
  if (key === "del") {
    return currentInputValue.slice(0, -1);
  }
  return currentInputValue + key;
}
