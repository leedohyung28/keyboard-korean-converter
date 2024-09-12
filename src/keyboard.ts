import { keyboardMapKorToEng, keyboardMapEngToKor } from "../data/keyboardmap";

function convertKeyboard(input: string) {
  try {
    return input
      .split("")
      .map((char: string) => {
        if (keyboardMapEngToKor[char]) {
          return keyboardMapEngToKor[char];
        } else if (keyboardMapKorToEng[char]) {
          return keyboardMapKorToEng[char];
        } else {
          return char;
        }
      })
      .join("");
  } catch (err) {
    console.error("Keyboard Conversion Error : ", err);
  }
}

export default convertKeyboard;
