import React, {useState, useEffect} from "react";
import "./style.css";

const Counter: React.FC = (props) =>{

    const [counter, setCounter]=useState<number>(0);

    useEffect(()=>{
        console.log('Component Mount')

        return function(){
            console.log("Unmount Counter")
        }
    }, []);

    useEffect(()=>{
        console.log('User updated counter',counter)

        return ()=>{
            console.log("Counter useEffect Return",counter);
        }
    }, [counter]);


    const handleIncrement=()=>{
        setCounter(counter+1)
    }

    const handleDecrement =()=>{
        if(counter === 0) return;
        setCounter(counter-1)
    }
    return(
        <div className="counterContainer">
            <h1>{counter}</h1>
            <button onClick={handleIncrement} style={{background:"lightgreen"}}>Inc</button>
            <button onClick={handleDecrement} style={{background:"tomato"}}>Dec</button>
        </div>
    )
};


export default Counter;