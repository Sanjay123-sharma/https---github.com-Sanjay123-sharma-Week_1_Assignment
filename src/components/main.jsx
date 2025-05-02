import { useState } from "react";

// child component Display Count Initial Value
const DisplayCount=({count})=>{
    return(
        <>
        <div>
        <h1 className="head">Count : {count}</h1>
        </div>
        </>
    )
}

// child component for increase,decrease and reset buttons
const Buttons=({increase,decrease,reset})=>{

    return(
        <>
        <button onClick={increase} style={{fontSize:'50px', margin:'auto'}} className="div-btn2" >+</button>
        <button onClick={decrease} style={{fontSize:'50px', margin:'auto'}} className="div-btn1" >-</button>
        <button onClick={reset} style={{fontSize:'50px', margin:'auto'}} className="div-btn1" >Reset</button>
        </>
    )
}

// Parent Component 
const Counter=()=>{
    
    const [count,setcount]=useState(0); // state

    const increase=()=>setcount(count+1);
    const decrease=()=>setcount(count-1);
    const reset=()=>setcount(0);


    return(
        <>
            <div className="div"> 

              <DisplayCount count={count}/>
              <Buttons  increase={increase} decrease={decrease} reset={reset}/>

            </div>
        </>
    )
}

export default Counter;
