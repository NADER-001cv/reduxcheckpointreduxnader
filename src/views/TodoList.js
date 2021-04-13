import React from "react";
import { useSelector } from "react-redux";

import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";

const TodoList = () => {
       const todos = useSelector(state => state.todos)
    
  return (
    <main>
      <div className="container">
        <div className="todos">
        <TodosForm  todos={todos} />
        {
          todos.map(todo  => <Todos  todo={todo}  key={todo.id} />

          )
        }
        </div>
      </div>
    </main>
  );
};

export default TodoList;
