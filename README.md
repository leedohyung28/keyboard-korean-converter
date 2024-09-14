# Keyboard Korean Converter

한글과 영어로 키보드 자판을 바꿔주는 라이브러리입니다.<br>
**(q ↔ ㅂ, o ↔ ㅐ, ...)**

## 설치

### node.js

```bash
npm install keyboard-korean-converter
```

```javascript
import * as KeyboardConverter from "keyboard-korean-converter";
```

혹은

```javascript
import { convertKeyboard } from "keyboard-korean-converter";
// 필요한 함수
```

### Typescript

```bash
npm install keyboard-korean-converter
```

```typescript
import * as KeyboardConverter from "keyboard-korean-converter";
```

혹은

```typescript
import { convertKeyboard } from "keyboard-korean-converter";
// 필요한 함수
```

### 웹 페이지

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/keyboard-korean-converter"
></script>
```

## 기능 및 예제

#### convertKeyboard : 한글 자판을 영어로, 영어 자판을 한글로 변환

```javascript
console.log(KeyboardConverter.convertKeyboard("abcdㅁㄴㅇㄹ"));
// ㅁㅠㅊㅇasdf
```

<br><br>

#### convertKoreanKeyboard : 한글 자판만 영어로 변환

```javascript
console.log(KeyboardConverter.convertKoreanKeyboard("testㅇㅖㅅㅣ"));
// testdptl

console.log(KeyboardConverter.convertKoreanKeyboard("test테스트"));
// testxptmxm
```

<br><br>

#### convertEnglishKeyboard : 영어 자판만 한글로 변환

```javascript
console.log(KeyboardConverter.convertEnglishKeyboard("testㅇㅖㅅㅣ"));
// ㅅㄷㄴㅅㅇㅖㅅㅣ
```

> `convertEnglishKeyboard`는 기존 한글 글자를 분리하지 않습니다.<br>
> 한글 글자 분리가 필요하면 `splitHangul`을 사용해주세요

<br><br>

#### convertNumToEngKeyboard : 숫자 자판을 아래 영어로 변환

(1 → q, 2 → w, 3 → e, ..., 0 → p)

```javascript
console.log(KeyboardConverter.convertNumToEngKeyboard("testㅇㅖㅅㅣ1357"));
// testㅇㅖㅅㅣqetu
```

> `convertNumToEngKeyboard`는 기존 한글 글자를 분리하지 않습니다.<br>
> 한글 글자 분리가 필요하면 `splitHangul`을 사용해주세요

<br><br>

#### convertNumToKorKeyboard : 숫자 자판을 아래 한글로 변환

(1 → ㅂ, 2 → ㅈ, 3 → ㄷ, ..., 0 → ㅔ)

```javascript
console.log(KeyboardConverter.convertNumToKorKeyboard("testㅇㅖㅅㅣ1357"));
// testㅇㅖㅅㅣㅂㄷㅅㅕ
```

> `convertNumToKorKeyboard`는 기존 한글 글자를 분리하지 않습니다.<br>
> 한글 글자 분리가 필요하면 `splitHangul`을 사용해주세요

<br><br>

#### splitHangul : 한글 글자를 분리

```javascript
console.log(KeyboardConverter.convertNumToKorKeyboard("황긜둯"));
// ㅎㅗㅏㅇㄱㅡㅣㄹㄷㅜㅓㄱㅅ
```
