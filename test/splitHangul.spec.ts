import splitHangul from "../src/splitHangul";

describe("splitHangul", () => {
  it("korean must be separated", () => {
    expect(splitHangul("아야어여오요우유으이")).toBe(
      "ㅇㅏㅇㅑㅇㅓㅇㅕㅇㅗㅇㅛㅇㅜㅇㅠㅇㅡㅇㅣ"
    );
    expect(splitHangul("가나다라")).toBe("ㄱㅏㄴㅏㄷㅏㄹㅏ");
    expect(splitHangul("홍길동")).toBe("ㅎㅗㅇㄱㅣㄹㄷㅗㅇ");
    expect(splitHangul("넋확붧")).toBe("ㄴㅓㄱㅅㅎㅗㅏㄱㅂㅜㅓㄹㅂ");
    expect(splitHangul("뭛픯좏")).toBe("ㅁㅜㅓㄹㅂㅍㅡㅣㄹㅎㅈㅗㅏㄱㅅ");
  });
});
