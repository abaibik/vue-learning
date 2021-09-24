import keyboardHandler from "@/keyboardHandler.js";

describe("keyboardHandler", () => {
  it("returns 1 when currentInputValue is empty and key=1", () => {
    expect(keyboardHandler("", "1")).toBe("1");
  });
  it("returns 12 when currentInputValue=1 and key=2", () => {
    expect(keyboardHandler("1", "2")).toBe("12");
  });
  it("returns 2 when currentInputValue=21 and key=del", () => {
    expect(keyboardHandler("21", "del")).toBe("2");
  });
  it("returns 0 when currentInputValue=1 and key=del", () => {
    expect(keyboardHandler("1", "del")).toBe("0");
  });
});
