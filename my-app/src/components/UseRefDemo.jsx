import { useRef } from "react";
export default function UseRefDemo()
{
    let ref =useRef(0);
        function handleclick()
        {
            ref.current=ref.current+1;
            alert=('you cliked' + ref.current+'times!')
        }
        return (
            <>
            <button onClick={handleclick}> click me </button>
            </>
        )
} 