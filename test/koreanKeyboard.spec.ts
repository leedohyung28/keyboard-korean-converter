import convertKoreanKeyboard from "../src/koreanKeyboard";

describe("convertKoreanKeyboard", () => {
  it("korean must be converted to english", () => {
    expect(convertKoreanKeyboard("ㅁ")).toBe("a");
    expect(convertKoreanKeyboard("ㅇㅖㅅㅣ")).toBe("dptl");
    expect(convertKoreanKeyboard("123ㅁㄴㅇㄹ321")).toBe("123asdf321");
  });

  it("english must not be converted", () => {
    expect(convertKoreanKeyboard("example")).toBe("example");
    expect(convertKoreanKeyboard("ㅇㅖexamㅅㅣple")).toBe("dpexamtlple");
    expect(convertKoreanKeyboard("123asdㅁㄴㅇ")).toBe("123asdasd");
  });
});
