import { useEffect, useState } from "react";

export default function UseEfectDemo(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },5000)
        })
        return <h1>I have render {count} times ! </h1>
}