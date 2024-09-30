import { useEffect, useState } from "react";

import AddMenu from "./components/AddMenu";
import TodoList from "./components/TodoList";

function App() {
   const [todos, setTodos] = useState(
      JSON.parse(localStorage.getItem("item")) || []
   );
   const [text, setText] = useState("");
   const [status, setStatus] = useState("");

   const changeStatus = (textStatus) => {
      setStatus(textStatus);
   };

   useEffect(() => {
      localStorage.setItem(`item`, JSON.stringify(todos));
   }, [todos]);

   const addTodo = () => {
      if (text.trim().length && status) {
         setTodos([
            ...todos,
            {
               id: new Date().toISOString(),
               text,
               completed: false,
               date: new Date().toLocaleDateString(),
               status: status,
            },
         ]);
         setText("");
      }
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((item) => item.id !== id));
   };

   const handleToggle = (id) => {
      setTodos((todos) =>
         todos.map((item) => {
            if (item.id !== id) return item;

            return {
               ...item,
               completed: !item.completed,
            };
         })
      );
   };

   return (
      <>
         <h1 className="text-center pt-3 uppercase">The best todo-app</h1>
         <AddMenu
            addTodo={addTodo}
            text={text}
            setText={setText}
            status={status}
            changeStatus={changeStatus}
         />
         <TodoList
            todos={todos}
            removeTodo={removeTodo}
            handleToggle={handleToggle}
         />
      </>
   );
}

export default App;
