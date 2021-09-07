import React, { useEffect, useRef, useState } from "react";

function MyComponent(){

    const[num,setNum]=useState(0);

    // const useRefvar = useRef(10);

    useEffect(()=>{
        console.log("I am clicked "+num);

        // Getting the previous value
        return ()=>{
            console.log("cleanup called "+num);
        }
    },[num])
    return(
        <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>
    )
}

export default MyComponent;