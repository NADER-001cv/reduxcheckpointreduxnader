import React from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/action/action";
import TodoModal from "./TodoModal";

const Todo = ({todo}) => {
     const dispatch = useDispatch()
  return (
    <div className="todos-todo">
      <div className="todos-todo_icon">
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-todo_text"> {todo.description} </div>
      <div className="todos-todo_cta">
    
            <TodoModal todo={todo} />

          <FeatherIcon icon="edit" size="0" />
        <div className="todos-todo_cta-delete"
                  onClick={ () => dispatch(deleteTodo(todo.id))}     >
          <FeatherIcon icon="trash-2" size="20" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
