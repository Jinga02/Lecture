## 컴포넌트 재사용을 위해 `props`를 사용하는 방법

`props`는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달하는 데 사용되는 매개변수이다. 컴포넌트를 재사용하기 위해 `props`를 활용하는 방법은 다음과 같다

1. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때, `props`를 사용합니다. 이는 자식 컴포넌트의 속성으로 전달되며, 자식 컴포넌트에서는 `props`를 통해 해당 데이터에 접근할 수 있다.
2. 자식 컴포넌트에서 `props`를 사용하여 전달받은 데이터를 활용합니다. 이를 통해 컴포넌트의 동작이나 렌더링 결과를 조작할 수 있다.

예시 코드에서 `Card` 컴포넌트는 `children`이라는 `props`를 받도록 설정되어 있다. 이를 활용하여 `Children` 컴포넌트에서 `Card` 컴포넌트를 사용할 때, 필요한 내용을 `props`를 통해 전달할 수 있다.

다음은 예시 코드를 수정하여 `props`를 사용하는 방법이다

```jsx
const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "black",
        width: "200px",
        height: "200px",
        margin: "1rem",
        padding: "1rem",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

const Children = () => {
  return (
    <>
      <Card>
        <h1>안녕</h1>
        <p>안녕못해</p>
        <h1>어쩌라고</h1>
      </Card>
      <Card>
        <h1>강남?!</h1>
        <p>강북?!</p>
        <h1>서울...</h1>
      </Card>
      <Card>
        <h1>합격이다</h1>
        <p>당연하지</p>
        <h1>합격이지</h1>
      </Card>
    </>
  );
};

export default Children;
```

위 예시 코드에서 `Card` 컴포넌트는 `children`이라는 `props`를 받도록 설정되어 있다. `Children` 컴포넌트에서 `Card` 컴포넌트를 사용할 때, 필요한 내용을 `children`으로 전달하면 됩니다. 이렇게 하면 `Card` 컴포넌트가 재사용되며, 필요한 내용을 각각 다르게 전달할 수 있다.
