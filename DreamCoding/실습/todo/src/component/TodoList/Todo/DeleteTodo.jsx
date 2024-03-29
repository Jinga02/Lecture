import { BsFillTrashFill } from "react-icons/bs";
import styles from "./TodoItem.module.css";
const DeleteTodo = ({ todoId, onDelete }) => {
  const deleteTodo = () => {
    onDelete(todoId);
  };
  return (
    <span className={styles.icon}>
      <button className={styles.button} onClick={deleteTodo}>
        <BsFillTrashFill />
      </button>
    </span>
  );
};
export default DeleteTodo;
