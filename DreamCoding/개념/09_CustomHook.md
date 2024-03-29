커스텀 훅은 React 함수 컴포넌트에서 상태 관리, 생명주기 로직, 그 외 다양한 기능을 재사용하기 위한 사용자 정의 훅입니다. 훅은 보통 "use"라는 접두사로 시작하며, 함수 컴포넌트 내에서만 사용됩니다.

커스텀 훅을 만들 때 주의할 점은 훅 함수의 이름이 항상 "use"로 시작해야 한다는 것입니다. 이렇게 함으로써 React는 해당 함수를 훅으로 간주하고, 특정 규칙에 따라 동작하게 됩니다.

커스텀 훅을 만드는 간단한 예시를 살펴보겠습니다. 아래의 코드는 간단한 상태 관리를 위한 커스텀 훅인 `useCounter`를 정의하는 예시입니다:

```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
```

이제 이 커스텀 훅을 사용하여 함수 컴포넌트를 작성할 수 있습니다:

```jsx
import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

이렇게 하면 `Counter` 컴포넌트에서 `useCounter` 훅을 사용하여 상태와 관련된 로직을 재사용할 수 있습니다. 커스텀 훅은 컴포넌트 로직을 모듈화하고 재사용성을 높이는 데 유용합니다.

커스텀 훅을 사용할 때 몇 가지 주의해야 할 사항들이 있습니다. 이러한 주의 사항들은 훅의 동작 및 React의 규칙을 준수하여 컴포넌트에서 예상치 못한 동작이 발생하지 않도록 하는 데 도움이 됩니다.

### 1. 훅 이름은 항상 "use"로 시작해야 합니다:

- React는 훅 함수를 구분하기 위해 이름이 "use"로 시작하는지 확인합니다. 예를 들어, `useEffect`, `useState`와 같이 이름을 정의해야 합니다.

```jsx
// 올바른 예시
function useCustomHook() {
  // 훅의 로직
}

// 부적절한 예시: 이름이 "use"로 시작하지 않음
function customHook() {
  // 훅의 로직
}
```

### 2. 훅은 컴포넌트 내에서만 호출되어야 합니다:

- 훅은 함수 컴포넌트 내에서만 호출되어야 합니다. 조건문, 반복문, 혹은 중첩 함수 내에서 호출하는 것은 지양해야 합니다.

```jsx
// 올바른 예시
function MyComponent() {
  const value = useCustomHook();
  // 훅을 컴포넌트의 최상위 레벨에서 호출
}

// 부적절한 예시: 조건문 내에서 훅 호출
function MyComponent() {
  if (condition) {
    const value = useCustomHook(); // 피해야 함
  }
}
```

### 3. 훅은 항상 동일한 순서로 호출되어야 합니다:

- 훅은 항상 동일한 순서로 호출되어야 React가 상태와 효과를 올바르게 추적할 수 있습니다.

```jsx
// 올바른 예시
function MyComponent() {
  const [count, setCount] = useState(0);
  const value = useCustomHook();
  // ...
}

// 부적절한 예시: 순서 변경
function MyComponent() {
  const value = useCustomHook();
  const [count, setCount] = useState(0); // 피해야 함
  // ...
}
```

이러한 주의 사항들을 지키면 React의 훅 시스템을 올바르게 활용할 수 있고, 컴포넌트의 동작을 예측 가능하게 만들 수 있습니다.
