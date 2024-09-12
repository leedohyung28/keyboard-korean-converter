import { keyboardMapKorToEng } from "../data/keyboardmap";

function convertKoreanKeyboard(input: string) {
  try {
    return input
      .split("")
      .map((char: string) => keyboardMapKorToEng[char] || char)
      .join("");
  } catch (err) {
    console.error(err);
  }
}

export default convertKoreanKeyboard;
