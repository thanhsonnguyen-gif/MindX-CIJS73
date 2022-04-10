import { useState } from 'react'
import ToDoForm from './components/todoform'
import TodoItems from './components/todoitems'

const ToDoListApp = () => {
  const [todoItems, setToDoItems] = useState([{value: 'hw', done: true}, {value: 'shopping', done: true}])
  const handleCreateNewToDo = (newToDoValue) => {
    setToDoItems([
      ...todoItems,
      {
        value: newToDoValue,
        done: false
      }
    ])
  }
  return (
    <>
      <ToDoForm onCreateNewToDo={handleCreateNewToDo}/>
      <ul>
      <TodoItems todoItems={todoItems}/>
      </ul>
      <span>{} tasks left</span> <span>MindX todoList</span>
    </>
  );
}

export default ToDoListApp;