import { keyboardMapKorToEng } from "../data/keyboardmap";
import splitHangul from "./splitHangul";

function convertKoreanKeyboard(input: string) {
  try {
    return splitHangul(input)
      .split("")
      .map((char: string) => keyboardMapKorToEng[char] || char)
      .join("");
  } catch (err) {
    console.error(err);
  }
}

export default convertKoreanKeyboard;
