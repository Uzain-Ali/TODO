import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
const Todo:React.FC=()=>{
    return(
        <div className="TodoContainer">
            <ol>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ol>
        </div>
    )
}

export default Todo;