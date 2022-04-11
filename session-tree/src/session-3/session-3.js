import { useState } from "react";
import ToDoForm from "./components/todoform";
import TodoItems from "./components/todoitems";

const ToDoListApp = () => {
  const [todoItems, setToDoItems] = useState([
    { value: "tan gai", done: false },
    { value: "shopping", done: false },
  ]);
  const handleCreateNewToDo = (newToDoValue) => {
    setToDoItems([
      ...todoItems,
      {
        value: newToDoValue,
        done: false,
      },
    ]);
  };
  return (
    <>
      <ToDoForm onCreateNewToDo={handleCreateNewToDo} />
      <TodoItems toDoItems={todoItems} />
      <span style={{margin: 20}}>{todoItems.length} tasks left</span><span style={{margin: 20}}>MindX todoList</span>
    </>
  );
};

export default ToDoListApp;

// import TodoForm from "./components/todoform";
// import TodoItems from "./components/todoitems";
// import { useState } from "react";

// const TodoList = () => {
//   const [toDoItems, setToDoItems] = useState([
//     { value: "lam bai tap", id: "1" },
//   ]);
//   const handleCreateNewToDo = (newToDo) => {
//     setToDoItems (
//       ...toDoItems,
//       {
//         value: newToDo,
//         done: false
//       }
//     )
//   };

//   return (
//     <>
//       <TodoForm onCreateNewToDo={handleCreateNewToDo} />
//       <TodoItems toDoItems={toDoItems}/>
//     </>
//   );
// };

// export default TodoList;
