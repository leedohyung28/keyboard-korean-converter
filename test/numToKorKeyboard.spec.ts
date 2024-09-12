import convertNumToKorKeyboard from "../src/numToKorKeyboard";

describe("convertNumToKorKeyboard", () => {
  it("number must be converted to english", () => {
    expect(convertNumToKorKeyboard(1)).toBe("ㅂ");
    expect(convertNumToKorKeyboard("1")).toBe("ㅂ");
    expect(convertNumToKorKeyboard("10")).toBe("ㅂㅔ");
    expect(convertNumToKorKeyboard(123)).toBe("ㅂㅈㄷ");
    expect(convertNumToKorKeyboard(-123)).toBe("-ㅂㅈㄷ");
    expect(convertNumToKorKeyboard("ㅇㅖexamㅅㅣple")).toBe("ㅇㅖexamㅅㅣple");
    expect(convertNumToKorKeyboard("123asdㅁㄴㅇ")).toBe("ㅂㅈㄷasdㅁㄴㅇ");
  });
});
