import styles from "./TodoItem.module.css";
const UpdateTodo = ({ todo, onUpdate }) => {
  const updateTodo = (e) => {
    // 체크박스 상태에 따라 완료 or 진행 중
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={updateTodo}
        checked={todo.status === "completed"}
      />
    </>
  );
};

export default UpdateTodo;
