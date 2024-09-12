import convertEnglishKeyboard from "../src/englishKeyboard";

describe("convertEnglishKeyboard", () => {
  it("english must be converted to korean", () => {
    expect(convertEnglishKeyboard("a")).toBe("ㅁ");
    expect(convertEnglishKeyboard("example")).toBe("ㄷㅌㅁㅡㅔㅣㄷ");
    expect(convertEnglishKeyboard("123asdf321")).toBe("123ㅁㄴㅇㄹ321");
  });

  it("korean must not be converted", () => {
    expect(convertEnglishKeyboard("ㅇㅖexamㅅㅣple")).toBe(
      "ㅇㅖㄷㅌㅁㅡㅅㅣㅔㅣㄷ"
    );
    expect(convertEnglishKeyboard("123asdㅁㄴㅇ")).toBe("123ㅁㄴㅇㅁㄴㅇ");
  });
});
