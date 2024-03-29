# UseImmer

## 개념 및 정의

UseImmer는 React에서 불변성을 쉽게 유지할 수 있도록 도와주는 라이브러리입니다. Immer는 독일어로 '항상'을 의미하며, 이 라이브러리는 Javascript 객체의 불변성을 항상 유지하면서 상태를 변경하도록 도와줍니다.

## 장점

1. 간결함: UseImmer를 사용하면 상태를 변경하는 코드가 훨씬 간결해집니다. 일반적으로 불변성을 유지하려면 복잡한 구조의 객체나 배열을 복사하고, 필요한 부분만 변경하는 번거로운 과정이 필요하지만 UseImmer를 사용하면 마치 불변성을 유지하지 않는 것처럼 코드를 작성할 수 있습니다.
2. 에러 방지: UseImmer를 사용하면 불변성 유지를 위한 복잡한 코드로 인한 에러를 방지할 수 있습니다.

## 단점

1. 학습 곡선: UseImmer의 사용 방법이 기존의 상태 관리 방식과 다르기 때문에 별도의 학습이 필요합니다.
2. 부가적인 라이브러리: 이미 상태 관리를 위한 다른 라이브러리를 사용하고 있다면 UseImmer를 추가로 사용하는 것은 프로젝트의 복잡성을 증가시킬 수 있습니다.

## 예시 코드

```javascript
import React from "react";
import { useImmer } from "use-immer";

function App() {
  const [state, setState] = useImmer({ count: 0, text: "hello" });

  function onClick() {
    setState((draft) => {
      draft.count++;
      draft.text += " world";
    });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{state.text}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```

위의 코드에서는 `useImmer` 훅을 사용하여 `count`와 `text`라는 두 개의 상태를 관리하고 있습니다. `setState` 함수를 호출할 때는 기존 상태를 직접 수정하는 것 같은 코드를 작성하면 되지만, 실제로는 불변성이 유지됩니다.
