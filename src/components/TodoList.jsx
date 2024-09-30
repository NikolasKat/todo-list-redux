import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggle, removeTodo }) => {
   const items = todos.map((item) => {
      return (
         <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            status={item.status}
            id={item.id}
            date={item.date}
            removeTodo={removeTodo}
            handleToggle={handleToggle}
         />
      );
   });

   return <ul className="block w-[403px] mt-11 mx-auto">{items}</ul>;
};

export default TodoList;
