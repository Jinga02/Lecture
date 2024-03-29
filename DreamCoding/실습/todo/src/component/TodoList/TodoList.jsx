import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

import AddTodo from "./AddTodo.";
import TodoItem from "./Todo/TodoItem";

const TodoList = ({ filter }) => {
  // 콜백함수로 감싸지 않으면 리렌더링이 일어날때마다 함수가 호출되서 불필요한 동작을 한다
  const [todos, setTodos] = useState(() => readTodosFromLocalStroage());

  // todo 추가
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  // todo 업데이트
  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  };
  // todo 삭제
  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleFilter = (todos, filter) => {
    if (filter === "all") {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterdTodo = handleFilter(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterdTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAdd={addTodo} />
    </section>
  );
};

export default TodoList;

const readTodosFromLocalStroage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
