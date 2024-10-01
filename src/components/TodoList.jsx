import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
   const todos = useSelector((state) => state.todos.todos);

   const items = todos.map((item) => {
      return (
         <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            status={item.status}
            id={item.id}
            date={item.date}
         />
      );
   });

   return <ul className="block w-[403px] mt-11 mx-auto">{items}</ul>;
};

export default TodoList;
