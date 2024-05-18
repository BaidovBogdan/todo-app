import { useState } from "react";

interface checkBox{
    initIsDone:boolean;
}

export default function checkIsDone({initIsDone}:checkBox) {
    const [isDone , setIsDone] = useState(initIsDone);

    const changeCheckBox = () =>{
        setIsDone(prev => !prev);
    }

    return(
        <input type="checkbox" checked={isDone} onChange={changeCheckBox} />
    )
};
