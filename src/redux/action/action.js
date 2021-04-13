import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "./actiontype"


export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload:  data
    }
}

export const editeTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload:  id
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:  id
    }
}

export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        payload:  id
    }
}