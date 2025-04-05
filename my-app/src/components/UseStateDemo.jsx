import { useState } from "react";
export default function UseStateDemo()
{
    const [liked,setLiked]=useState(true);
    function handlechange(e)
    {
        setLiked(e.target.checked)
    }
    return (
        <>
        <label>
            <input type="checkbox" checked={liked} onChange={handlechange}/>
            i liked this change.
        </label>
        <p>
            you {liked? 'liked' : 'did not like '} this change.
        </p>
        </>
    )
}
