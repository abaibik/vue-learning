import keyboardHandler from "@/keyboardHandler.js";

describe("keyboardHandler", () => {
  it("returns 1 when currentInputValue is empty and key=1", () => {
    expect(keyboardHandler("", "1")).toBe("1");
  });
});
