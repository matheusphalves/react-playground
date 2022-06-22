import { useState } from "react"; //hook


export function Counter(){

    const [counter, setCounter] = useState(0);

    function increment(){
        console.log('Incrementing! ', counter);
        setCounter(counter+1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}