import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
        id : 1,
        task : " todo mesg",
        completed : false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id,todo) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider