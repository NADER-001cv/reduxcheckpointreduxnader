
import  {ADD_TODO , EDIT_TODO, DELETE_TODO, DONE_TODO } from "../action/actiontype";

const initialState = {
  todos:
  
  [
    
    {id:1,description:'good',done:true},
    {id:2,description:'good',done:true},
    {id:3,description:' not good',done:false}
  ]
  
}


 

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
          

      return { ...state,todos:[...state.todos,action.payload]};
         case DELETE_TODO :
            return      {...state,todos:  state.todos.filter(el  => el.id  !== action.payload)}
                   
                 
           case EDIT_TODO:
                 return     {...state,todos: state.todos.map(todo => todo.id === action.payload.id ? 
           
                  {...todo,description:action.payload.descrption} :todo  )}
              case DONE_TODO :
              return {...state,todos:state.todos.map(todo  => todo.id === action.payload.id ?
                {...todo,done:action.payload.id} :todo
                
                )}
    default:
      return state;
  }
};

export default Reducer;