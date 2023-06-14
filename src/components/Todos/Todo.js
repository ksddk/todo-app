import { FaCat, FaCheck, FaRegTrashAlt  } from "react-icons/fa";
import styles from "./Todo.module.css"

function Todo( { todo, deleteTodo, toggleTodo } ) {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <FaCat className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <FaRegTrashAlt 
                className={styles.deleteIcon} 
                onClick={() => deleteTodo(todo.id)}
            />
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />

        </div>
    )
}

export default Todo