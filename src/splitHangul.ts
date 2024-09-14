import {
  initialConsonants,
  vowels,
  finalConsonants,
} from "../data/koreanletter";

function splitHangul(input: string): string {
  const unicodeBase = 0xac00;
  const result: string[] = [];

  for (const char of input) {
    const code = char.charCodeAt(0);
    if (code >= unicodeBase && code < unicodeBase + 11172) {
      const index = code - unicodeBase;
      const initialIndex = Math.floor(index / 588);
      const medialIndex = Math.floor((index % 588) / 28);
      const finalIndex = index % 28;

      const initial = initialConsonants[initialIndex]; // 초성
      const medial = vowels[Object.keys(vowels)[medialIndex]]; // 중성
      const final = finalConsonants[Object.keys(finalConsonants)[finalIndex]]; // 종성

      if (initial) result.push(initial);
      if (medial) result.push(...medial);
      if (final) result.push(...final);
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

export default splitHangul;
