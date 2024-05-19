import { useState } from "react";
import "../styles/style.css"

interface checkBox{
    initIsDone:boolean;
}

export default function checkIsDone({initIsDone}:checkBox) {
    const [isDone , setIsDone] = useState(initIsDone);

    const changeCheckBox = () =>{
        setIsDone(prev => !prev);
    }

    return(
        <input className="checkBox" type="checkbox" checked={isDone} onChange={changeCheckBox} />
    )
};
