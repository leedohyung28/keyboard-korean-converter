import { keyboardMapEngToKor } from "../data/keyboardmap";

function convertEnglishKeyboard(input: string) {
  try {
    return input
      .split("")
      .map((char: string) => keyboardMapEngToKor[char] || char)
      .join("");
  } catch (err) {
    return console.error(err);
  }
}

export default convertEnglishKeyboard;
