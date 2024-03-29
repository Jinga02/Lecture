# CSS Module와 Styled Compontes와 Tailwind란?

## CSS Module(Pure CSS)?

### CSS 모듈이란 무엇인가?

CSS 모듈은 웹 개발에서 스타일을 관리하는 현대적인 방법 중 하나이다. 이 기술은 전역 스코프로 인한 스타일 충돌 문제를 해결하고, 모듈 간에 스타일을 격리시켜 유지보수성을 향상시킨다.

### 주요 특징

### 1. 로컬 스코프

CSS 모듈은 각 모듈이 자체적인 스코프를 가지며 스타일을 정의한다. 이는 모듈 간에 서로 영향을 미치지 않고 독립적으로 작업할 수 있음을 의미한다.

### 2. 클래스 이름 고유화

클래스 이름은 자동으로 고유화되어, 다른 모듈과의 충돌을 방지한다. 이는 클래스 이름에 해시값을 추가하거나 특정한 규칙에 따라 동적으로 생성된다.

### 3. 모듈 임포트

JavaScript 파일에서 CSS 모듈을 가져와 사용할 수 있다. 이를 통해 컴포넌트 단위로 스타일을 모듈화하고, 필요한 곳에서 쉽게 재사용할 수 있다.

### 예시

CSS 모듈 파일(`styles.module.css`)

```css
/* styles.module.css */

.container {
  background-color #f0f0f0;
  padding 16px;
}

.title {
  font-size 20px;
  color #333;
}
```

JavaScript/React 파일

```jsx
// Component.js

import React from "react";
import styles from "./styles.module.css";

const Component = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
    </div>
  );
};

export default Component;
```

이렇게 하면 각 컴포넌트가 독립된 스타일을 유지하면서, 전역 스코프에서의 충돌을 피할 수 있다.

## Styled Components(CSS in JS)?

### Styled Components란 무엇인가?

Styled Components는 JavaScript 파일 안에서 컴포넌트 스타일을 작성할 수 있게 해주는 CSS-in-JS 라이브러리 중 하나이다. 이를 사용하면 JavaScript 파일 내에서 스타일을 정의하고 해당 스타일이 적용된 리액트 컴포넌트를 만들 수 있다.

### 주요 특징

### 1. 스타일을 컴포넌트로 감싸기

Styled Components는 스타일을 JavaScript 템플릿 리터럴로 감싸는 방식을 사용한다. 이를 통해 컴포넌트의 스타일이 컴포넌트 자체에 내장되어 가독성이 향상되고 유지보수가 쉬워진다.

### 2. 동적 스타일링

JavaScript 표현식을 사용하여 동적으로 스타일을 변경할 수 있다. 이는 상태에 따라 스타일을 동적으로 조절할 때 유용하다.

### 3. 자동으로 고유한 클래스 생성

Styled Components는 스타일을 감싼 컴포넌트마다 고유한 클래스를 생성하여 스타일의 격리를 보장한다. 이를 통해 전역 스타일 충돌을 방지한다.

### 4. 테마(Theme) 지원

테마를 사용하여 여러 컴포넌트에서 일관된 디자인 시스템을 쉽게 구현할 수 있다.

### 예시

```jsx
// StyledComponent.js

import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color ${(props) => (props.isPrimary ? "#3498db"  "#ecf0f1")};
  color ${(props) => (props.isPrimary ? "#ffffff"  "#2c3e50")};
  padding 10px;
`;

const StyledComponent = ({ isPrimary }) => {
  return (
    <StyledDiv isPrimary={isPrimary}>
      {isPrimary ? "Primary Style"  "Secondary Style"}
    </StyledDiv>
  );
};

export default StyledComponent;
```

위의 예시에서는 `styled.div`를 사용하여 `StyledDiv`라는 스타일이 적용된 `div` 컴포넌트를 만들었다. 조건에 따라 동적으로 스타일이 변경되며, 컴포넌트를 사용할 때 `isPrimary` prop에 따라 다른 스타일이 적용된다.

## Tailwind(Pure CSS)

### Tailwind CSS란 무엇인가?

Tailwind CSS는 유틸리티 기반의 CSS 프레임워크로, HTML 클래스를 사용하여 스타일을 정의한다. 기본적으로 많은 유틸리티 클래스를 제공하므로, 개발자는 반복적이고 일상적인 스타일링 작업을 간소화할 수 있다.

### 주요 특징

### 1. 유틸리티 기반

Tailwind CSS는 CSS 속성을 직접 사용하는 대신, 클래스를 통해 스타일을 정의한다. 예를 들어, `bg-blue-500` 클래스는 배경 색상을 파란색으로 지정한다.

### 2. 커스터마이즈 가능

Tailwind는 기본적으로 많은 유틸리티를 제공하지만, 프로젝트에 따라 필요한 유틸리티만 선택적으로 추가할 수 있다. 또한, 특정 색상, 폰트, 여백 등을 직접 정의하여 커스터마이즈할 수 있다.

### 3. Responsiveness

Tailwind는 반응형 디자인을 위한 유틸리티 클래스도 제공한다. 화면 크기에 따라 다른 스타일을 적용하기가 간편하다.

### 4. PurgeCSS 통합

Tailwind는 빌드 시에 사용하지 않는 스타일을 자동으로 제거하여 최종 파일 크기를 최적화한다.

### 예시

```html
<!-- index.html -->

<div class="bg-blue-500 text-white p-4">
  <p class="font-bold">Hello, Tailwind CSS!</p>
</div>
```

위의 예시에서는 `bg-blue-500`, `text-white`, `p-4`, `font-bold` 등의 Tailwind 클래스를 사용하여 배경색, 텍스트 색상, 여백, 폰트 굵기 등을 설정했다. 이렇게 간단한 클래스만으로도 다양한 스타일을 적용할 수 있다.

# CSS Module, Styled Components, Tailwind CSS 장단점 비교

## 1. CSS Module

### - 장점

     - 모듈별로 스타일이 격리되어 클래스 이름 충돌이 방지됨.
     - 전통적인 CSS 문법 사용 가능.
     - 컴포넌트 스타일을 모듈화하여 유지보수가 쉬움.

### - 단점

     - 클래스 이름을 자동으로 생성하기 때문에 직접 제어가 어려움.
     - 특정 컴포넌트에만 적용되는 스타일을 만들 때 추가 작업이 필요함.

## 2. Styled Components

### - 장점

     - JavaScript 파일에서 동적이고 모듈화된 스타일을 적용할 수 있음.
     - 컴포넌트 스코프 내에서 스타일이 적용되어 클래스 이름 충돌이 없음.
     - 테마를 활용한 일관성 있는 디자인 구현이 용이.

### - 단점

     - 기존 CSS 문법과 다르게 익숙해지는데 시간이 필요함.
     - 빌드 시 동적으로 생성되는 클래스 이름이 가독성을 떨어뜨릴 수 있음.

## 3. Tailwind CSS

### - 장점

     - 유틸리티 기반으로 빠르게 스타일을 적용할 수 있음.
     - 직관적인 클래스 이름을 사용하여 HTML에서 스타일을 명시적으로 표현.
     - 프로젝트에 필요한 유틸리티만 선택적으로 추가 가능.

### - 단점

     - HTML에 직접 클래스를 작성하기 때문에 가독성이 감소할 수 있음.
     - 커스터마이징이 어려울 수 있으며, 특정 디자인 시스템과의 통합이 다소 어려울 수 있음.
     - 프로젝트 규모가 커질수록 파일 크기가 커질 수 있음.

각 방법은 사용 목적과 개발자의 선호도에 따라 선택되어야 한다. CSS Module은 모듈화와 유지보수성이 강조되는 프로젝트에, Styled Components는 동적이고 모듈화된 스타일이 필요한 경우에, 그리고 Tailwind CSS는 빠르고 직관적인 스타일링이 필요한 경우에 적합하다.
