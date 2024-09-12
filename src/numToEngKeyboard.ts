import { keyboardMapNumToEng } from "../data/keyboardmap";

function convertNumToEngKeyboard(input: any) {
  if (typeof input === "number") {
    if (input < 10 && input >= 0) {
      return keyboardMapNumToEng[input] || input;
    } else {
      input = input.toString();
    }
  } else if (
    typeof input === "string" &&
    input.length === 1 &&
    !isNaN(Number(input))
  ) {
    const num = Number(input);
    return keyboardMapNumToEng[num] || input;
  }

  return input
    .split("")
    .map((char: string | number) => {
      if (!isNaN(Number(char))) {
        const num = Number(char);
        return keyboardMapNumToEng[num] || char;
      }
      return keyboardMapNumToEng[char] || char;
    })
    .join("");
}

export default convertNumToEngKeyboard;
