import { useState } from "react";

function Counter (){
    const[count,setCount]=useState(0)
    const[feedback,setFeedback]=useState()

    return(
        <div>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        <p>you have clicked{count}</p>
        </div>
    )
}
export default Counter;