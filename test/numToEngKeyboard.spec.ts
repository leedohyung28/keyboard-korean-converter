import convertNumToEngKeyboard from "../src/numToEngKeyboard";

describe("convertNumToEngKeyboard", () => {
  it("number must be converted to english", () => {
    expect(convertNumToEngKeyboard(1)).toBe("q");
    expect(convertNumToEngKeyboard("1")).toBe("q");
    expect(convertNumToEngKeyboard("10")).toBe("qp");
    expect(convertNumToEngKeyboard(123)).toBe("qwe");
    expect(convertNumToEngKeyboard(-123)).toBe("-qwe");
    expect(convertNumToEngKeyboard("ㅇㅖexamㅅㅣple")).toBe("ㅇㅖexamㅅㅣple");
    expect(convertNumToEngKeyboard("123asdㅁㄴㅇ")).toBe("qweasdㅁㄴㅇ");
  });
});
