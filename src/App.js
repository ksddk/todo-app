import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
      setTodos(todos.map((todo) => {
        return todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
      }))
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

const completedTodosCounter = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <div className='Content'>
        <h1>Приложение для записи милых имён Ксюши</h1>
        <TodoForm addTodo={addTodoHandler}/>
        {!!todos.length && <TodosActions 
          completedTodosExist={!!completedTodosCounter}
          resetTodos={resetTodoHandler} 
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />}
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodoHandler} 
          toggleTodo={toggleTodoHandler}
        />
        {completedTodosCounter > 0 && <h2>{`Ты назвал ${completedTodosCounter} ${completedTodosCounter > 1 ? 'names' : 'name'}!`}</h2>}
      </div>
    </div>
  );
}

export default App;
