import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import {addTodo} from '../../redux/action/action'
import { useDispatch } from "react-redux";
const TodosForm = ({todos}) => {
  const dispatch = useDispatch()
   const [name,setName ] =   useState("")
        const handlename = (e) => {
          setName(e.target.value)
        }
               useEffect( ()  => {


                 setName('')
               }
               ,[])
               
  return (
    <div className="todos-form">
      <div className="todos-form_icon">
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input 
           onChange={handlename}
        type="text" 
        placeholder="add new task" />
      </div>
      <div className="todos-form_submit">
        <button className="btn"
         onClick={() => dispatch(addTodo({
                    id :Date.now(),
                    description:name,
                    done:false            
         }
         )
         
         
         )
       
        } 
        
        >ADD</button>
           
      </div>
    </div>
  );
};

export default TodosForm;
