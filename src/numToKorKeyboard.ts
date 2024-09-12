import { keyboardMapNumToKor } from "../data/keyboardmap";

function convertNumToKorKeyboard(input: any) {
  if (typeof input === "number") {
    if (input < 10 && input >= 0) {
      return keyboardMapNumToKor[input] || input;
    } else {
      input = input.toString();
    }
  } else if (
    typeof input === "string" &&
    input.length === 1 &&
    !isNaN(Number(input))
  ) {
    const num = Number(input);
    return keyboardMapNumToKor[num] || input;
  }

  return input
    .split("")
    .map((char: string | number) => {
      if (!isNaN(Number(char))) {
        const num = Number(char);
        return keyboardMapNumToKor[num] || char;
      }
      return keyboardMapNumToKor[char] || char;
    })
    .join("");
}

export default convertNumToKorKeyboard;
