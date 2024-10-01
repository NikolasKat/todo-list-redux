import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "./store/todoSlice";
import AddMenu from "./components/AddMenu";
import TodoList from "./components/TodoList";

function App() {
   const [text, setText] = useState("");
   const todos = useSelector((state) => state.todos.todos);

   const dispatch = useDispatch();

   const addTask = () => dispatch(addTodo(text));

   useEffect(() => {
      localStorage.setItem(`item`, JSON.stringify(todos));
   }, [todos]);

   return (
      <>
         <h1 className="text-center pt-3 uppercase">The best todo-app</h1>
         <AddMenu addTodo={addTask} text={text} setText={setText} />
         <TodoList />
      </>
   );
}

export default App;
