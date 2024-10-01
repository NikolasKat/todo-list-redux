import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todos",
   initialState: {
      todos: JSON.parse(localStorage.getItem("item")) || [],
      status: "",
   },
   reducers: {
      addTodo(state, action) {
         if (state.status && action.payload.length) {
            state.todos.push({
               id: new Date().toISOString(),
               text: action.payload,
               completed: false,
               date: new Date().toLocaleDateString(),
               status: state.status,
            });
         }
      },
      removeTodo(state, action) {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
      handleToggle(state, action) {
         state.todos = state.todos.map((item) => {
            if (item.id !== action.payload) return item;
            return {
               ...item,
               completed: !item.completed,
            };
         });
      },
      changeStatus(state, action) {
         state.status = action.payload;
      },
   },
});

export const { addTodo, removeTodo, handleToggle, changeStatus } =
   todoSlice.actions;

export default todoSlice.reducer;
