<!-- @format -->

## 변수 선언: var, let, const

자바스크립트에서 변수를 선언하는 방법에는 `var`, `let`, `const` 세 가지가 있습니다.

### var

```javascript
var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름4";
```

- var는 재선언이 가능하고 재할당이 가능합니다.
- 값이 다른데 변수명은 같아도 에러가 발생하지 않습니다.
- 호출하면 마지막에 할당된 변수의 값이 반환됩니다.
- 선언하지 않고 호출하면 `undefined`가 반환됩니다.
- 함수 단위 스코프를 가지기 때문에 if문과 같은 블록은 스코프를 생성하지 않습니다.

### let

```javascript
let name;
name = "이름1";
name = "이름2";
name = "이름3";
```

- let은 재할당은 가능하지만 재선언은 불가능합니다.

### const

```javascript
const name = "이름1";
```

- const는 선언과 동시에 값을 할당해야하며, 재할당 및 재선언이 모두 불가능합니다.

## 스코프 차이

변수의 스코프에 따라 변수가 접근 가능한 범위가 달라집니다.

### var의 스코프

```javascript
var global = "전역";
if (global === "전역") {
  var global = "지역";
  console.log(global); // 출력: 지역
}
console.log(global); // 출력: 지역
```

- var는 함수 단위 스코프를 가지기 때문에 if문과 같은 블록은 스코프를 생성하지 않습니다.

### let과 const의 스코프

```javascript
let local = "전역";
if (local === "전역") {
  let local = "지역";
  console.log(local); // 출력: 지역
}
console.log(local); // 출력: 전역
```

- let과 const는 블록 단위 스코프를 가지기 때문에 블록 내에서 선언된 변수는 블록 외부에서 접근할 수 없습니다.

---

## let과 const의 차이점

### 재할당 가능 여부

```javascript
let name;
name = "이름1";
name = "이름2"; // 가능
```

- let은 선언 후에 변수에 다른 값을 할당할 수 있습니다. 재할당은 가능하지만 재선언은 불가능합니다.

```javascript
const name = "이름1";
name = "이름2"; // TypeError: Assignment to constant variable.
```

- const는 한 번 값을 할당하면 재할당이 불가능합니다. 따라서 const로 선언한 변수에는 다른 값이 할당되지 않습니다.

### 초기화

```javascript
let name; // 초기화 없이 선언 가능
```

- let으로 선언한 변수는 초기화 없이 선언할 수 있습니다. 이후 필요한 시점에 값을 할당할 수 있습니다.

```javascript
const name; // SyntaxError: Missing initializer in const declaration
```

- const로 선언한 변수는 반드시 선언과 동시에 값을 할당해야 합니다. 초기화 없이 선언하면 에러가 발생합니다.

### 객체 및 배열의 할당

```javascript
const person = {
  name: "jin",
  age: 12,
};
person.name = "djf"; // 가능
```

- const로 선언한 변수에 객체나 배열을 할당한 경우, 해당 객체나 배열의 내부 값은 변경할 수 있습니다. 즉, 객체나 배열의 레퍼런스는 변경할 수 없지만 내부 값은 변경 가능합니다.

```javascript
const person = {
  name: "jin",
  age: 12,
};
person = {}; // TypeError: Assignment to constant variable.
```

- 하지만 const로 선언한 변수에 다른 객체나 배열을 할당하려고 하면 에러가 발생합니다. const는 변수의 레퍼런스를 변경할 수 없기 때문입니다.

### 사용 용도

- let: 값이 변경될 수 있는 경우에 사용합니다. 반면에 변수의 재선언은 피해야 합니다.
- const: 값이 고정되어야 하는 경우에 사용합니다. 재할당이나 재선언이 발생하지 않는 경우에 사용하며, 불변성을 유지해야 하는 객체나 배열의 경우에도 사용합니다.

## 개인적인 끄적임

```js
var global = '전역'
if(global === '전역'){
    var global = '지역'
    console.log(global); => 지역
}
// if문 scpoe를 벗엇났는데도?
console.log(global); => 지역
```

if문 때문 var는 함수 단위 스코프
if문은 함수가 아니기 때문에 블럭단위스코프로 바뀌지 않는 이상 이런 불안요소 발생

하지만 let or const로 바꾸면 ㄱㅊ 블록스코프이기때문에

이러한 불안요소 제거를 위해 let or const쓰자

근데 그 중에서도 const가 나음

```js
// 객체
const person{
    name:"jin",
    age:12
}
person.name="djf" 가능 person을 재할당한게 아니기 때문 배열도 마찬가지

본연의 객체 배열 같은 레퍼런스 객체 조장
```
