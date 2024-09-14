import convertKeyboard from "../src/keyboard";

describe("convertKeyboard", () => {
  it("korean must be converted to english", () => {
    expect(convertKeyboard("ㄱ")).toBe("r");
    expect(convertKeyboard("ㅌㅔㅅㅡㅌㅡ")).toBe("xptmxm");
    expect(convertKeyboard("123ㅂㅈㄷㄱㅅ321")).toBe("123qwert321");
  });

  it("english must be converted to korean", () => {
    expect(convertKeyboard("g")).toBe("ㅎ");
    expect(convertKeyboard("example")).toBe("ㄷㅌㅁㅡㅔㅣㄷ");
    expect(convertKeyboard("123asdf321")).toBe("123ㅁㄴㅇㄹ321");
  });

  it("combined korean must be converted to english", () => {
    expect(convertKeyboard("예시")).toBe("dptl");
    expect(convertKeyboard("테스트test")).toBe("xptmxmㅅㄷㄴㅅ");
    expect(convertKeyboard("123가나다라asdf")).toBe("123rkskekfkㅁㄴㅇㄹ");
  });

  it("english and korean have to be swapped", () => {
    expect(convertKeyboard("ㄱk")).toBe("rㅏ");
    expect(convertKeyboard("ㅇㅖexamㅅㅣple")).toBe("dpㄷㅌㅁㅡtlㅔㅣㄷ");
    expect(convertKeyboard("123asdㅁㄴㅇ")).toBe("123ㅁㄴㅇasd");
  });
});
