import styles from "./TodoItem.module.css";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  return (
    <>
      <li className={styles.todo}>
        <UpdateTodo todo={todo} onUpdate={onUpdate} />
        <label className={styles.text}>{todo.text}</label>
        <DeleteTodo todoId={todo.id} onDelete={onDelete} />
      </li>
    </>
  );
};
export default TodoItem;
