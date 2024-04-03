import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myTodoItems=[
    {
        id:1,
        title:'I need to finish my work'
    },
    {
        id:2,
        title:'I need to eat this'
    },
    {
        id:3,
        title:'I need to eat this'
    }
]

const App: React.FC=()=>{
    const  [state, setState] = useState(true);
    return(
        <div>
            <Todo items={myTodoItems}/>
            <button onClick={(e)=>{setState(!state)}}>Toggle</button>
            {state ? <Counter/> : ""}
        </div>
    )
}

export default App;