```js
import { useReducer, useState } from "react";
import personReducer from "../reducer/person-reducer";

const Mentors = () => {
  // 첫번째 매개변수로 객체를 새로 만드는 로직, 두번째로 초기 객체
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // 멘토 이름 변경하기
  const changeMentorName = () => {
    const inputName = prompt("변경 할 멘토의 이름을 입력하세요");
    const changeName = prompt("멘토의 이름을 무엇으로 변경하시겠습니까?");
    dispatch({ type: "update", inputName, changeName });
  };

  // 멘토 타이틀 변경하기
  // const changeMentorTitle = () => {
  //   const inputName = prompt("변경 할 멘토의 이름을 입력하세요");
  //   const changeTitle = prompt("멘토의 타이틀을 무엇으로 변경하시겠습니가?");
  //   dispatch({ type: "updated", inputName, changeTitle });
  // };

  // 멘토 추가하기
  const createMentor = () => {
    const inputName = prompt("추가 할 멘토의 이름을 입력하세요.");
    const inputTitle = prompt("추가 할 멘토의 타이틀을 입력하세요.");
    dispatch({ type: "add", inputName, inputTitle });
  };

  // 멘토 삭제하기
  const deleteMentor = () => {
    const selectMentor = prompt("삭제 할 멘토의 이름을 입력해주세요.");
    dispatch({ type: "deleted", selectMentor });
  };
  return (
    <div>
      <h1>{person.userName}이는 개발자</h1>
      <p>{person.userName}의 멘토는 : </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      {/* <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기 바꾸기</button> */}
      <button onClick={createMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
};
const initialPerson = {
  userName: "재환",
  useTitle: "개발자",
  mentors: [
    { name: "앨리", title: "시니어 개발자" },
    {
      name: "제임스",
      title: "시니어 개발자",
    },
  ],
};

export default Mentors;
```

```js
function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { inputName, changeName } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === inputName) {
            return { ...mentor, name: changeName };
          }
          return mentor;
        }),
      };
    }
    case "add": {
      const { inputName, inputTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: inputName, title: inputTitle }],
      };
    }
    case "deleted": {
      const { selectMentor } = action;
      return {
        ...person,
        mentors: person.mentors.filter(
          (mentor) => mentor.name !== selectMentor,
        ),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입입니다 : ${action.type}`);
    }
  }
}

export default personReducer;
```
