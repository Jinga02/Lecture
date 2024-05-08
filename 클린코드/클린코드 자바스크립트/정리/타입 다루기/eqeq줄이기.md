<!-- @format -->

동등연산자 EQEQ~

ELLint eqeq 찾아봐라~

```js
11 + "문자와 결합"; // '11 문자와 결합'

!!"문자열"; // true

!!""; // false

parseInt("9.9999", 10); // 9 참고로 parserInt 두번째 매개변수 10 꼭줘라 디폴트가 10 아니다
```

isNaN조차 미흡하다! => 느슨한 검사
Number.isNaN 써라 => 엄격한 검사
